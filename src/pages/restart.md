---
title: Restart
---

<!--

  Copyright IBM Inc. All Rights Reserved.
  SPDX-License-Identifier: Apache-2.0

-->

<PageDescription>

Use this page to learn how to customize the restart behaviour of components.

</PageDescription>

<AnchorLinks>
  <AnchorLink>When restarts occur</AnchorLink>
  <AnchorLink>Configuring restart behaviour via the component configuration</AnchorLink>
  <AnchorLink>Customizing the restart process</AnchorLink>
  <AnchorLink>Details</AnchorLink>
</AnchorLinks>

A restart means rerunning a components executable+commandline in the same working directory, normally because the associated task finished without success.

The customizations that can be made include
- Deciding when a restart should be attempted
- How many times a restart should be attempted before giving up
- Modifying files to prepare for a restart

**Note:** When restarting the following rules hold:
- The component executable cannot be changed
- The component command line cannot be changed
- The component working directory will be the same
- It is possible to modify the contents of the working directory before the restart

## When restarts occur

ST4SD defines a number of [exit-reasons](#exit-reasons). Whether a restart occurs depends on
- The exit-reason
- The components configuration
- The result of executing developer custom hooks

By default, components are restarted when a component task exits with the following exit-reasons:
- `ResourceExhausted`
  - *Max restart attempts:* None i.e. try forever
- `SubmissionFailed`
  - *Max restart attempts:* 5

It is **never** triggered for the following exit-reasons
- `Killed`
- `Cancelled`

It can be turned on/off for
- `Success`
- `KnownIssue`
- `SystemIssue`
- `UnknownIssue`
- `ResourceExhausted`

**Note:** You can trigger the restart process on `Success` because some programs can signal success when this is not true.

## Configuring restart behaviour via the component configuration

<AnchorLinks small>
  <AnchorLink>Customizing which exit reasons trigger restart for a component</AnchorLink>
  <AnchorLink>Controlling the number of restart attempts</AnchorLink>
  <AnchorLink>Special-Case: SubmissionFailed</AnchorLink>
</AnchorLinks>

What exit-reasons trigger a restart attempt for a component, and how many times to try before giving up, can be specified in the component's YAML.

### Customizing which exit reasons trigger restart for a component

The exit-reasons that trigger a restart can be customized using the `restartHookOn` key of the `workflowAttributes` top-level component key. The value of this key is a list of exit reasons which should trigger the restart process e.g.

```yaml
command:
  executable: ...
workflowAttributes:
  restartHookOn: 
     - UnknownIssue
     - ResourceExhausted
```

**Note:** specifying `restartHookOn` overrides the default, which is `ResourceExhausted` (see [here](#special-case:-submissionfailed) for why `SubmissionFailed` is not included here).
Therefore, you must explicitly specify `ResourceExhausted` in the custom list you give to `restartHookOn` if you want to restart on this exit-reason in addition to others. 

### Controlling the number of restart attempts

The number of restart attempts for exit-reasons other than `SubmissionFailed` can be customized using the `maxRestarts` key of the `workflowAttributes` top-level component key e.g.

```yaml
command:
  executable: ...
workflowAttributes:
  maxRestarts: #Any value >= -1
```

The values -1 and 0 have special meanings:

- -1: No limit on restarts. This is the default
- 0: Do not restart
- N: Restart up to N times

### Special-Case: SubmissionFailed

Failure by the specified execution backend e.g. Kubernetes, LSF, to start the components tasks is given the exit-reason `SubmissionFailed`.
A component task can exit with  `SubmissionFailed` a maximum of five times.
The sixth `SubmissionFailed` failed will result in the component transitioning to its final state.

`SubmissionFailed` is handled separately to other codes as it means the executable did not even run. You cannot turn it off via `restartHookOn`.

**Note**: Currently the maximum number of submission failed restarts is the minimum of (`maxRestarts`, 5).

## Customizing the restart process

<AnchorLinks small>
  <AnchorLink>Defining a restart hook</AnchorLink>
  <AnchorLink>Restart hook function return values</AnchorLink>
  <AnchorLink>Restart hook location</AnchorLink>
</AnchorLinks>

### Defining a restart hook

In many cases further information than the exit-reason is required to decide if a restart should be attempted e.g. checking if certain files have been written, or their content. It may also be necessary to prepare the working directory of a component for restarting by deleting/modifying/creating files. 

The `st4sd-runtime` provides a mechanism for the workflow developer to add custom code to the restart process for a component. This custom code can decide if the restart should proceed and perform any modifications necessary to the working directory. We call this custom code a `restart hook`.

This restart hook is called after the filtering on exit-reason i.e. if the workflow has been configured not to restart on a given exit-reason, the restart hook is not called.

The restart hook is supplied by the developer as a python function called `Restart` with certain parameters (see below). You can put this function in any file that follows the rules in [restart hook location](#restart-hook-location).

The signature and docs of this function are:

```python
def Restart(workingDirectory, restarts, componentName, 
            log, exitReason, exitCode):
    """
    This function is expected to examine the components workingDirectory, 
    optionally make modifications to it, and return a restart decision.

    Parameters
    ----------
    workingDirectory: str
        Directory containing simulation to be restarted
    restarts: int
        The number of times this function for this working directory
    componentName: str
        The label the workflow engine uses to id this component
    log: logging.Logger
        A logger used to write output messages
    exitReason: str
        Defines why the program exited
    exitCode: int
        The exit-code returned by the program

    Returns
    -------
    string: One of the strings defined by experiment.codes.restartContexts that capture the hooks decision
    """
    
    #Example: Check if a file call checkpoint.dat exists 
    retval = "RestartContextRestartNotPossible"
    if os.path.exists(os.path.join(workingDirectory, "checkpoint.dat")):
      retval = "RestartContextRestartPossible"
      
    return retval   
```

The next section describes the possible return values of the `Restart` function.

Each component can have its own restart function. When the component needs to be restarted, the `st4sd-runtime` identifies which custom function to use (as decribed in  [restart hook location](#restart-hook-location)) and calls it with the relevant parameters (see the function parameters in code snippet above). These include the working directory of the failed component.

The custom developer function then can inspect files, modify those files, for example to add a `restart` keyword, and then tell the `st4sd-runtime` how to proceed by returning one of the strings in the next section.

### Restart hook function return values

The custom `Restart` function must return one of the following strings

- `RestartContextRestartPossible`: Should restart
- `RestartContextHookNotAvailable`: There is no specific custom logic for this component so try to restart (only need to use this if your custom restart function is used by all components)
- `RestartContextRestartNotRequired`: A restart is not necessary
- `RestartContextRestartNotPossible`: A restart is not poossible
- `RestartContextHookFailed`: Tried to check/prepare for a restart but something went wrong
- `RestartContextRestartConditionsNotMet`: Couldn't determing if a restart is possible because some necessary information is missing

### Restart hook location

<InlineNotification kind="warning">

If you're unsure of  where to put your restart hook first check [project types](/packaging-workflows) which explains how to bundle additional files with a virtual experiment. 

</InlineNotification>

The restart hook function 
- Must be located in a python file in a directory called `hooks` that is in the top-level of the experiment instance. 
   - This can be done using the experiment package directory structure or using a manifest.
- The `hooks` directory must also contain an empty `__init__.py` file
- If the file containing the restart hook function is called `restart.py` then nothing further is required. However:
     - This `restart` hook function will be called for every component, and it is the developer's responsibility to filter what should happen based on the component it is being called for
- If the file containing the restart hook function is called any other name then this name must be specified in the components YAML using `restartHookFile`
     - This `restart` hook function will only be called for components that specify it via `restartHookFile`

For example, you might create restart hook for a component called `MyComponent` in a file `mycomponent.py`. The configuration of `MyComponent` would contain

```yaml
command:
  executable: ...
workflowAttributes:
  restartHookFile: mycomponent.py
```

## Details

### Restart Decision Process

The following describes how given an exit-reason for a component tasks the `st4sd-runtime` decides to attempt a restart

- If exit-reason is `SubmissionFailed` and < `maxSubmissionFailed` attempts and < `maxRestart` attempts
  - Restart **without** calling the components restart hook 
- Else if exit-reason is in the `restartHookOn` list and < `maxRestart` attempts
  - If  the components restart hook exists:
    - Call it and continue based on its return value
  - Else
    - Restart
- Else if exit-reason is not in `Success`/`Killed`/`Cancelled` **AND** the system is unstable
  - If  the components restart hook exists:
    - Call it and continue based on its return value
  - Else
    - Restart
- Else
  - A restart is not attempted

If a restart is initiated the `st4sd-runtime` waits until the restarted task finishes before beginning the above decision process again. 

If there is no custom restart hook a restart will result in running the task again in the same working dir. This will work for programs that can deduce their restart state when they start-up. 

**Unstable System**: The `st4sd-runtime` monitors the system for IO errors indicating filesystem instability e.g. unable to read/write component working dirs.  If a component fails when it determines such an instability exist, the `st4sd-runtime` will wait for the instability to resolve and restart the component i.e. it assumes the failure was due to the IO issues. 

In every other case (no restart, failed restart) the component finishes with the original exit-reason.


### Exit Reasons

When a components task exits the `st4sd-runtime` assigns it an exit-reason. Usually these map to the tasks return-code

- `Success`
   - Return-code 0
- `Killed`
   - Received *SIGKILL*
- `Cancelled`
   - Received *SIGINT* or *SIGTERM*
- `KnownIssue`
   - Return-code was between 1 and 127 inclusive
- `SystemIssue`
   - Received a signal not *SIGINT/SIGTERM/SIGXCPU/SIGKLL* (return code >= 128)
- `UnknownIssue`
   - Could not determine why the task failed. Maybe an internal `st4sd-runtime` issue.
- `ResourceExhausted`
   - Task hit the wall time. This can involve it gettting *SIGXCPU* and hence exiting with return-code 128+*SIGXCPU* (often 152). However, it can be deduced without return-code from some backends
   - **Default wall time is 1 hour**
- `SubmissionFailed`
   - The submission to the execution backend failed at some point. 








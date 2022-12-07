---
title: Key Features
---

<!--

  Copyright IBM Inc. All Rights Reserved.
  SPDX-License-Identifier: Apache-2.0

-->

<PageDescription>

Explore the key features that ST4SD provides

</PageDescription>

ST4SD's aim is to provide a virtual experiment execution runtime with
differentiating technology that supports computational workflows and
computational workflow developers.

<Accordion>

<AccordionItem title="Eliminating Failure Cases: Robust Execution Support">

- **Problem**: _Failure of large-scale , long-time campaign executions, often
  deep into execution, due to identifiable errors at or before submission time_
- **Solution**: From many years running large virtual experiment campaigns we've
  learned a number of hard lessons about ensuring robust execution. We've
  captured these in the runtime with features including image checking, image
  pinning, unstable filesystem identification and enhanced exit-code handling.
  We also developed an automatic test-harness generation tool for
  virtual experiments to further help identify errors quickly

- **More Information**:

  - See how these features relate to [controlling restart behaviour](/restart)
  - Coming soon: We will release our tool for automated testing of virtual experiments

</AccordionItem>
<AccordionItem title="Reusing Calculations: Memoization">

- **Problem**: _Repeating expensive calculations due to lack of knowledge of
  existing results or the difficulty in incorporating existing results into a
  new virtual experiment execution which could potentially use them_
- **Solution**: We provide a fast, high-fidelity method for identifying if a
  task in a virtual experiment has already been executed and reusing those
  results instead of re-executing the same task again. It works across clusters
  and architectures and addresses issues in existing similar implementations.
- **More Information**:
  - Read [our documentation](/memoization) for using this capability
  - Read [our paper](https://ieeexplore.ieee.org/document/9860151) on this topic

</AccordionItem>

 <AccordionItem title="Moving from Classic HPC to Cloud: Pluggable Backends">

- **Problem**: _Cloud technologies are being rapidly adopted across many domains
  but for many researchers the large compute resource they require is currently
  managed by a classic HPC stack that is not accessible from a cloud-platform.
  How can they leverage the resources they have access to now while also
  preparing for future compute environments? _

- **Solution**: The ST4SD Runtime solves this issue by abstracting the execution
  backend e.g. LSF or Kubernetes from the virtual experiment description. This
  allows a researcher to initially write a virtual experiment that runs on LSF
  and later easily move it to Kubernetes. To do this, the same
  virtual experiment code is enhanced with some extra information for
  Kubernetes - which can be as little as a couple of lines - the rest of the
  virtual experiment logic stays the same.

- **More Information**:
  - See [here](/installation#install-on-classic-hpc) for how to install
    `st4sd-runtime-core` on a classic LSF managed cluster
  - This capability leverages _Reducing Complexity: Simple Specification, Smart
    Runtime_ and can also use _Simplifying Multi-Environment Deployments:
    Platform Layers_. See those feature descriptions for more details.
  - Coming soon: Detailed example of building a virtual experiment that can run
    on an LSF based HPC cluster and OpenShift

</AccordionItem>

<AccordionItem title="Reducing Time-to-Insight: Analytics Co-processing">

- **Problem**: _Many computational workflows, for example in particle
  simulation, consist of a long-simulation followed by expensive analysis over
  each step of the simulation. These computations could be overlapped to save
  time and also to provide quicker feedback for decision making_

- **Solution**: The ST4SD Runtime provides the capability to run analytics in
  parallel with the simulation so it can e.g. consume steps from simulation in
  batches. This reduces time-to-insight as most of the analytics workload is
  performed concurrently with the simulation, allowing it to complete shortly
  after it. This feature also allows much quicker feedback on simulation
  behaviour which can be used by external entities to make decisions like
  stopping an experiment when they see an answer is accurate enough.
- **More Information**:
  - Read [our tutorial](/tutorial) for examples of how to use this capability
  - Many studies using ST4SD, for example on
    [computational force-field training](http://dx.doi.org/10.1021/acs.jpcb.0c06132)
    and
    [worm-like micelle identification](http://dx.doi.org/10.1021/acs.jctc.0c00311)
    used this capability heavily

</AccordionItem>

<AccordionItem title="Simplifying Multi-Environment Deployments: Platform Layers">

- **Problem**: _As researchers we often ran into issues maintaining
  virtual experiments across different hardware platforms e.g. Intel v Power, or
  different deployment environments e.g. dev and production, which required
  different settings._

- **Solution**: The ST4SD Runtime solves this issue by enabling a virtual
  experiment to define named sets of variables and environments, a.k.a.
  platforms, that can be selected at runtime to customize execution for a
  particular environment. Further, when a virtual experiment is added to a
  `st4sd-runtime-service` registry a default platform can be set. Thus, for
  example, for production environments you can ensure that everyone will use
  production platform values when executing a particular experiment.

- **More Information**:
  - See the
    [virtual experiment specification](/workflow-specification#blueprints) for
    examples of how to use this capability

</AccordionItem>

<AccordionItem title="Reducing Complexity: Simple Specification, Smart Runtime">

- **Problem**: _Reduce the execution management burden on virtual experiment
  developers, enable them to focus on the computational process._
- **Solution**: We aim to reduce this burden by moving as many execution
  management details as possible to the ST4SD Runtime. For example our
  specification does not require users to handle data-storage or transfer,
  exit-codes, restart behaviour, memoization metadata, or know backend-specific
  execution details. This also enables all virtual experiments to potentially
  benefit out-of-the-box when we add new features to the ST4SD Runtime.

* **More Information**:

  - See [virtual experiment specification](/workflow-specification) for more
    details

</AccordionItem>

<AccordionItem title="Securing Execution: Registry Secrets and Encrypted Env-Vars">

- **Problem**: _Virtual experiments may require various values which should
  remain secured - for example tokens for accessing private image registries -
  but these can be leaked via notebooks, execution scripts, inside
  virtual experiment specifications or metadata databases_
- **Solution**: `st4sd-runtime-service` addresses these issues by allowing users
  to specify image pull secrets a single time when adding a virtual experiment
  to an `st4sd-runtime-service` registry. The secrets are then encrypted and
  used for subsequent executions, not appearing in any metadata. The ST4SD
  Runtime also enables sensitive data to be passed to virtual experiments as
  secure environment-variables. Such variables are encrypted on submission and
  cannot be accessed via any queries, metadata etc.

</AccordionItem>

<AccordionItem title="Capturing Data: The ST4SD Datastore">

- **Problem**: _How can scientists easily access and perform powerful queries on
  the virtual experiments they have run_
- **Solution**: The `st4sd-datastore` automatically captures information on
  executed virtual experiments and enables retrieval of workflow data. It is
  based on MongoDB, allowing flexible and powerful queries and supports
  retrieving outputs, and intermediate data, that workflow instances generate. A
  Python API makes operations simple to carry out.
- **More Information**:
  - [This notebook](https://github.com/st4sd/st4sd-examples/blob/main/notebooks/ST4SD%20Datastore%20-%20Common%20Query%20Examples.ipynb)
    in our
    [quickstart notebook collection](https://github.com/st4sd/st4sd-examples/)
    gives many examples of how to use the `st4sd-datastore`.

</AccordionItem>

</Accordion>

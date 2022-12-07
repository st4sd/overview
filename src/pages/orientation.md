---
title: Orientation
---

<!--

  Copyright IBM Inc. All Rights Reserved.
  SPDX-License-Identifier: Apache-2.0

-->

There are numerous developer docs. Below is a suggested order in which to read them. 

## Getting started

- [Tutorial](/tutorial): Follow the tutorial to get a flavour of what a virtual experiment is and how to write and run one.

## Writing your own experiment

- [Project Structures](/packaging-workflows): This document describes the ways you can arrange and store the various files you need when writing a virtual experiment.
- [Getting Application Images](/application-images): Explains how you can find container images for applications you can use in your experiment e.g. NAMD, GAMESS.
- [Best Practices](/virtual-experiment-developer-best-practices): Follow these from the start to make life easier.
- [Virtual Experiment Specification](/workflow-specification): Reference on `FlowIR` language elements.

## Advanced topics

- [Debugging Experiments](/running-ve-via-terminal): Things will go wrong. This describes how you can use the terminal and `oc` commands to examine and debug your virtual experiment.
- [Controlling Restart Behaviour:](/restart) Often you will need components to run longer than scheduling windows allow and they may need complex actions to restart correctly. This document explains how to do this. 
- [Writing Virtual Experiment Interfaces:](/writing-a-virtual-experiment-interface) How to make your experiment easy to consume by researchers and also automated tools.

## Sharing your experiments with others

- [Creating a Parameterised Package](/creating-a-parameterised-package) - You've got a great experiment. Share it with the community!


# ADR 2: Locations of artifacts

---
title: Locations of ST4SD artifacts
---

- **Deciders(s)**:  VV/EPK/MJ
- **Date (YYYY-MM-DD)**:  2022-04-28
- **Obsoletes ADRs**:  N/A
- **Modified By ADRs**: [ADR 3: ST4SD Naming Conventions](003-naming.md), [ADR 5: Contributed Images Protocol](005-contributed-images-protocol.md)
- **Relevant Issues**: [Location of artifacts](https://github.ibm.com/st4sd/overview/pull/2)

## Context

The Simulation Toolkit for Scientific Discovery (ST4SD) envelops many artifacts including, but not limited to: software frameworks, python wheels, microservices, and container images. The ST4SD developers currently implement and maintain most of these but there are also artifacts, such as container images and python `pip wheel` files, that virtual experiment (VE) developers have implemented and frequently use in their VEs. Without having a concrete idea on where each of these artifacts are stored and who maintains them it is hard for ST4SD users, and maintainers, to efficiently use these artifacts.

The location of the artifacts is also associated with the export control of the artifacts. For example, an artifact that is IBM confidential must only be uploaded to IBM CIO approved artifact repositories (artifactories) and only accessible by authorized users. 

## Decision

We will consider that the ST4SD artifacts are only accessed by IBMers.

We will consider that there are two families of artifacts. Those that the ST4SD team implements and maintains, and those that ST4SD users contribute.

We will host the source code of artifacts that the ST4SD team maintains under the ST4SD Github organization <https://github.ibm.com/st4sd/>.

#### ST4SD Location

We will use the IBM instance of Artifactory to host container images and `pip wheel` python files. Specifically, we will create the [`res-st4sd-team`](https://self-service.taas.cloud.ibm.com/teams/res-st4sd-team) using IBM TaaS self-service. We will group artifact repositories (artifactories) under 2 labels: 
- `official` for artifactories that the ST4SD team maintains for core ST4SD artefacts 
- `contrib` for artifactories that the ST4SD team maintains for other artefacts that aren't considered core

We will start by creating repositories for container images and python `pip wheel` files.

- `res-st4sd-team-official-base-docker-local.artifactory.swg-devops.com` will host container images for ST4SD base technologies, the ST4SD team maintains it.
- `res-st4sd-team-official-applications-docker-local.artifactory.swg-devops.com` will host application container images that the ST4SD team maintains in some fashion.
- `https://na.artifactory.swg-devops.com/artifactory/api/pypi/res-st4sd-team-official-base-pypi-local` will host python `pip wheel` files that the ST4SD team maintains.
- `res-st4sd-team-contrib-applications-docker-local.artifactory.swg-devops.com` will host container images that ST4SD users contribute.
- `https://na.artifactory.swg-devops.com/artifactory/api/pypi/res-st4sd-team-contrib-applications-pypi-local` will host python `pip wheel` files that ST4SD users contribute.

All IBMers will have read access to the above artifact repositories, they just need to use their W3 credentials to authenticate.

Only the ST4SD team has `push` access to these repositories.

#### Community Location

We will create community team on artifactory - called e.g. `res-st4sd-community-team`. This will be a community managed under agreement to adhere to the [contribution criteria](005-contributed-images-protocol.md)

- Create an initial community image repository `st4sd-community-applications-docker-local` 
  - This could be a virtual repository - see [Virtual Repositories](https://www.jfrog.com/confluence/display/JFROG/Virtual+Repositories)
  - There could initially be one concrete image repo e.g.  `st4sd-community-applications-general-docker-local`
  - In this way we could later create domain specific repos but still access them via single point. 
- Create similar pypi repository
  - May not need virtual repository in this case. 
- Designated community maintainers will be given read/write access to these repositories. 

Community locations:
- `res-st4sd-community-team-applications-docker-virtual.swg-devops.com` will be a [Virtual]((https://www.jfrog.com/confluence/display/JFROG/Virtual+Repositories)) artifactory registry that hosts `community` images.
  - Pushed images will be stored in `res-st4sd-community-team-applications-docker-local.artifactory.swg-devops.com`.
  - Pulling retrieves images from (in this order):
    - `res-st4sd-community-team-applications-docker-local.artifactory.swg-devops.com`
- `https://na.artifactory.swg-devops.com/artifactory/api/pypi/res-st4sd-community-team-applications-pypi-local` will host python `pip wheel` files that ST4SD users contribute.

## Status

Accepted

## Consequences

The ST4SD team has complete control over which artifacts are "accepted" into the `official` and `contrib` artifact repositories.

The [`TaaS Self-Service` tool](https://self-service.taas.cloud.ibm.com) follows a naming convention which forces us to use the suffixes [`-docker-local` and `-pypi-local` in the artfactory URLS](https://taas.cloud.ibm.com/getting-started/artifactory/repository-types.md#repository-types). The same is true for the `res-st4sd-team-` prefix. As a result, the naming schema of our artifact repositories may appear alien to people not familiar with the [`TaaS Self-Service` tool](https://self-service.taas.cloud.ibm.com). 

#### Contribution Criteria

Wee currently do not specify exactly how:

- ST4SD users contribute artifacts that they develop and maintain to the ST4SD `contrib` repositories. 
- What criteria these artifacts must adhere to before the ST4SD accepts them as `contrib` artifacts.
- What the `official` artifacts are, and how the ST4SD updates them.
- What kind of "qualities" the `official` artifacts must adhere to.

Therefore, we should create ADRs that explain the above.

#### Artifact Access

All current artifact repositories will be hosted on the IBM Instance of Artifactory. Therefore:

- They are accessible without the need of a VPN.
- They are accessible only when using valid IBM W3 credentials i.e. This ADR assumes that only IBMers require access to the ST4SD artifact repositories.

We will need to update this decision to describe how/where ST4SD `team` and `community` artifacts will be made available to clients or the public. We should create a new ADR for that when the time comes.

In any case sharing externally will involve bundle/deploy the Artifactory `team` and `community` repositories. For future reference artifactory also provides capabilities for the task.

- https://www.jfrog.com/confluence/display/JFROG/Deploying+Artifacts
- https://www.jfrog.com/confluence/display/JFROG/Release+Bundle+Repositories

#### Artifactory Ownership 

Finally, the current artifactory-team "resource" is owned by Vassilis Vassiliadis. This is contrary to best-practices (e.g. security concerns, bus-factor of individual ST4SD team-members, etc). As such, a future ADR should decide how we handle ownership of resources (for example we could create a functional ID to be the owner of all resources).




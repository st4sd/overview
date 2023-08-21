# ADR 5: Contributed Images Protocol

---
title: Contributed Images Protocol
---

- **Deciders(s)**: MJ/EPK/VV 
- **Date (YYYY-MM-DD)**:  2022-05-24
- **Obsoletes ADRs**: N/A 
- **Modified By ADRs**: N/A 
- **Updated**: 29/07/22,  https://github.ibm.com/st4sd/overview/issues/147
- **Relevant Issues**: https://github.ibm.com/st4sd/overview/issues/35, https://github.ibm.com/st4sd/overview/issues/27



## Summary & Objective

Virtual-experiments are composed of executions of diverse sets of applications. In a cloud environment the applications are provided via containers which are stored in container registries. Typically virtual-experiments in a domain will use a common set of applications and hence images. Virtual-experiment developers  also typically want to use optimised versions of the application and containers that meet best-practices in terms of size security etc.  

Developers who build application containers need to store them in an image registry where they can be accessed. They often would like for them to be consumed by other users both to save them time/effort and also to provide users with access to their cutting edge tools. These developers often want a low-overhead method to share these images which can be in tension with consumers of the images who may want stricter quality criteria. These consumers may be virtual-experiment developers or may be indirect e.g. companies requiring quality control on virtual-experiments. 

Currently, there is no protocol - defining container best-practices, registry access and maintenance - for developers to find and contribute container images to ST4SD. The objective of this ADR is to address this problem. 

### **Motivation**

Having a baseline criteria and clear rules for contributed images is valuable as it will help virtual-experiment developers consume the images they need and application developers effectively share images with the community. This will lead to quicker development cycles, more virtual-experiments, community growth etc. 

The issue affects application developers and virtual-experiment developers. For application developers it is a problem as they have no guidelines on where/how they can contribute images so others can use there work. For virtual-experiment developers they have no single place to check for images that may already have been built, and which they know meet some minimum criteria. 

The need for criteria or protocol on how to build containers is  a topic of active discussion. Various patterns for division of images into different maintenance levels and promotion are well established. This ADRs aim is to decide how to leverage this existing information in the specific case of ST4SD.

#### Relevant Links

* Container Best Practices 
  * https://cloud.google.com/blog/products/containers-kubernetes/7-best-practices-for-building-containers
  * https://thenewstack.io/container-best-practices-what-they-are-and-why-you-should-care/
* Artifactory Admin Guide: https://www.jfrog.com/confluence/display/JFROG/Administration
* **NOTE** Location of the registry is covered in [artefact locations](002-artifact-locations.md)



## Decision

#### Image Contribution Criteria

For `contrib` we will only place criteria on `image` name and `tag` structure and ability to run as `non-root` 

| Criteria                             | Contrib/Community                               | Gold/Official  |
| ------------------------------------ | ----------------------------------------------- | -------------- |
| Stable Base                          | Optional                                        | Set            |
| Size Optimised                       | Optional                                        | Required       |
| Optimised Applications (MKL,GPU etc.) | Optional                                        | Required       |
| Tags                                 | Use Unique Tags and support a stable/latest tag | As contrib     |
| Security                             | Run as non-root required at minimum             | Other security |
| Multiarch                            | Optional                                        | Recommended    |



#### Image Executable

* Images should have a default executable - it can be just a test executable
* Images can embody execution environments e.g. `python-rdkit`  
  * In this case the script the image executes will be externally supplied
  * This is useful because `virtual-experiments` often involve multiple bespoke scripts using same environment and this environment is common across many `virtual-experiments` - containerising these scripts represents an unnecessary overhead
* The executable or environment must be executable/accessible by any non-root user.

#### Tag and Image Name Requirements

* Image Name
  * Should be of the form `$(name)-$(accelerator(optional)-$(maintainerid)` e.g. `namd-gpu-hlcs`
  * Maintainer id agreed with maintainer on access to community registries
  * Can optionally include `$(accelerator)` if the container is built to use a particular accelerator e.g. GPU or there is a serial/parallel distinction
* Use Unique Tags as Default
  * Minimal form  `:$VERSION` e.g. `namd-gpu-hlcs:1.0.0`. `$VERSION` follows the [Semantic Versioning rules](https://www.semver.org).
  * General form  `:$VERSION-$ARCH(Optional)` e.g. `namd-gpu-hlcs:1.0.0-x86_64` and `namd-gpu-hlcs:1.0.0-x86_64`. `$VERSION` follows the [Semantic Versioning rules](https://www.semver.org).
* Maintainer can also tag one image for particular application  as `latest`, `namd-hlcs:latest` 
* If there are multiple containers for same application version from different contributors, the`st4sd` team can point a **maintainer non-specific reference** at one e.g. `namd:1.0.0` -> `namd-hlcs:1.0.0` 
* If there are not multiple containers for the application the maintainer can create the **maintainer non-specific reference**.
  * For example if `namd-hlcs:1.0.0` is pushed and there are no other `namd` images. The `hlcs` maintainer can create `namd:1.0.0` and `namd:latest` pointing at `namd-hlcs:1.0.0`

####  Access & Maintenance

- Access to contrib will be available to anyone who wants to contribute. 
  - https://www.jfrog.com/confluence/display/JFROG/Access+Tokens
- The contributor of an image is its maintainer.
- Contributors are implicitly responsible for adhering to the criteria and should check/maintain security/vulnerabilities of their containers.
- Initially, there will be no strict enforcement of criteria by st4sd team - we aim the contributors will choose to follow the minimal criteria set forth.
  - This is eventually expected to be become non-scalable but will introduce automation later.
    - https://www.jfrog.com/confluence/display/JFROG/Creating+Xray+Policies+and+Rules
-  St4sd team may occasionally perform visual inspection e.g. of tags, and may request changes to adhere to criteria. 
- Contributors should not overwrite another contributors images
- Repeated non-adherence to criteria or overwriting others images may lead to revoking of access.


### Alternates Considered

* All contrib images can only be pushed by st4sd team.
  * Deemed unscalable. Need to push would overwhelm team.
* Trusted maintainers can push to `st4sd-team` repositories and non-trusted maintainers can't (st4sd pushed).
  * Also unscalable.
* Contrib images are stored under `st4sd-team`
  * Problematic as it is either unscalable (see above) or opens security issues.
  * Eventually amended [artefact locations adr](002-artifact-locations.md) so there are separate `community` repositories.
* Cron job to overcome scaling issue while maintaining `st4sd` control (automatically pull images from elsewhere and test).
  * Too difficult to implement in a satisfactory way.
  * Developers would have to wait for cron job to run - increased build-test-debug cycle time would cause negative experience.
* Automatic testing of contributed images.
  * Difficult to design this from `st4sd` side and overhead in implementation. 
  * Decided to rely on contributor voluntarily complying for the moment. 
* Higher "best-practices"  for contrib.
  * Many application container developers in research space are not container experts - providing a low overhead to initially contribute images was deemed important.
* Considered putting maintainer id in tag. 
  * This means the default pull of `latest` is not possible - tag would always have to be specified.
  * This may introduce difficulties/negative experiences when developing.
* Put accelerator information in tag 
  * We tried this first but it creates problems in defining the `latest` as an particular accelerator version would have to be tagged

## Status

Proposed

## Consequences

Adoption of these guidelines is optional so developers of virtual-experiments are not impacted in their current use of `st4sd`. 

This decision will have minor performance implications - we use artifactory to serve images so concentrating images in single repository is not expected to lead to any notable issues in e.g. pulling images. The solution brings no new dependencies. Engineering impact is minimal - it only exists at level of configuration of artifactory which will be handled by st4sd team. 

There is some compatibility impact for virtual-experiments consuming images that will be moved to community contrib. If developers do not update those  virtual-experiments they may fall out of sync with the latest containers i.e. the maintainers now push update only to community contrib and don't maintain original location. To facilitate this change-over for images the st4sd team have provided ( in registries like `res-drl-hpc-docker` ) and intend to move, they will leave the existing images in their location for a period of 6 months. The st4sd maintainers will garbage collect application images in the `res-drl-hpc-docker` artifactory on 1st December 2022.

This ADR introduces some best practices for contributing images and these will be disseminated to community via website and slack. Moving/deletion plans for images in existing registries that may be currently used by virtual-experiments will also be clearly announced on these channels. 

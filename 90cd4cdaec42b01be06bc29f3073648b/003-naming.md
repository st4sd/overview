# ADR 3: ST4SD Naming Conventions
---
title: ST4SD Naming Conventions
---

- **Deciders(s)**:  VV/EPK/MJ
- **Date (YYYY-MM-DD)**:  2022-04-25
- **Obsoletes ADRs**:  N/A
- **Modified By ADRs**: N/A 
- **Relevant Issues**: [Naming convention ADR](https://github.ibm.com/st4sd/overview/issues/5)

## Summary and Objective



We want to provide a single, coherent view of "ST4SD" to foster interactions with core-developers and contributors and consumption by end-users. One potential end-goal is to open-source ST4SD hence easing this migration is a consideration. A first step in providing this single view involves migrating and consolidating existing assets in ST4SD branded locations e.g. GitHub and Artifactory. This gives the opportunity to adopt a consistent naming convention and terminology across all parts of ST4SD, including repositories, packages and artefact registries. 



### Motivation

The existing assets to be migrated to ST4SD grew organically. As a result the names associated with them have no particular meaning and don't indicate what these assets do, how they are related, or where they can be found. 

Replacing these names with those generated via a consistent naming convention/terminology will help core-developers, contributors and end-users understand what terms refer to, how to name new packages, identify pieces of ST4SD etc. 



## Decision



#### Terminology: 

Naming requires defining consistent labels used to groups entities of a given type that are not overloaded i.e. the same label isn't used for two different types. 

Here we identify three types:  `Artefact` , `artefact types` ,and `artefact sources` 



* `Artefacts` (code or things built from code) 
  * `core`: `core` should be used to refer to **individual**`artefacts` **only** (an image, a package, a repo). In particular in the case where a part of ST4SD is a collection of multiple components it should be used to refer to the central component, if there is one. It should appear it names of repositories and related artefacts. 
* Artefact Types (Groups of artefact that are the `same`, e.g. `virtual-experiment`)
  * `base`:`base` should be used to refer to the assets which make up `st4sd`  itself where a distinction is needed between them and optional/contributed assets. It should appear in the names of entities which collect core-artefacts e.g. image registries
  * `application` : use to refer to a 3rd party code or related artefact (image/package) that is **not** a virtual-experiment. Can use `app`.
  * `virtual-experiment` : use to refer to workflows built using ST4SD - these should conform to some criteria TBD. 
* Artefact Source (Where the artefact comes from)
  * `official`: used to denote artefacts that st4sd maintains or in some way places some guarantees on c.f. docker https://github.com/docker-library/official-images. Should be qualified by what the artefacts are e.g. `applications`, `base`
  * `contrib`: used to refer to collections of `st4sd` associated assets contributed by other users. 



#### Repository Names

GitHub repositories added to `st4sd` organisation should take the form 

* `st4sd-$COMPONENT-$SUBCOMPONENT-$SUBSUBCOMPONENT`
  * Where` $SUBCOMPONENT` and following elements are optional
  * If there is a `$SUBCOMPONENT` there should be more than one repo called `st4sd-$COMPONENT`or it should be known in advance that this will be the case
  * One `$SUBCOMPONENT` may be `core` 
  * If `$SUBCOMPONENTS` are minor/temporary then the `core` repo can just be called `st4sd-$COMPONENT`
  * `$SUBSUBCOMPONENT `should be avoided if possible



If a repo includes a common piece of functionality for many $COMPONENTS, but shouldn't be considered aa component by itself e.g. some python utility package. It can be classed a $COMPONENT=`common` with $SUBCOMPONENT being the package name. 



#### Code Artefact Names 

artefacts (images, packages) generated from a repository should have same name as repository. If one repository generates multiple artefacts of the same type use `-$SUBCOMPONENT-$SUBSUBCOMPONENT` as appropriate



#### Arefact Registry Names 

We require artefacts to be divided into two sources (c.f. terminology - Artefact Sources)

* `contrib` artefacts
* `official` artefacts 

Within each there should be the following artefact groups (c.f. terminology - Artefact Types)

* `base` 
* `application`
  * 3rd party packages/images that are not workflows
* `virtual-experiment`



Following above, for example on `artifactory` where registries are named with following template

```
res-$TEAM-team-$REGNAME-$REGTYPE-local
```

With $REGTYPE define by `artifactory`

we would create image and python packages called

- `res-st4sd-team-official-base-docker-local` will host container images for ST4SD base technologies. 
- `res-st4sd-team-official-applications-docker-local` will host application container images maintained by ST4SD team in some fashion.
- `res-st4sd-team-contrib-applications-docker-local` will host application container images that ST4SD users contribute.
- `res-st4sd-team-official-base-pypi-local` will host python packages files that the ST4SD team maintains.
- `res-st4sd-team-contrib-applications-pypi-local` will host python packages files that the ST4SD users contribute

A future official virtual-experiment registry may have core name of

* `st4sd-official-virtual-experiments`



### Alternatives Considered

- Other possibilities considered for `base` include `main`, `principle`, `essential`, `primary`

## Status

Accepted

## Consequences

* Update [ADR 002 artefact location](002-artifact-locations.md)
* Creation of new artefact locations
  * Pointing of users to new locations
  * Updating of all artefact consumers e.g. k8s deployments files etc. to use new locations
* Updating of all CI/CD pipelines to push to/consume from new locations
* Updating all documentation to the new naming
* Potential for creating difficult to id issues/bugs during transition between new/old locations  e.g. missed redirect of a consumer, old and new CI pipelines writing to same artefact. 

### Best Practices

- This proposal changes naming practices. New developers need to be made aware of this ADR during onboarding. All developers must follow it. 

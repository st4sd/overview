# ST4SD Overview

This is the documentation website for the Simulation Toolkit for Scientific Discovery (ST4SD).

## Quick Links

- [Getting started](#getting-started)
- [Development](#development)
- [Help and Support](#help-and-support)
- [Contributing](#contributing)
- [License](#license)

## Getting started

### Requirements

#### Node.js

Running and developing this website requires an up-to-date Node.js version. You can check what Node.js version you have currently installed with

```bash
node -v
```

Please refer to the [Node.js download page](https://nodejs.org/en/download/) if you don't have it installed or if your installed version is older than 16.

#### Gatsby

This website is built using Gatsby. To get started, install the Gatsby CLI using:

```bash
npm i -g gatsby-cli
```

## Development

### Installing dependencies

Install the dependencies for this project with:

```bash
yarn install
```

## Local development

Gatsby supports a local development mode with hot reload functionalities which makes it easy to preview the content you're creating. You can use it via

```bash
gatsby develop
```

If you want to refresh your local installation run `gatsby clean`.

You can also try `gatsby clean`

## Production builds

As the website is served on GitHub from a sub-path, we need to use a flag when building with Gatsby to correctly support this.
This difference could sometimes lead to assets to not working as expected, and thus **it is strongly recommended** to build the website for production and test it locally before merging changes. This can be done with the following commands:

```bash
gatsby build --prefix-paths
gatsby serve --prefix-paths
```

The website will then be available at the sub-path configured in `gatsby-config.js`.

## Help and Support

Please feel free to reach out to one of the maintainers listed in the [MAINTAINERS.md](MAINTAINERS.md) page.

## Contributing 

We always welcome external contributions. Please see our [guidance](CONTRIBUTING.md) for details on how to do so.

## References

If you use ST4SD in your projects, please consider citing the following:

```bibtex
@software{st4sd_2022,
author = {Johnston, Michael A. and Vassiliadis, Vassilis and Pomponio, Alessandro and Pyzer-Knapp, Edward},
license = {Apache-2.0},
month = {12},
title = {{Simulation Toolkit for Scientific Discovery}},
url = {https://github.com/st4sd/st4sd-runtime-core},
year = {2022}
}
```

## License

This project is licensed under the Apache 2.0 license. Please [see details here](LICENSE.md).
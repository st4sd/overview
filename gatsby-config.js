// Copyright IBM Inc. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

module.exports = {
  siteMetadata: {
    title: 'IBM ST4SD',
    description: 'Documentation for the Simulation Toolkit for Scientific Discovery',
    keywords: 'discovery,accelerator,materials,experiment,workflow,knowledge-base',
  },
  pathPrefix: '/st4sd/overview',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/assets/svgs/favicon.svg',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        withWebp: true,
        repository: {
          baseUrl:
            'https://github.com/st4sd/overview',
        },
      },
    },
  ],
};

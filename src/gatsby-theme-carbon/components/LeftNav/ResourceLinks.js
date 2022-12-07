import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'ST4SD Registry',
    href: 'https://registry.st4sd.res.ibm.com/',
  },
  {
    title: 'ST4SD GitHub',
    href: 'https://github.com/st4sd/',
  },
  {
    title: 'ST4SD Example Notebooks',
    href: 'https://github.com/st4sd/st4sd-examples/',
  },
  {
    title: 'ST4SD APIs',
    href: '/apis',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;

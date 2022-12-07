import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Experiment Registry',
    href: 'https://registry.st4sd.res.ibm.com/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/st4sd/',
  },
  {
    title: 'Example Notebooks',
    href: 'https://github.com/st4sd/st4sd-examples/',
  },
  {
    title: 'APIs',
    href: '/apis',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;

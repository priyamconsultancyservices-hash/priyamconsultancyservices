// src/theme/Root.js
// Docusaurus-ல இந்த file header & footer எல்லா page-லயும் inject பண்ணும்

import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader';
import CustomFooter from '@site/src/components/CustomFooter';
import SocialSidebar from '../components/SocialSidebar';

export default function Root({ children }) {
  return (
    <>
      <CustomHeader />
      <main>{children}</main>
      <SocialSidebar />
      <CustomFooter />
    </>
  );
}

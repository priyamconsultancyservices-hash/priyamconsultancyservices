// src/theme/Root.js
import React from 'react';
import CustomHeader from '@site/src/components/CustomHeader';
import CustomFooter from '@site/src/components/CustomFooter';
import SocialSidebar from '../components/SocialSidebar';

export default function Root({ children }) {
  return (
    <>
      {/* GTM noscript */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W88V6Z4Q"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>

      <CustomHeader />
      <main>{children}</main>
      <SocialSidebar />
      <CustomFooter />
    </>
  );
}
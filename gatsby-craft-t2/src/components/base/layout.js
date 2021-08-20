import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { Footer, Header, SEO } from '../_index';

const Layout = ({ children, location }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="bg-brand-one  min-h-screen px-6 py-6 flex flex-col justify-between">
        <Header zIndex={10} location={location} />
        <main className="">{children}</main>
        <Footer location={location} />
      </div>
    </>
  );
};

export default Layout;

import { Helmet } from 'react-helmet';
import React from 'react';
import { Nav } from '../_index';

const Header = () => {
  return (
    <header className="absolute w-full top-0 left-0">
      <Nav />
    </header>
  );
};

export default Header;

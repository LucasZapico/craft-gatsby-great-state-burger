import React from 'react';

import MobileNav from './nav-mobile';
import { ROUTES } from '../../../routes';
import { useMenuValue } from '../../../context/index';

const Nav = () => {
  const { show, setShow } = useMenuValue();
  return (
    <div className="">
      <MobileNav
        ROUTES={ROUTES} show={show}
        setShow={setShow}
      />
    </div>
  );
};

export default Nav;

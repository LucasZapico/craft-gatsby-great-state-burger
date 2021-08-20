import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import { Slider } from '../_index';
import { useMenuValue } from '../../context';
import Mark from '../../assets/mark.svg';
import Menu from '../../assets/menu.svg';
import MarkLarge from '../../assets/home-mark.svg';
import Delivery from '../../assets/order-online.svg';
import Locations from '../../assets/location.svg';

const LocAndDelivery = () => (
  <div className="flex justify-between hidden lg:flex w-64">
    <Link className="" to="/locations">
      <div className="flex justify-center flex-col items-center">
        <Locations />
        <h4 className="text-brand-one text-base uppercase mt-1">
          Locations
        </h4>
      </div>
    </Link>

    <Link className="" to="/">
      <div className="flex justify-center items-center flex-col">
        <Delivery />
        <h4 className="text-brand-one text-base  uppercase mt-1">
          Order Online
        </h4>
      </div>
    </Link>
  </div>
);

const HomeHero = () => {
  const { show, setShow } = useMenuValue();
  useEffect(() => {}, [show]);

  return (
    <div className="">
      <div className="bg-white pt-10 pb-8">
        <div className="container mx-auto">
          <div className="flex justify-center lg:flex-row lg:justify-between py-6 mx-6">
            <LocAndDelivery />
            <div
              role="button"
              tabIndex="0"
              className="mb-3 flex justify-center items-center  "
              onKeyDown={() => setShow(true)}
              onClick={() => setShow(true)}
            >
              <Mark />
              <Menu className="ml-2 mt-5" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center my-8">
          <MarkLarge />
        </div>
        <div className="">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

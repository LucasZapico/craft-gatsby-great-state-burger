import { Link, graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { generate } from 'shortid';
import { useSpring, animated as a } from 'react-spring';
import { LinkOne } from '../../_index';
// svg
import Delivery from '../../../assets/order-online.svg';
import Locations from '../../../assets/location.svg';
import Mark from '../../../assets/mark.svg';
import Close from '../../../assets/close.svg';

const NavMobile = ({ ROUTES, show, setShow }) => {
  const { mainMenu } = useStaticQuery(query);
  // animations
  const styles = useSpring({
    opacity: show ? 1 : 0,
    height: show ? '100vh' : '0vh',
  });

  useEffect(() => {}, [show]);

  return (
    <a.div
      style={styles}
      className={`absolute top-0 px-6 py-6 left-0 bg-white w-full  z-50 
      overflow-hidden`}
    >
      <div className="menu-bg h-full pt-10 bg-brand-one">
        <div className="container mx-auto">
          <div className="py-6  h-full  flex flex-col lg:flex-row flex-wrap lg:justify-center mx-6">
            <div
              role="button"
              tabIndex="0"
              className="mb-3 flex justify-center items-center lg:items-start lg:w-6/12 lg:justify-end"
              onKeyDown={() => setShow(false)}
              onClick={() => setShow(false)}
            >
              <Mark />
              <Close className="ml-2 mt-5" />
            </div>
            <ul className="lg:order-last flex-grow-1 my-8">
              {mainMenu.entries.map((r, i) => (
                <LinkOne
                  onClick={() => setShow(false)}
                  onKeyDown={() => setShow(false)}
                  key={generate()}
                  to={`/${r.uri}`}
                >
                  <li className="text-4xl text-center text-white uppercase mb-8">
                    {r.title}
                  </li>
                </LinkOne>
              ))}
            </ul>
            <div className="mx-auto lg:w-6/12 lg:order-first">
              <div className="flex justify-between w-64">
                <Link className="" to="/locations">
                  <div className="flex justify-center flex-col items-center">
                    <Locations />
                    <h4 className="text-white uppercase mt-1">
                      Locations
                    </h4>
                  </div>
                </Link>

                <Link className="" to="/">
                  <div className="flex justify-center items-center flex-col">
                    <Delivery />
                    <h4 className="text-white uppercase mt-1">
                      Order Online
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a.div>
  );
};

export const query = graphql`
  query {
    mainMenu: craftAPI {
      entries(mainMenu: "isMainMenu") {
        title
        uri
        uid
      }
    }
  }
`;

export default NavMobile;

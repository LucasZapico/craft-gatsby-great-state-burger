import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { generate } from 'shortid';
import { LinkOne } from '../_index';

import MarkTwo from '../../assets/mark-two.svg';

const Policy = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-6 lg:divide-solid lg:divide-white lg:divide-x ">
      <div
        tabIndex="0"
        className="text-xl text-center text-white  mb-3 px-2 tracking-wide"
      >
        <LinkOne to="/policy">privacy policy</LinkOne>
      </div>
      <div
        tabIndex="0"
        className="text-xl text-center text-white  mb-3 px-2 tracking-wide"
      >
        <h6>&copy; great state burger</h6>
      </div>
      <div
        tabIndex="0"
        className="text-xl text-center text-white  mb-3 px-2 tracking-wide"
      >
        <LinkOne to="/credits">site credits</LinkOne>
      </div>
    </div>
  );
};

const Menu = ({ menu }) => (
  <div className=" flex flex-col lg:justify-between lg:flex-row lg:items-center lg:w-3/4">
    {menu.entries.map((r, i) => (
      <div
        key={generate()}
        className="text-2xl text-center text-white uppercase mb-4"
      >
        <LinkOne to={`/${r.uri}`}>{r.title}</LinkOne>
      </div>
    ))}
  </div>
);

const Mark = () => (
  <div className="flex justify-center lg:justify-start items-center lg:order-first lg:w-1/4">
    <LinkOne to="/">
      <MarkTwo />
    </LinkOne>
  </div>
);

const Footer = () => {
  const { mainMenu } = useStaticQuery(query);
  return (
    <footer className="flex justify-end flex-col">
      <div className="container mx-auto">
        <div className="mt-8 flex flex-col flex-wrap lg:flex-row justify-center lg:justify-center  mx-6">
          <Menu menu={mainMenu} />
          <Mark />

          <Policy />
        </div>
      </div>
    </footer>
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

export default Footer;

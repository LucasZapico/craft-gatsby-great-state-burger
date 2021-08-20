import './src/assets/sass/_index.scss';
import { MenuProvider } from './src/context';
import React from 'react';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>{element}</MenuProvider>
);

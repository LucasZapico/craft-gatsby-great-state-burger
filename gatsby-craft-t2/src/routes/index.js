import { generate } from 'shortid';

export const ROUTES = [
  {
    name: 'Home',
    path: '/',
    id: generate(),
  },
  {
    name: 'Locations',
    path: '/locations',
    id: generate(),
  },
  {
    name: 'Menu',
    path: '/menu',
    id: generate(),
  },
  {
    name: 'About',
    path: '/about',
    id: generate(),
  },
  {
    name: 'Catering',
    path: '/catering',
    id: generate(),
  },
  {
    name: 'Jobs',
    path: '/jobs',
    id: generate(),
  },
];

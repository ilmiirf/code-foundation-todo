import { type Route } from 'types/routeType';
import { createElement, lazy } from 'react';

export const publicRoute: Route[] = [
  {
    label: 'Home',
    element: createElement(lazy(async () => await import('pages/Home/'))),
    path: '/',
  },
  {
    label: 'Login',
    element: createElement(lazy(async () => await import('pages/Login'))),
    path: '/login',
  },
];

export const privateRoute: Route[] = [
  {
    label: 'Todo',
    element: createElement(lazy(async () => await import('pages/Todo/'))),
    path: '/todo',
  },
];

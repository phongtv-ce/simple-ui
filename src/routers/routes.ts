import { lazy } from 'react';

const HomePage = lazy(async() => await import('../pages/HomePage/HomePage'));
const BlogDetailsPage = lazy(async() => await import('../pages/BlogDetailsPage/BlogDetailsPage'));
const NotFoundPage = lazy(async() => await import('../pages/NotFoundPage/NotFoundPage'));

export default [
  {
    path: '/',
    index: true,
    component: HomePage,
  },
  {
    path: '/blog/:blogId',
    component: BlogDetailsPage,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];


import React from 'react';
import { lazy } from 'react';
const UserDetails = lazy(() => import ('../../views/UserDetails'));
const UpdateUser = lazy(() => import ('../../views/UpdateUser'));
const UserList = lazy(() => import ('../../views/UserList'));
const Home = lazy(() => import ('../../views/Home'));

const UserRoutes = [
  {
    path: '/user/details/:id',
    component: <UserDetails />
  },
  {
    path: 'user/edit/:id',
    component: <UpdateUser />
  },
  {
    path: '/users',
    component: <UserList />
  },
  {
    path: '/home',
    component: <Home />
  }
];

export default UserRoutes;
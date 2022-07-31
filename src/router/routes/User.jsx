import React from 'react';
import { lazy } from 'react';
const UserDetails = lazy(() => import ('../../views/UserDetails'));
const UpdateUser = lazy(() => import ('../../views/UpdateUser'));
const UserList = lazy(() => import ('../../views/UserList'));
const Home = lazy(() => import ('../../views/Home'));

const UserRoutes = [
  {
    path: 'user/details',
    element: <UserDetails />,
    meta: {
      authRoute: true
    }
  },
  {
    path: 'user/edit/:id',
    element: <UpdateUser />,
    meta: {
      authRoute: true
    }
  },
  {
    path: 'users',
    element: <UserList />,
    meta: {
      adminRoute: true
    }
  },
  {
    path: 'home',
    element: <Home />,
    meta: {
      publicRoute: true
    }
  }
];

export default UserRoutes;
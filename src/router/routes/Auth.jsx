import React from 'react';
import { lazy } from 'react';

const Login = lazy(() => import ('../../views/Login'));
const Register = lazy(() => import ('../../views/Register'));
const ForgotPassword = lazy(() => import ('../../views/ForgotPassword'));

const AuthRoutes = [
  {
    path: 'auth/login',
    element: <Login />,
    meta: {
      publicRoute: true
    }
  },
  {
    path: 'auth/register',
    element: <Register />,

    publicRoute: true

  },
  {
    path: 'auth/forgot-password',
    element: <ForgotPassword />,

    publicRoute: true

  }
];

export default AuthRoutes;
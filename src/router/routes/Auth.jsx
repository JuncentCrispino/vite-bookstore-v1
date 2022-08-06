import React from 'react';
import { lazy } from 'react';

const Register = lazy(() => import ('../../views/Register'));
const ForgotPassword = lazy(() => import ('../../views/ForgotPassword'));

const AuthRoutes = [
  {
    path: 'auth/register',
    element: <Register />,
    meta: {
      publicRoute: true
    }

  },
  {
    path: 'auth/forgot-password',
    element: <ForgotPassword />,
    meta: {
      publicRoute: true
    }

  }
];

export default AuthRoutes;
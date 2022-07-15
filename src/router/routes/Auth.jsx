import React from 'react';
import { lazy } from 'react';

const Login = lazy(() => import ('../../views/Login'));
const Register = lazy(() => import ('../../views/Register'));
const ForgotPassword = lazy(() => import ('../../views/ForgotPassword'));

const AuthRoutes = [
  {
    path: 'auth/login',
    component: <Login />
  },
  {
    path: 'auth/register',
    component: <Register />
  },
  {
    path: 'auth/forgot-password',
    component: <ForgotPassword />
  }
];

export default AuthRoutes;
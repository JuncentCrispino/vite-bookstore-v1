import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ user }) => {
  if (!user && user?.isAdmin === false) {
    return <Navigate to='/auth/login' replace/>;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
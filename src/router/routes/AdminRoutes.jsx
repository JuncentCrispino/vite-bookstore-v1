import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const AdminRoutes = ({ user }) => {
  console.log(user);
  if (!user && user?.isAdmin === false) {
    return <Navigate to='/not-authorized' replace/>;
  }
  return <Outlet />;
};

export default AdminRoutes;
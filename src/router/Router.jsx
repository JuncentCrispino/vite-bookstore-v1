import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, DefaultRoute } from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AppRoutes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.component} />
          );
        })
        }
      </Routes>
    </BrowserRouter>
  );

};

export default Router;
import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './routes';
import AdminRoutes from './routes/AdminRoutes';
import ProtectedRoutes from './routes/ProtectedRoutes';
import { isUserLoggedIn } from '../utility/Utils';
import userStore from '../store/userStore';
import { MantineProvider } from '@mantine/core';
import NavBar from '../components/Navbar';
import RotateLoader from 'react-spinners/RotateLoader';

const Router = () => {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const details = await isUserLoggedIn();
      setUser(details);
      setIsLoading(false);
    })();
  }, []);

  const authRoutes = AppRoutes.filter(route => route?.meta?.authRoute);
  const adminRoutes = AppRoutes.filter(route => route?.meta?.adminRoute);
  const publicRoutes = AppRoutes.filter(route => route?.meta?.publicRoute);

  if (isloading) {
    return;
  }

  return (
    <Suspense fallback={<div className='loader'><RotateLoader color='#ffffff' loading={true} size={30} /></div>}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Montserrat'
        }}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            {publicRoutes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route element={<ProtectedRoutes user={user} />} >
              {authRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
            </Route>
            <Route element={<AdminRoutes user={user} />}>
              {adminRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </Suspense>
  );

};

export default Router;
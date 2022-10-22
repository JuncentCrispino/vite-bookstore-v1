import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes } from './routes';
import AdminRoutes from './routes/AdminRoutes';
import ProtectedRoutes from './routes/ProtectedRoutes';
import userStore from '../store/userStore';
import NavBar from '../components/Navbar';
import Loader from '../components/Loader';
import { getUserDetails } from '../apis/user';
import { refreshAccessToken } from '../apis/auth';
import { FallbackProvider } from '../composables/FallbackProvider';
import ScrollToTop from '../components/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationsProvider } from '@mantine/notifications';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const authRoutes = AppRoutes.filter(route => route?.meta?.authRoute);
const adminRoutes = AppRoutes.filter(route => route?.meta?.adminRoute);
const publicRoutes = AppRoutes.filter(route => route?.meta?.publicRoute);

const Router = () => {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const userDetailsReq = await getUserDetails();
        if (userDetailsReq.status === 200) {
          return setUser(await userDetailsReq.json());
        } else if (userDetailsReq.status === 401) {
          const access = await refreshAccessToken();
          if (access) {
            setUser(await userDetailsReq.json());
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }

    })();
  }, []);

  if (isloading) {
    return <Loader />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <PayPalScriptProvider options={{ 'client-id': import.meta.env.VITE_PAYPAL_CLIENT, 'currency': 'PHP' }}>
          <NotificationsProvider position='top-left' transitionDuration={700} autoClose={3000}>
            <NavBar>
              <ScrollToTop />
              <FallbackProvider>
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
              </FallbackProvider>
            </NavBar>
          </NotificationsProvider>
        </PayPalScriptProvider>
      </BrowserRouter>
    </Suspense>

  );

};

export default Router;
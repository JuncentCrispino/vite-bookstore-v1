import React from 'react';
import { lazy } from 'react';

const AboutUs = lazy(() => import('../../views/AboutUs'));
const ContactUs = lazy(() => import('../../views/ContactUs'));
const Home = lazy(() => import('../../views/Home'));
const NotFound = lazy(() => import('../../views/NotFound'));
const NotAuthorized = lazy(() => import('../../views/NotAuthorized'));

const MiscRoutes = [
  {
    path: 'home',
    element: <Home />,
    meta: {
      publicRoute: true
    }
  },
  {
    path: 'not-authorized',
    element: <NotAuthorized />,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '*',
    element: <NotFound />,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/',
    element: <Home />,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/aboutus',
    element: <AboutUs/>,
    meta: {
      publicRoute: true
    }
  },
  {
    path: '/contactus',
    element: <ContactUs/>,
    meta: {
      publicRoute: true
    }
  }
];

export default MiscRoutes;
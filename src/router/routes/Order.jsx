import React from 'react';
import { lazy } from 'react';
const OrderDetails = lazy(() => import ('../../views/OrderDetails'));
const OrderList = lazy(() => import ('../../views/OrderList'));
const UpdateOrder = lazy(() => import ('../../views/UpdateOrder'));

const OrderRoutes = [
  {
    path: 'order/:id',
    element: <OrderDetails />,
    meta: {
      authRoute: true
    }
  },
  {
    path: 'order/edit/:id',
    element: <UpdateOrder />,
    meta: {
      authRoute: true
    }
  },
  {
    path: 'orders',
    element: <OrderList />,
    meta: {
      adminRoute: true
    }
  }
];

export default OrderRoutes;
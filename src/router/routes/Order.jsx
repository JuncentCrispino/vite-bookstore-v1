import React from 'react';
import { lazy } from 'react';
const OrderDetails = lazy(() => import ('../../views/OrderDetails'));
const OrderList = lazy(() => import ('../../views/OrderList'));
const UpdateOrder = lazy(() => import ('../../views/UpdateOrder'));

const OrderRoutes = [
  {
    path: '/order/:id',
    component: <OrderDetails />
  },
  {
    path: '/order/edit/:id',
    component: <UpdateOrder />
  },
  {
    path: '/orders',
    component: <OrderList />
  }
];

export default OrderRoutes;
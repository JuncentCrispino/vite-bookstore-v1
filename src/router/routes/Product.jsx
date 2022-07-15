import React from 'react';
import { lazy } from 'react';
const ProductDetails = lazy(() => import ('../../views/ProductDetails'));
const UpdateProduct = lazy(() => import ('../../views/UpdateProduct'));
const CreateProduct = lazy(() => import ('../../views/CreateProduct'));

const ProductRoutes = [
  {
    path: '/product/:id',
    component: <ProductDetails />
  },
  {
    path: '/product/edit/:id',
    component: <UpdateProduct />
  },
  {
    path: '/product/create',
    component: <CreateProduct />
  }
];

export default ProductRoutes;
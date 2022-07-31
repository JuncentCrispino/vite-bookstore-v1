import React from 'react';
import { lazy } from 'react';
const Products = lazy(() => import ('../../views/Products'));
const ProductDetails = lazy(() => import ('../../views/ProductDetails'));
const UpdateProduct = lazy(() => import ('../../views/UpdateProduct'));
const CreateProduct = lazy(() => import ('../../views/CreateProduct'));

const ProductRoutes = [
  {
    path: 'product/:id',
    element: <ProductDetails />,
    meta: {
      publicRoute: true
    }
  },
  {
    path: 'product/edit/:id',
    element: <UpdateProduct />,
    meta: {
      adminRoute: true
    }
  },
  {
    path: 'product/create',
    element: <CreateProduct />,
    meta: {
      adminRoute: true
    }
  },
  {
    path: '/products',
    element: <Products />,
    meta: {
      publicRoute: true
    }
  }
];

export default ProductRoutes;
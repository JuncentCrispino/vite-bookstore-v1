import React from 'react';
import ItemCard from '../components/ItemCard';
import BreadCrumbs from '../components/Products/BreadCrumbs';
import useFetchProducts from '../hooks/useFetchProducts';

function Products() {
  const { products, totalResults, totalPages, isLoading } = useFetchProducts();

  return (
    <div className='grid grid-flow-col'>
      <section className='col-span-1'>
        Span 1
      </section>
      <section className='col-span-1'>
        <BreadCrumbs products={200}/>
      </section>
      <div className='col-span-3'>
        {
          isLoading ?
            <div>Loading...</div> :
            products.map(product => <ItemCard key={product.SKU} product={product} />)
        }
      </div>
    </div>
  );
}

export default Products;
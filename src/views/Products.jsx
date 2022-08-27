import React, { useState, useRef, useCallback } from 'react';
import Page from '../composables/Page';
import useFetchProducts from '../hooks/useFetchProducts';
import ItemCard from '../components/Products/ItemCard';
import { Loader } from '@mantine/core';
import { Input } from '@mantine/core';
import { TextInput } from '@mantine/core';

function Products() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('createdAt:asc');
  const { isLoading, products, error, hasMore } = useFetchProducts(query, page, sortBy);
  const observer = useRef();

  const lastProductElementRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPageNumber => prevPageNumber + 1);
      }
    }, {
      root: null,
      rootMargin: '-100px',
      threshold: 0
    });
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore]);

  const handleSearch = e => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <Page>
      <div className='max-w-screen-xl m-auto pt-12'>
        <div className='pt-6 flex justify-end'>
          <TextInput placeholder='Search' value={query} onChange={handleSearch} className='w-[300px] mr-10 shadow-md'/>
        </div>
        <section className='flex flex-wrap justify-center gap-6 pt-6'>
          {products.map((product, index) => {
            if (products.length === index + 1) {
              return (
                <div key={product._id} ref={lastProductElementRef}>
                  <ItemCard product={product} />
                </div>
              );
            } else {
              return (
                <ItemCard key={product._id} product={product} />
              );
            }
          })}
        </section>
        <div>{isLoading && <Loader/>}</div>
        <div>{error && 'Error'}</div>
      </div>
    </Page>
  );
}

export default Products;
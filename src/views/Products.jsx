import React, { useState, useRef, useCallback, useEffect } from 'react';
import Page from '../composables/Page';
import useFetchProducts from '../hooks/useFetchProducts';
import ItemCard from '../components/Products/ItemCard';
import { TextInput, Pagination } from '@mantine/core';
import productStore from '../store/productStore';
import Loader from '../components/Loader';
import Select from 'react-select';
import SelectCategory from '../components/Products/SelectCategory';
import { getAllCategories } from '../apis/product';
import { motion } from 'framer-motion';

function Products() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const page = productStore(state => state.page);
  const setPage = productStore(state => state.setPage);
  const [sortBy, setSortBy] = useState('createdAt:asc');
  const { isLoading, products, totalPages, error } = useFetchProducts(query, page, sortBy, category);

  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      console.log({
        categories: data
      });
      setCategories(data);
    })();
  }, []);

  const handleSearch = e => {
    setQuery(e.target.value);
    setPage(1);
  };

  const onCategorySelect = e => {
    setCategory(e);
    setPage(1);
  };

  return (
    <Page>
      <div className='max-w-screen-xl m-auto pt-12 mb-10'>
        <div className='pt-6 lg:flex lg:justify-end gap-5 max-w-xl mx-auto px-2'>
          <SelectCategory category={category} onCategorySelect={onCategorySelect} categories={categories} className='w-full pb-3' />
          <TextInput placeholder='Search' value={query} onChange={handleSearch} className='w-full' />
        </div>
        <section className='flex flex-wrap justify-center gap-10 pt-6'>
          {products.map((product) => {
            return (
              <motion.div
                key={product._id}
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{ opacity: 0 }}

                transition={{
                  duration: 0.5,
                  delay: .1
                }}
                className='grid-cols-1'
              >
                <ItemCard product={product} />
              </motion.div>
            );
          })}
        </section>
        <div className='flex justify-center place-content-center my-10'>
          {totalPages > 1 && <Pagination total={totalPages} onChange={(e) => setPage(e)} color="red" radius="xl" page={page} />}
        </div>
      </div>

    </Page>
  );
}

export default Products;
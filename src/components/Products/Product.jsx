import React from 'react';
import { Modal, useMantineTheme, Tabs } from '@mantine/core';

export default function Product({ product, handleOpen, opened, handleAddToCart, handleAddToFavorites }) {
  console.log(product);
  const theme = useMantineTheme();
  return (
    <>
      <Modal
        overlayColor={theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={handleOpen}
        centered
        size='xl'
      >

        <Tabs variant="outline" defaultValue="details" >
          <Tabs.List>
            <Tabs.Tab value="details">Detials</Tabs.Tab>
            <Tabs.Tab value="Description">Description</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="details" pt="xs" className='border-x-[1px] border-b-[1px] rounded-b-[4px]'>
            <div className='lg:grid lg:grid-cols-3 lg:gap-3 p-3'>
              <div className='flex align-center relative' >
                <img src={product.thumbnail} alt={product.title} className='w-full col-span-1 rounded-md object-cover '/>
                <p className='absolute top-2 right-2 bg-red-600 text-primary p-2 rounded-md'>₱{product.price.toLocaleString('en-US')}</p>
              </div>
              <div className='col-span-2'>
                <section className='text-center'>
                  <p className='text-xl uppercase underline pt-4'>{product.title}</p>
                  <p>{product.authors}</p>
                </section>
                <section className='pt-2 pl-10'>
                  <p className='pb-1'>Category: {product.category}</p>
                  <p className='pb-1'>Subtitle: {product.subtitle}</p>
                  <p className='pb-1'>ISBN10: {product.isbn10}</p>
                  <p className='pb-1'>ISBN13: {product.isbn13}</p>
                  <p className='pb-1'>Pages: {product.pageNumber}</p>
                  <p className='pb-1'>Year Published: {product.yearPublished}</p>
                  <p className='pb-1'>Sold: {product.sold}</p>
                  <p className='pb-1'>Available Stocks: {product.availableStock}</p>
                </section>
                <section className='flex justify-center gap-3 pt-5'>
                  <button className='bg-red-600 rounded-md text-primary px-3 py-2' onClick={handleAddToCart}>ADD TO CART</button>
                  <button className='bg-red-600 rounded-md text-primary px-3 py-2' onClick={handleAddToFavorites}>ADD TO WISHLIST</button>
                </section>
              </div>

            </div>
          </Tabs.Panel>

          <Tabs.Panel value="Description" pt="xs" className='border-x-[1px] border-b-[1px] rounded-b-[4px]'>
            <p className='p-6'>{product.description}</p>
          </Tabs.Panel>

          <Tabs.Panel value="settings" pt="xs" className='border-x-[1px] border-b-[1px] rounded-b-[4px]'>
        Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Modal>
    </>
  );
}

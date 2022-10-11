import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import DefaultCover from '../../assets/defaultCover.jfif';
import { BsCartCheckFill } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import cartStore from '../../store/cart';
import favoritesStore from '../../store/favorites';
import Product from './Product';
import { toast } from 'react-toastify';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { showNotification } from '@mantine/notifications';
import { RiErrorWarningFill } from 'react-icons/ri';

export default function ItemCard({ product }) {
  const cart = cartStore(state => state.cart);
  const favorites = favoritesStore(state => state.favorites);
  const addToFavorites = favoritesStore(set => set.addToFavorites);
  const addToCart = cartStore(state => state.addToCart);
  const addItemQty = cartStore(state => state.addItemQty);
  const [opened, setOpened] = useState(false);

  const handleAddToCart = () => {
    console.log(product);
    if (!cart.some(item => item._id === product._id)) {
      addToCart({
        _id: product._id,
        title: product.title,
        thumbnail: product.thumbnail,
        authors: product.authors,
        price: product.price,
        qty: 1
      });
      return showNotification({
        icon: <BsFillCheckCircleFill />,
        color: 'green',
        title: 'Success',
        message: 'Added new book to your cart'
      });
    } else {
      addItemQty(product);
      return showNotification({
        icon: <BsFillCheckCircleFill />,
        color: 'green',
        title: 'Success',
        message: 'Updated book quantity on your cart'
      });
    }
  };
  const handleAddToFavorites = () => {
    if (!favorites.some(id => id === product._id)) {
      addToFavorites(product._id);
      return showNotification({
        icon: <BsFillCheckCircleFill />,
        color: 'green',
        title: 'Success',
        message: `Added ${product.title} to your favorites`
      });
    }
    return showNotification({
      icon: <RiErrorWarningFill />,
      color: 'yellow',
      title: 'Sorry',
      message: `${product.title} is already in your favorites`
    });
  };

  const handleOpen = () => {
    setOpened(!opened);
  };
  return (
    <div className="md:w-48 relative mb-2">
      <section>
        <img src={product.thumbnail || DefaultCover} className='object-cover w-full aspect-[2/3] max-w- rounded-lg cursor-pointer' onClick={handleOpen} />
      </section>
      <section className='absolute right-[5px] top-[5px]'>
        <button className='bg-primary rounded-[50%] p-btn' onClick={handleOpen}>
          <BiRightArrowAlt className='text-red-600' size={25} />
        </button>
      </section>
      <section className='absolute left-[5px] top-[5px]'>
        <p className='px-2 py-1 bg-red-600 text-primary rounded-md'>₱ {product.price.toLocaleString('en-US')}</p>
      </section>
      <section className='absolute bottom-[-15px] left-0 right-0 items-center px-4'>
        <section className='flex justify-between mb-3'>
          <button className='bg-primary p-1.5 rounded-[50%] p-btn'
            id={cart.some(cartProduct => cartProduct._id === product._id)
              ? 'stored-btn'
              : ''}
            onClick={handleAddToCart}
          >
            <BsCartCheckFill size={25} className='text-red-600' />
          </button>
          <button className='bg-primary p-1.5 rounded-[50%] p-btn'
            id={favorites.some(id => id === product._id)
              ? 'stored-btn'
              : ''}
            onClick={handleAddToFavorites}
          >
            <AiFillHeart size={25} className='text-red-600' />
          </button>
        </section>
        <p className='bg-red-600 text-primary text-sm text-center p-2 rounded-md'>{product.title}</p>
      </section>
      <Product product={product} opened={opened} handleOpen={handleOpen} handleAddToCart={handleAddToCart} handleAddToFavorites={handleAddToFavorites} />
    </div>
  );
}
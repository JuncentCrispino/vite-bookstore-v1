import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import DefaultCover from '../../assets/defaultCover.jpg';
import { BsCartCheckFill } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import cartStore from '../../store/cart';
import favoritesStore from '../../store/favorites';
import Product from './Product';

export default function ItemCard({ product }) {
  const cart = cartStore(state => state.cart);
  const favorites = favoritesStore(state => state.favorites);
  const addToFavorites = favoritesStore(set => set.addToFavorites);
  const addToCart = cartStore(state => state.addToCart);
  const addItemQty = cartStore(state => state.addItemQty);
  const [opened, setOpened] = useState(false);

  const handleAddToCart = () => {
    if(!cart.some(item => item._id === product._id)){
      return addToCart({
        _id: product._id,
        title: product.title,
        qty: 1
      });
    } else {
      return addItemQty({
        _id: product._id,
        title: product.title
      });
    }
  };
  const handleAddToFavorites = () => {
    if (!favorites.some(id => id === product._id)) {
      return addToFavorites(product._id);
    }
  };

  const handleOpen = () => {
    setOpened(!opened);
  };
  return (
    <div className="w-52 relative mb-2">
      <section>
        <img src={product.thumbnail || DefaultCover} className='object-cover w-full aspect-[2/3] max-w rounded-lg' />
      </section>
      <section className='absolute right-[5px] top-[5px]'>
        <button className='bg-primary rounded-[50%] p-btn' onClick={handleOpen}>
          <BiRightArrowAlt className='text-red-600' size={25}/>
        </button>
      </section>
      <section className='absolute bottom-[-15px] left-0 right-0 items-center px-4'>
        <section className='flex justify-between mb-3'>
          <button className='bg-primary p-1.5 rounded-[50%] p-btn'
            id={cart.some(cartProduct => cartProduct._id === product._id)
              ? 'stored-btn'
              : ''}
          >
            <BsCartCheckFill size={25} className='text-red-600' onClick={handleAddToCart}/>
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
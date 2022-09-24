import React from 'react';
import { Button } from '@mantine/core';
import cartStore from '../../store/cart';
import { NumberInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Divider } from '@mantine/core';

export default function CartItem({ book }) {
  const addItemQty = cartStore(state => state.addItemQty);
  const subtractQty = cartStore(state => state.subtractQty);
  const inputQty = cartStore(state => state.inputQty);
  const removeFromCart = cartStore(state => state.removeFromCart);

  const addItemToCart = (product) => {
    return addItemQty(product);
  };

  const subtracItemToCart = (product) => {
    if (parseInt(product.qty) > 1) {
      return subtractQty(product);
    } else {
      showNotification({
        title: 'Removed',
        message: 'Item successfully removed on your cart.',
        color: 'green'
      });
      return removeFromCart(product);
    }
  };

  const inputItem = (product, value) => {
    return inputQty(product, value);
  };

  return (
    <div>
      <div className='grid grid-cols-4 place-items-center'>
        <div className='col-span-1 w-[70%] p-5'>
          <img src={book.thumbnail} alt={book.title} /></div>
        <div className='col-span-1 block'>
          <p className='text-center font-semibold'>{book.title}</p>
          <p className='text-center text-sm'>{book.authors}</p>
        </div>
        <p className='font-semibold'>
        ₱ {book.price}
        </p>
        <div className='col-span-1 grid grid-cols-3 place-items-center'>
          <Button size='xs' className='text-2xl bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all' onClick={() => subtracItemToCart(book)}>-</Button>
          <NumberInput
            size='xs'
            className=''
            value={book.qty}
            hideControls
            onChange={(e) => inputItem(book, e)} />
          <Button size='xs' className='text-lg bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all' onClick={() => addItemToCart(book)}>+</Button>
        </div>
      </div>
      <Divider my='sm'/>
    </div>
  );
}

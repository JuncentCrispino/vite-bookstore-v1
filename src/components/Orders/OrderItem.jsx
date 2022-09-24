import React from 'react';
import useFetchBook from '../../hooks/useFetchBook';
import { Divider } from '@mantine/core';

export default function OrderItem({ bookId, qty }) {
  const { isLoading, bookDtls, error } = useFetchBook(bookId);

  return (
    <div>
      <div className='grid grid-cols-5 place-items-center'>
        <div className='col-span-1 w-[70%] p-5'>
          <img src={bookDtls?.thumbnail} alt={bookDtls?.title} /></div>
        <div className='col-span-1 block'>
          <p className='text-center font-semibold'>{bookDtls?.title}</p>
          <p className='text-center text-sm'>{bookDtls?.authors}</p>
        </div>
        <p className='font-semibold'>
        ₱ {bookDtls?.price.toLocaleString('en-US')}
        </p>
        <div className='text-center'>
          <p className='font-semibold'>{qty} {qty > 1
            ? 'pieces'
            : 'piece'}</p>
        </div>
        <div className='text-center'>
          <p className='font-semibold'>{(qty * bookDtls?.price).toLocaleString('en-US')} PHP</p>
        </div>
      </div>
      <Divider my="sm" variant="dotted"/>
    </div>
  );
}

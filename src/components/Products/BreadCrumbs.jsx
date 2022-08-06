import { Select } from '@mantine/core';
import React from 'react';

export default function BreadCrumbs({ products }) {
  return (
    <div className='flex content-between'>
      <section>
        <p>Products({products})</p>
      </section>
      <section>
        <Select
          className='w-20'
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="ease"
          size='xs'
          data= {
            [
              {
                value: '10',
                label: '10'
              },
              {
                value: '20',
                label: '20'
              },
              {
                value: '30',
                label: '30'
              }
            ]
          }
        />

      </section>
    </div>
  );
}

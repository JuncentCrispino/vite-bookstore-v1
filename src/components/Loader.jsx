import React from 'react';
import { Puff } from 'react-loader-spinner';
import { Loader as Spinner } from '@mantine/core';

export default function Loader() {
  return (
    <div className='absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center'>
      {/* <Puff
        height="80"
        width="80"
        radisu={1}
        color="#dc2626"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
      <Spinner size='xl' color='pink'/>
    </div>
  );
}

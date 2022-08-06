import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

export default function Loader() {
  return (
    <div className='absolute grid place-content-center w-full h-screen bg-transparent'>
      <PuffLoader color='#dda435' className='z-99' loading={true} size={100}/>
    </div>
  );
}

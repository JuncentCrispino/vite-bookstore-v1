import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../composables/Page';

function UserDetails() {
  return (
    <Page>
      <div className='max-w-screen-xl m-auto pt-16'>
        <Link className='bg-red-500 py-2 px-3 text-primary rounded-md hover:bg-red-600 duration-300' to='/product/create'>Add Products</Link>
      </div>
    </Page>
  );
}

export default UserDetails;
import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import { logout } from '../apis/auth';
import cartStore from '../store/cart';

export default function NavBar() {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const cart = cartStore(state => state.cart);
  const navigate = useNavigate();

  const navLinks = [
    {
      name: 'Shop',
      path: '/'
    },
    {
      name: 'Product',
      path: '/products'
    },
    {
      name: 'About Us',
      path: '/aboutus'
    },
    {
      name: 'Contact Us',
      path: '/contactus'
    }
  ];

  const handleLogout = async () => {
    await logout();
    setUser(null);
    return navigate('/');
  };

  const renderNavBar = useMemo(() => {
    return (
      <div className='fixed inset-x-0 max-w-full bg-primary shadow-s1 z-10'>
        <header className='lg:flex justify-between max-w-screen-xl m-auto py-3'>
          <nav className='flex gap-4'>
            {
              navLinks.map(link => (
                <Link key={link.name} to={link.path} className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>{link.name}</Link>
              ))
            }
          </nav>
          <nav>
            {user
              ? (
                <div className='flex gap-4'>
                  {user?.isAdmin && <Link to='/dashboard' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Dashboard</Link>}
                  <Link to='/user/details' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Profile</Link>
                  <Link to='/user/cart' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Items on Cart:{cart.reduce((t, c) => t + c.qty, 0)}</Link>
                  <button onClick={handleLogout} className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Logout</button>
                </div>
              )
              : (
                <div className='flex gap-4'>
                  <Link to='/auth/register' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Register</Link>
                  <Link to='/auth/login' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Login</Link>
                </div>
              )
            }
          </nav>
        </header>
      </div>
    );
  }, [user, cart]);

  return (
    <>
      {renderNavBar}
    </>
  );
}
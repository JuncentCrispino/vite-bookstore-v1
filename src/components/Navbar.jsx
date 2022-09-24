import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import { logout } from '../apis/auth';
import cartStore from '../store/cart';
import { Transition } from '@headlessui/react';
import { SiGitbook } from 'react-icons/si';
import { BsCartCheckFill, BsFillCheckCircleFill } from 'react-icons/bs';
import { Burger } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

export default function NavBar() {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const cart = cartStore(state => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Books',
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
    setIsOpen(false);
    setUser(null);
    return showNotification({
      icon: <BsFillCheckCircleFill/>,
      color: 'green',
      title: 'Success',
      message: 'You have successfully logged out.'
    });
  };

  const active = ({ isActive }) => (isActive
    ? 'text-primary text-lg bg-inherit font-bold underline decoration-2 underline-offset-4 py-5'
    : 'text-primary text-lg bg-inherit py-5');

  return (
    <div className='relative z-50'>
      <nav className='bg-red-600 text-primary shadow-s1 fixed inset-x-0'>
        <div className='max-w-screen-xl m-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex gap-4'>
              <NavLink to='/' className='text-primary bg-inherit grid place-content-center'>
                <SiGitbook size={30} />
              </NavLink>
              <div className='hidden md:block'>
                <div className='flex gap-4'>
                  {
                    navLinks.map(link => (
                      <NavLink key={link.name} to={link.path} className={active}>{link.name}</NavLink>
                    ))
                  }
                </div>
              </div>
            </div>
            <div>
              <div className='hidden md:block'>
                <div className='flex gap-4'>
                  <NavLink to='/user/cart' className={active}>
                    <p className='px-2 text-sm py-1 inline-block bg-primary text-red-600  rounded-lg'>{cart.reduce((t, c) => t + c.qty, 0)}</p>
                    <BsCartCheckFill className='inline-block' size={30} />
                  </NavLink>
                  {user
                    ? (
                      <>
                        {user?.isAdmin && <NavLink to='/dashboard' className={active}>Dashboard</NavLink>}
                        <NavLink to='/user/details' className={active}>Profile</NavLink>

                        <NavLink onClick={handleLogout} className='text-primary text-lg bg-inherit py-5' to='/' >Logout</NavLink>
                      </>
                    )
                    : (
                      <>
                        <NavLink to='/auth/register' className={active}>Register</NavLink>
                        <NavLink to='/auth/login' className={active}>Login</NavLink>
                      </>
                    )
                  }
                </div>

              </div>
              <div className='flex md:hidden'>
                <Burger opened={isOpen} size={25} onClick={() => setIsOpen(!isOpen)} color='white'>open</Burger>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className='md:hidden grid grid-cols-1 place-items-center text-lg'>
              {navLinks.map((item) => <NavLink onClick={() => setIsOpen(!isOpen)} key={item.name} to={item.path} className={active}>{item.name}</NavLink>)}
              <NavLink to='/user/cart' className={active} onClick={() => setIsOpen(!isOpen)}>
                <p className='px-2 text-sm py-1 inline-block bg-primary text-red-600 font-bold rounded-lg'>{cart.reduce((t, c) => t + c.qty, 0)}</p>
                <BsCartCheckFill className='inline-block' size={30} />
              </NavLink>
              {user
                ? (
                  <>
                    {user?.isAdmin && <NavLink to='/dashboard' className={active} onClick={() => setIsOpen(!isOpen)}>Dashboard</NavLink>}
                    <NavLink to='/user/details' className={active} onClick={() => setIsOpen(!isOpen)}>Profile</NavLink>
                    <NavLink onClick={handleLogout} className='text-primary text-lg bg-inherit py-5' to='/' >Logout</NavLink>
                  </>
                )
                : (
                  <>
                    <NavLink to='/auth/register' className={active} onClick={() => setIsOpen(!isOpen)}>Register</NavLink>
                    <NavLink to='/auth/login' className={active} onClick={() => setIsOpen(!isOpen)}>Login</NavLink>
                  </>
                )
              }
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
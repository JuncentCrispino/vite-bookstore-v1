import React, { useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import { logout } from '../apis/auth';
import cartStore from '../store/cart';
import { Transition } from '@headlessui/react';
import { SiGitbook } from 'react-icons/si';
import { BsCartCheckFill } from 'react-icons/bs';
import { Burger, Indicator } from '@mantine/core';

export default function NavBar() {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const cart = cartStore(state => state.cart);
  const navigate = useNavigate();
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
    setUser(null);
    return navigate('/');
  };

  // const renderNavBar = useMemo(() => {
  //   return (
  //     <div className='fixed inset-x-0 max-w-full bg-red-600 shadow-s1 z-10'>
  //       <header className='lg:flex justify-between max-w-screen-xl m-auto py-3'>
  //         <nav className='flex gap-4'>
  //           {
  //             navLinks.map(link => (
  //               <NavLink key={link.name} to={link.path} className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>{link.name}</NavLink>
  //             ))
  //           }
  //         </nav>
  //         <nav>
  //           {user
  //             ? (
  //               <div className='flex gap-4'>
  //                 {user?.isAdmin && <NavLink to='/dashboard' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Dashboard</NavLink>}
  //                 <NavLink to='/user/details' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Profile</NavLink>
  //                 <NavLink to='/user/cart' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Items on Cart:{cart.reduce((t, c) => t + c.qty, 0)}</NavLink>
  //                 <button onClick={handleLogout} className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Logout</button>
  //               </div>
  //             )
  //             : (
  //               <div className='flex gap-4'>
  //                 <NavLink to='/auth/register' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Register</NavLink>
  //                 <NavLink to='/auth/login' className='text-gray-500 bg-primary hover:text-gray-900 transition duration-300 text-lg'>Login</NavLink>
  //               </div>
  //             )
  //           }
  //         </nav>
  //       </header>
  //     </div>
  //   );
  // }, [user, cart]);

  const active = ({ isActive }) => (isActive
    ? 'text-primary text-lg bg-inherit font-bold underline decoration-2 underline-offset-4 '
    : 'text-primary text-lg bg-inherit');

  return (
    <div className='relative z-50'>
      <nav className='bg-red-600 text-primary shadow-s1 fixed inset-x-0'>
        <div className='max-w-screen-xl m-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex gap-4'>
              <NavLink to='/' className='text-primary bg-inherit'>
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

                        <button onClick={handleLogout} className={active}>Logout</button>
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
            <div className='md:hidden grid grid-cols-1 place-items-center gap-10 text-lg'>
              {navLinks.map((item) => <NavLink key={item.name} to={item.path} className={active}>{item.name}</NavLink>)}
              <NavLink to='/user/cart' className={active}>
                <p className='px-2 text-sm py-1 inline-block bg-primary text-red-600 font-bold rounded-lg'>{cart.reduce((t, c) => t + c.qty, 0)}</p>
                <BsCartCheckFill className='inline-block' size={30} />
              </NavLink>
              {user
                ? (
                  <>
                    {user?.isAdmin && <NavLink to='/dashboard' className={active}>Dashboard</NavLink>}
                    <NavLink to='/user/details' className={active}>Profile</NavLink>

                    <button onClick={handleLogout} className={active}>Logout</button>
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
          )}
        </Transition>
      </nav>
    </div>
  );
}
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import useWindowsDimensions from '../hooks/useWindowsDimensions';
import { Menu, UnstyledButton } from '@mantine/core';
import { RiAccountCircleLine } from 'react-icons/ri';
import loginStore from '../store/loginStore';
import registerStore from '../store/registerStore';

export default function NavBar() {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const setShowLogin = loginStore((state) => state.setShowLogin);
  const setShowRegister = registerStore(state => state.setShowRegister);
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
    try {
      const logoutReq = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/logout`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          refreshToken: localStorage.getItem('refreshToken')
        })
      });

      if (logoutReq.status === 200) {
        const logoutRes = await logoutReq.json();
        alert(logoutRes.message);
        setUser(null);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/');
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {

  }, []);

  return (
    <header className='bg-amber-500'>
      <nav className='py-2 container mx-auto flex justify-between items-center text-red-50'>
        <section>
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className='pr-3'>{link.name}</Link>
          ))}
        </section>
        <section className='flex items-center'>
          {user
            ? (
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <UnstyledButton>
                    <RiAccountCircleLine color='white' size={30} />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item onClick={() => navigate('/user/details')}>
                  Profile
                  </Menu.Item>
                  <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )
            : (
              <>
                <UnstyledButton className='text-red-50 pr-3' onClick={() => setShowRegister(true)}>Register</UnstyledButton>
                <UnstyledButton className='text-red-50' onClick={() => setShowLogin(true)}>Login</UnstyledButton>

              </>
            )}
        </section>
      </nav>
    </header>
  );
}
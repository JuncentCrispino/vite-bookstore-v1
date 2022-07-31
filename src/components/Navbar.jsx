import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import userStore from '../store/userStore';

export default function NavBar() {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const navigate = useNavigate();
  const navLinks = [
    {
      name: 'Home',
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

  return (
    <nav className='main-nav'>
      <ul className='nav-links'>
        <section className='nav-1'>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </section>
        <section className='nav-2'>
          {user
            ? (
              <>
                <li>
                  <Link to='/user/details'>Profile</Link>
                </li>
                <li onClick={handleLogout}>
                  Logout
                </li>
              </>
            )
            : (
              <li>
                <Link to='/auth/login'>Login</Link>
              </li>
            )}
        </section>
      </ul>
      <ul className='nav-2'>

      </ul>
    </nav>
  );
}
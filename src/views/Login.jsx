import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import loginStore from '../store/loginStore';
import { TextInput, Button, PasswordInput } from '@mantine/core';
import { MdOutlineAlternateEmail, MdOutlineLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Page from '../composables/Page';
import { showNotification } from '@mantine/notifications';
import { BiCoffee } from 'react-icons/bi';

function Login() {
  const navigate = useNavigate();
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const setShowLogin = loginStore(state => state.setShowLogin);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!(/^\S+@\S+$/.test(email)) && password.length < 8) {
      setValidEmail(false);
      setValidPassword(false);
      setIsLoading(false);
    }
    if (!(/^\S+@\S+$/.test(email))) {
      setValidEmail(false);
      setIsLoading(false);
      return;
    }
    if (password.length < 8) {
      setValidPassword(false);
      setIsLoading(false);
      return;
    }
    try {
      const loginReq = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/sign-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const loginRes = await loginReq.json();
      if (loginReq.status === 200) {
        setUser(loginRes.user);
        setShowLogin(false);
        localStorage.setItem('accessToken', loginRes.accessToken);
        localStorage.setItem('refreshToken', loginRes.refreshToken);
        showNotification({
          icon: <BiCoffee/>,
          color: 'green',
          title: 'Good Day!',
          message: 'You have successfully logged in to your account.'
        });
        return navigate('/');
      }
      return setLoginError(loginRes.message);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const primaryBtn = 'bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all';
  return (
    <Page>
      <div className='grid place-items-center h-screen max-w-md mx-auto px-4'>
        <div className='max-h-80 grid place-items-center w-full rounded-lg bg-primary shadow-sm'>
          <form onSubmit={login} className='w-full px-8 py-8'>
            <TextInput
              className='mb-2'
              label='Email'
              type="text"
              value={email}
              icon={<MdOutlineAlternateEmail size={25} />}
              radius='sm'
              onChange={(e) => {
                setEmail(e.target.value);
                setValidEmail(true);
                setLoginError('');
              }}
              placeholder="john@example.com"
              error={!validEmail && 'Please enter a valid email'}
            />
            <PasswordInput
              className='mb-2'
              label='Password'
              value={password}
              icon={<MdOutlineLock size={25} />}
              radius='sm'
              onChange={(e) => {
                setPassword(e.target.value);
                setValidPassword(true);
                setLoginError('');
              }}
              placeholder="Password"
              error={!validPassword && 'Password must be at least 8 characters'}
              visibilityToggleIcon={({ reveal, size }) =>
                reveal
                  ? <MdVisibilityOff size={size} />
                  : <MdVisibility size={size} />
              }
            />
            {loginError && <p className='text-xs text-rose-600 mb-1'>{loginError}</p>}
            <p className='text-xs text-right'>Already have an account?
              <span className='text-gray-500 cursor-pointer' onClick={() => {
                navigate('/auth/register');
              }}> Register</span>
            </p>
            <div className='text-right mt-5'>
              <Button
                className={primaryBtn}
                type="submit"
                size='xs'
                radius='sm'
                loading={isLoading}
              >
                submit
              </Button>
            </div>
            <div>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
}

export default Login;
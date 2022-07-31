import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import { TextInput, Button, PasswordInput } from '@mantine/core';
import { MdOutlineAlternateEmail, MdOutlineLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';

function Login() {
  const navigate = useNavigate();
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

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
      const loginReq = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`, {
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
        localStorage.setItem('accessToken', loginRes.accessToken);
        localStorage.setItem('refreshToken', loginRes.refreshToken);
        return navigate('/');
      }
      return setLoginError(loginRes.message);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-sec">
      <form onSubmit={login}>
        <h3 className='text-center'>Sign In</h3>
        <TextInput type="text"
          className='login-input'
          value={email}
          icon={<MdOutlineAlternateEmail size={25} />}
          radius='md'
          onChange={(e) => { setEmail(e.target.value); setValidEmail(true); setLoginError(''); }}
          placeholder="Email"
          error={!validEmail && 'Please enter a valid email'}
        />
        <PasswordInput
          className='log-input'
          value={password}
          icon={<MdOutlineLock size={25} />}
          radius='md'
          onChange={(e) => { setPassword(e.target.value); setValidPassword(true); setLoginError(''); }}
          placeholder="Password"
          error={!validPassword && 'Password must be at least 8 characters'}
          visibilityToggleIcon={({ reveal, size }) =>
            reveal
              ? <MdVisibilityOff size={size} />
              : <MdVisibility size={size} />
          }
        />
        {loginError && <p className='login-error'>{loginError}</p>}
        <span className='login-button'>
          <Button
            type="submit"
            size='sm'
            radius='md'
            color='primary'
            loading={isLoading}
          >
            Login
          </Button>
        </span>
      </form>
    </section>
  );
}

export default Login;
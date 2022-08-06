import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import userStore from '../store/userStore';
import loginStore from '../store/loginStore';
import { TextInput, Button, PasswordInput, Modal, useMantineTheme } from '@mantine/core';
import { MdOutlineAlternateEmail, MdOutlineLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { UnstyledButton } from '@mantine/core';
import registerStore from '../store/registerStore';

function Login() {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const showLogin = loginStore(state => state.showLogin);
  const setShowLogin = loginStore(state => state.setShowLogin);
  const setShowRegister = registerStore(state => state.setShowRegister);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/');
      setShowLogin(false);
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
        setShowLogin(false);
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

    <Modal
      size="sm"
      overlayColor={theme.colorScheme === 'dark'
        ? theme.colors.dark[9]
        : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      centered
      opened={showLogin}
      onClose={() => setShowLogin(false)}
      title='LOGIN'
    >
      <form onSubmit={login}>
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
        <p className='text-xs text-right'>Not a member yet?
          <UnstyledButton
            onClick={() => {
              setShowLogin(false);
              setShowRegister(true);
            }}
            className='text-xs font-bold ml-1'>Sign up</UnstyledButton>
        </p>
        <div className='text-right mt-5'>
          <Button
            className='bg-blue-500'
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
    </Modal>

  );
}

export default Login;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import { TextInput, Button, PasswordInput, Stepper, Group, LoadingOverlay } from '@mantine/core';
import { MdOutlineAlternateEmail, MdOutlineLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import Page from '../composables/Page';
import { register } from '../apis/auth';

function Register() {
  const navigate = useNavigate();
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
  const [active, setActive] = useState(0);
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validConfirmEmail, setValidConfirmEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [validFirstName, setValidFirstName] = useState(true);
  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(true);
  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(true);
  const [address, setAddress] = useState('');
  const [validAddress, setValidAddress] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const nextStep = (e) => {
    e.preventDefault();
    if (active === 0) {
      if (!(/^\S+@\S+$/.test(email))) {
        setValidEmail(false);
        return;
      }
      if (email !== confirmEmail) {
        setValidConfirmEmail(false);
        return;
      }
      if (password.length < 8) {
        setValidPassword(false);
        return;
      }
      if (password !== confirmPassword) {
        setValidConfirmPassword(false);
        return;
      }
      return setActive(1);
    } else if (active === 1) {
      if (firstName.length < 1) {
        setValidFirstName(false);
      }
      if (lastName.length < 1) {
        setValidLastName(false);
      }
      if (phone.length < 1) {
        setValidPhone(false);
      }
      if (address.length < 1) {
        setValidAddress(false);
        return;
      }
      signup({
        email,
        password,
        firstName,
        lastName,
        mobileNo: phone,
        birthday: 'sample',
        gender: 'sample'
      });
      return setActive(2);
    }
  };

  const prevStep = () => setActive((current) => (current > 0
    ? current - 1
    : current));

  const signup = async (body) => {
    setIsLoading(true);
    const data = await register(body);
    if (data.statusCode === 200) {
      setUser(data.res);
      setIsLoading(false);
    } else {
      console.log(data);
    }

  };

  const primaryBtn = 'bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all';

  return (
    <Page>
      <div className='grid place-items-center h-[80vh] max-w-md mx-auto px-4'>
        <section className='grid place-items-center w-full rounded-lg bg-primary shadow-shadow-1'>
          <form onSubmit={(e) => nextStep(e)} className='w-full px-8 py-8'>
            <Stepper active={active} onStepClick={setActive} breakpoint="sm" size='xs'>
              <Stepper.Step label='Credentials' description='email/password' >
                <TextInput
                  size='xs'
                  required
                  className='mb-2'
                  label='Email'
                  type='email'
                  value={email}
                  icon={<MdOutlineAlternateEmail size={20} />}
                  radius='sm'
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setValidEmail(true);
                    setLoginError('');
                  }}
                  placeholder="john@example.com"
                  error={!validEmail && 'Please enter a valid email'}
                />
                <TextInput
                  size='xs'
                  required
                  className='mb-2'
                  label='Confirm Email'
                  type='email'
                  value={confirmEmail}
                  icon={<MdOutlineAlternateEmail size={20} />}
                  radius='sm'
                  onChange={(e) => {
                    setConfirmEmail(e.target.value);
                    setValidConfirmEmail(true);
                    setLoginError('');
                  }}
                  placeholder="john@example.com"
                  error={!validConfirmEmail && 'Email does not match'}
                />
                <PasswordInput
                  size='xs'
                  required
                  className='mb-2'
                  label='Password'
                  value={password}
                  icon={<MdOutlineLock size={20} />}
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
                <PasswordInput
                  size='xs'
                  required
                  className='mb-2'
                  label='Confirm Password'
                  value={confirmPassword}
                  icon={<MdOutlineLock size={20} />}
                  radius='sm'
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setValidPassword(true);
                    setLoginError('');
                  }}
                  placeholder="Password"
                  error={!validConfirmPassword && 'Password does not match'}
                  visibilityToggleIcon={({ reveal, size }) =>
                    reveal
                      ? <MdVisibilityOff size={size} />
                      : <MdVisibility size={size} />
                  }
                />
              </Stepper.Step>
              <Stepper.Step label='Account' description='Personal Info'>
                <section className='grid lg:grid-cols-2 gap-1 sm:grid-cols-1'>
                  <TextInput
                    size='xs'
                    required
                    className='mb-2'
                    label='First Name'
                    type='text'
                    value={firstName}
                    icon={<VscAccount size={20} />}
                    radius='sm'
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setValidFirstName(true);
                      setLoginError('');
                    }}
                    placeholder='John'
                    error={!validFirstName && 'First name must not be empty'}
                  />
                  <TextInput
                    size='xs'
                    required
                    className='mb-2'
                    label='Last Name'
                    type='text'
                    value={lastName}
                    icon={<VscAccount size={20} />}
                    radius='sm'
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setValidLastName(true);
                      setLoginError('');
                    }}
                    placeholder='Doe'
                    error={!validLastName && 'LastName name must not be empty'}
                  />
                </section>
                <TextInput
                  size='xs'
                  className='mb-2'
                  label='Mobile Number'
                  type='tel'
                  value={phone}
                  icon={<MdOutlinePhoneAndroid size={20} />}
                  radius='sm'
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setValidPhone(true);
                    setLoginError('');
                  }}
                  placeholder='09123456789'
                  error={!validPhone && 'Phone number must not be empty'}
                />
                <section>
                  <TextInput
                    size='xs'
                    className='mb-2'
                    label='Address'
                    type='text'
                    value={address}
                    icon={<VscAccount size={20} />}
                    radius='sm'
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setValidAddress(true);
                      setLoginError('');
                    }}
                    placeholder='Tower 1, 1st Floor, 1st Street, 1st Barangay, 1st City, 1st Country'
                    error={!validAddress && 'Address must not be empty'}
                  />
                </section>
              </Stepper.Step>
              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>
            <LoadingOverlay visible={isLoading} overlayBlur={2} />
            <p className='text-xs text-right'>Already have an account?
              <span className='text-gray-500 cursor-pointer' onClick={() => navigate('/auth/login')}> Login</span>
            </p>
            <Group position="center" mt="xl">
              <Button size='xs' radius='sm' color='primary' className={primaryBtn} onClick={prevStep}>Back</Button>
              <Button type='submit' size='xs' radius='sm' color='primary' className={primaryBtn} onClick={nextStep}>Next</Button>
            </Group>
          </form>
        </section>
      </div>
    </Page>

  );
}

export default Register;
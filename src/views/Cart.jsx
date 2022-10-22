import React, { useState, useMemo } from 'react';
import Page from '../composables/Page';
import CartItem from '../components/Cart/CartItem';
import cartStore from '../store/cart';
import { PayPalButtons } from '@paypal/react-paypal-js';
import userStore from '../store/userStore';
import { Button, Group, Stepper, TextInput, Divider, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { motion } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
import { H1 } from '../components/Typography/Headers';

function Cart() {
  const user = userStore(state => state.user);
  const cart = cartStore((state) => state.cart);
  const emptyCart = cartStore((state) => state.emptyCart);
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [middleName, setMiddleName] = useState(user?.middleName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobileNo, setMobileNo] = useState(user?.mobileNo || '');
  const [houseNo, setHouseNo] = useState(user?.address?.houseNo || user?.address?.unit || '');
  const [building, setBuilding] = useState(user?.address?.building || '');
  const [street, setStreet] = useState(user?.address?.street || '');
  const [barangay, setBarangay] = useState(user?.address?.barangay || '');
  const [city, setCity] = useState(user?.address?.city || '');
  const [region, setRegion] = useState(user?.address?.region || '');
  const [shipping, setShipping] = useState(100);
  const [active, setActive] = useState(0);
  const [inputError, setInputError] = useState();
  const [paypalAcct, setPaypalAcct] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => setActive((current) => (current < 1
    ? current + 1
    : current));
  const prevStep = () => setActive((current) => (current > 0
    ? current - 1
    : current));

  const subTotal = useMemo(() => {
    return (cart.map(item => item.price * item.qty).reduce((pv, cv) => pv + cv, 0));
  }, [cart]);

  const createOrder = async () => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({
        orderItems: cart.map(item => {
          return ({
            productId: item._id,
            productName: item.title,
            price: item.price,
            qty: item.qty
          });
        })
      })
    });
    const order = await response.json();
    return order.id;
  };

  const onApprove = async (data) => {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/order/${data.orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          middleName: user.middleName,
          email: user.email,
          mobileNo
        },
        shippingAddress: {
          unit: houseNo,
          building,
          houseNo: houseNo,
          street,
          barangay,
          city,
          region
        },
        orderItems: cart.map(item => {
          return ({
            productId: item._id,
            productName: item.title,
            price: item.price,
            qty: item.qty
          });
        }),
        deliveryFee: shipping,
        isPaid: true,
        deliveryStatus: 'pending',
        paypalOrderId: data.orderID
      })
    });

    if (response.status === 200) {
      emptyCart();
      return showNotification({
        title: 'Success',
        message: 'Placed Order Successfully.',
        color: 'green'
      });
    } else {
      return showNotification({
        title: 'Error',
        message: 'Sorry! Transaction failed.',
        color: 'red'
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (!firstName) {
      return setInputError('First name is required.');
    }
    if (!lastName) {
      return setInputError('Last name is required.');
    }
    if (!email) {
      return setInputError('Email is required.');
    }
    if (!mobileNo) {
      return setMobileNo('Mobile No is required.');
    }
    if (!houseNo) {
      return setInputError('Block/Lot/House/Unit Number is required.');
    }
    if (!street) {
      return setInputError('Street is required.');
    }
    if (!barangay) {
      return setInputError('Barangay is required.');
    }
    if (!city) {
      return setInputError('Barangay is required');
    }
    if (!region) {
      return setInputError('Region is Required');
    }
    nextStep();
  };

  const primaryBtn = 'bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all';

  return (
    <Page>
      <H1>Cart</H1>
      <div className='grid place-items-center mx-auto'>
        <div className='max-h-100  place-items-center w-full rounded-lg bg-primary shadow-sm p-5'>
          <p className='text-center font-bold text-2xl text-red-600'>Shipping & Items Details</p>
          {cart.length < 1
            ? (<p className='p-10 text-md'>There are no items in your cart, <button className='font-bold text-red-600' onClick={() => navigate('/products')}>Click here to shop.</button></p>)
            : (
              <form onSubmit={submit}>
                <Stepper active={active} onStepClick={setActive} breakpoint="sm" size='sm' color='green'>
                  <Stepper.Step label='Shipping' description="Review Shipping Information">
                    {user
                      ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1'>
                            <TextInput placeholder='John' label='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <TextInput placeholder='Doe' label='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <TextInput placeholder='A' label='Middle Name' value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                            <TextInput placeholder='john@example.com' type='email' label='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextInput placeholder='09123456789' label='Mobile Number' required value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                          </div>
                          <Divider my='xl' />
                          <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1'>
                            <TextInput placeholder='01H' label='Block/Lot/House/Unit Number' required value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />
                            <TextInput placeholder='Green Residences' label='Building' value={building} onChange={(e) => setBuilding(e.target.value)} />
                            <TextInput placeholder='Taft' label='Street' required value={street} onChange={(e) => setStreet(e.target.value)} />
                            <TextInput placeholder='San Juan' label='Barangay' required value={barangay} onChange={(e) => setBarangay(e.target.value)} />
                            <TextInput placeholder='Manila' label='City' required value={city} onChange={(e) => setCity(e.target.value)} />
                            <TextInput placeholder='NCR' label='Region' required value={region} onChange={(e) => setRegion(e.target.value)} />
                          </div>
                        </motion.div>
                      )
                      : (
                        <p>Please Login <button className='font-bold text-red-600' onClick={() => navigate('/auth/login')}>here</button> to Review Shipping Information</p>
                      )}
                  </Stepper.Step>
                  <Stepper.Step label='Products' description="Review Products Information">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className='grid lg:grid-cols-3 gap-5 lg:w-full'>
                        <div className='lg:col-span-2 md:col-span-3'>
                          {cart.length > 0 && (
                            <>{cart.map(item => <CartItem key={item._id} book={item} />)}</>
                          )}
                          <div className='font-semibold flex justify-between'>
                            <p>SubTotal</p>
                            <p>₱ {subTotal}</p>
                          </div>
                        </div>
                        <div className='lg:col-span-1 md:col-span-3 m-5 grid'>
                          <div>
                            <div className='grid grid-cols-2'>
                              <p className='pb-5'>Item Amount</p>
                              <p className='font-semibold text-right pb-5'>₱ {subTotal}</p>
                              <p>Shipping Cost</p>
                              <p className='font-semibold text-right'>₱ {(shipping)}</p>
                            </div>
                          </div>
                          <div className='grid place-content-end '>
                            <div className='grid grid-cols-2 pb-5'>
                              <p>Total Amount</p>
                              <p className='font-semibold text-right'>₱ {(subTotal + shipping)}</p>
                            </div>
                            {user
                              ? (
                                <PayPalButtons
                                  style={{ layout: 'vertical' }}
                                  createOrder={createOrder}
                                  onApprove={onApprove}
                                />
                              )
                              : (
                                <Button onClick={() => navigate('/auth/login')} className={primaryBtn} >Login</Button>
                              )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Stepper.Step>
                </Stepper>
                {user && <p className='text-xs text-red-600'>{inputError && inputError}</p>}
                <Group position="right" mt="xl">
                  {active > 0 && <Button onClick={prevStep} className={primaryBtn} >Back</Button>}
                  {user && <>{active === 0 && <Button className={primaryBtn} type='submit' >Next</Button>}</>}
                </Group>
              </form>
            )}
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='grid place-items-center py-5'>
          <div className='place-items-center w-full rounded-lg bg-primary shadow-sm p-5'>
            <p className='text-[18px]'>Please use this payplal test account upon chekout :</p>
            <p>Email: <span className='font-semibold'>sb-xhw6a20741718@personal.example.com</span></p>
            <p>Password: <span className='font-semibold'>rU?6KF0_</span></p>
          </div>
        </div>
      </motion.div>
    </Page>
  );
}

export default Cart;
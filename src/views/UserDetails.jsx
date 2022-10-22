import React, { useState } from 'react';
import { Tabs, TextInput, Divider, Button, Avatar } from '@mantine/core';
import Page from '../composables/Page';
import userStore from '../store/userStore';
import { showNotification } from '@mantine/notifications';
import { motion } from 'framer-motion';
import { updateUserDetails } from '../apis/user';
import useFetchOrders from '../hooks/useFetchOrder';
import UserOrders from '../components/Orders/UserOrders';
import { Pagination } from '@mantine/core';

function UserDetails() {
  const user = userStore(state => state.user);
  const setUser = userStore(state => state.setUser);
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
  const [inputError, setInputError] = useState();
  const [page, setPage] = useState(1);
  const { isLoading, orders, error } = useFetchOrders(page);

  const onUpdate = async (e) => {
    e.preventDefault();
    const update = await updateUserDetails({
      firstName,
      lastName,
      middleName,
      email,
      mobileNo,
      address: {
        unit: houseNo,
        building,
        houseNo: houseNo,
        street,
        barangay,
        city,
        region
      }
    });

    if (update.statusCode === 200) {
      setUser(update.response);
      showNotification({
        title: 'Success',
        message: 'Personal information updated successfully',
        color: 'green'
      });
    } else {
      showNotification({
        title: 'Sorry',
        message: update.response.message,
        color: 'red'
      });
    }
  };

  return (
    <Page>
      <p className='font-bold text-2xl p-4'>User Details</p>
      <div className='grid place-items-center mx-auto px-4'>
        <div className='max-h-100  place-items-center w-full rounded-lg bg-primary shadow-sm p-5'>
          <Tabs variant="outline" defaultValue="profile">
            <Tabs.List>
              <Tabs.Tab value='profile'>
                <p className='text-lg font-semibold text-gray-500'>Profile</p>
              </Tabs.Tab>
              <Tabs.Tab value='orders'>
                <p className='text-lg font-semibold text-gray-500'>Orders</p>
              </Tabs.Tab>
            </Tabs.List>
            <div className='border-l border-r border-b border-[#dee2e6] p-5 rounded-b-md'>
              <Tabs.Panel value='profile' >
                <form onSubmit={onUpdate}>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Avatar color="red" radius="xl" size='lg' className='mb-5'>{user.firstName[0].toUpperCase()}{user.lastName[0].toUpperCase()}</Avatar>
                    <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
                      <TextInput placeholder='John' label='First Name' required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      <TextInput placeholder='Doe' label='Last Name' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      <TextInput placeholder='A' label='Middle Name' value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                      <TextInput placeholder='john@example.com' type='email' label='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                      <TextInput placeholder='09123456789' label='Mobile Number' required value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
                    </div>
                    <Divider my='xl' />
                    <div className='grid lg:grid-cols-3 gap-5 md:grid-cols-2'>
                      <TextInput placeholder='01H' label='Block/Lot/House/Unit Number' required value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />
                      <TextInput placeholder='Green Residences' label='Building' value={building} onChange={(e) => setBuilding(e.target.value)} />
                      <TextInput placeholder='Taft' label='Street' required value={street} onChange={(e) => setStreet(e.target.value)} />
                      <TextInput placeholder='San Juan' label='Barangay' required value={barangay} onChange={(e) => setBarangay(e.target.value)} />
                      <TextInput placeholder='Manila' label='City' required value={city} onChange={(e) => setCity(e.target.value)} />
                      <TextInput placeholder='NCR' label='Region' required value={region} onChange={(e) => setRegion(e.target.value)} />
                    </div>
                    <div className='pt-5 text-right'>
                      <Button className='bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all' type='submit'>Update</Button>
                    </div>
                  </motion.div>
                </form>
              </Tabs.Panel>
              <Tabs.Panel value='orders'>
                {!isLoading && (
                  <>
                    <UserOrders orders={orders.results} />
                    {orders.totalPages > 1 && (
                      <div className='m-5 grid place-content-center'>
                        <Pagination total={orders.totalPages} onChange={e => setPage(e)} color="red" radius="xl" page={page} />
                      </div>
                    )}
                  </>
                )}
                {/* {totalPages > 1 && <Pagination total={totalPages} onChange={(e) => setPage(e)} color="red" radius="xl" page={page}/> } */}
              </Tabs.Panel>
            </div>
          </Tabs>
        </div>
      </div>
    </Page>
  );
}

export default UserDetails;
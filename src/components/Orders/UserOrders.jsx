import React from 'react';
import { Accordion, Divider } from '@mantine/core';
import OrderItem from './OrderItem';

export default function UserOrders({ orders }) {

  const statusBtn = (status) => {
    if (status === 'pending') {
      return 'bg-red-600 py-1 px-2 text-white rounded-md inline-block';
    }
  };

  return (
    <Accordion defaultValue='0'>
      {orders.map((order, i) => {
        const { orderItems, shippingAddress } = order;
        return (
          <Accordion.Item key={order.id} value={(i + 1).toString()}>
            <Accordion.Control>
              <p className='font-semibold mb-1'>Order # {order.paypalOrderId}</p>
              <p className={statusBtn(order.deliveryStatus)}>Status: {order.deliveryStatus}</p>
            </Accordion.Control>
            <Accordion.Panel>
              <div className=''>
                <p className='font-semibold text-lg'>Order Items</p>
                {orderItems.map(item => {
                  return (
                    <div key={item.productId}>
                      <OrderItem bookId={item.productId} qty={item.qty}/>
                    </div>
                  );
                })}
                <div className='font-semibold text-lg grid grid-cols-2 place-content-between'>
                  <p>Shipping Cost</p>
                  <p className='text-right'>{order.deliveryFee.toLocaleString('en-US')} PHP</p>
                  <p>Total Cost</p>
                  <p className='text-right'>{order.totalOrderPrice.toLocaleString('en-US')} PHP</p>
                </div>
              </div>
              <Divider my="sm" variant="dotted"/>
              <p className='font-semibold text-lg mb-5'>Shipping information</p>
              <div className='grid grid-cols-2'>

                <div>
                  <p className='font-semibold text-lg mb-5 uppercase underline'>Consignee :</p>
                  <p className=''>Name :</p>
                  <p className='uppercase font-semibold mb-2'>{order?.user?.firstName} {order?.user?.lastName}</p>
                  <p className=''>Email :</p>
                  <p className='font-semibold mb-2'>{order?.user?.email}</p>
                  <p className=''>Mobile No. :</p>
                  <p className='font-semibold mb-5'>{order?.user?.mobileNo}</p>
                </div>
                <div>
                  <p className='font-semibold text-lg mb-5 uppercase underline'>Address</p>
                  <p className=''>House/Unit No. :</p>
                  <p className='font-semibold mb-2'>{order?.shippingAddress?.unit || order?.shippingAddress?.unit}</p>
                  <p className=''>Building</p>
                  <p className='font-semibold mb-2'>{order?.shippingAddress?.building}</p>
                  <p className=''>Street :</p>
                  <p className='font-semibold mb-2'>{order?.shippingAddress?.street}</p>
                  <p className=''>City :</p>
                  <p className='font-semibold mb-2'>{order?.shippingAddress?.city}</p>
                  <p className=''>Region :</p>
                  <p className='font-semibold mb-2'>{order?.shippingAddress?.region}</p>
                </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

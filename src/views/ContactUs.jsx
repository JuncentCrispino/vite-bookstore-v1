import { Textarea, TextInput, Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import React from 'react';
import Page from '../composables/Page';

function ContactUs() {
  return (
    <Page>
      <div className='grid place-items-center h-screen max-w-md mx-auto px-4'>
        <div className='max-h-100 grid place-items-center w-full rounded-lg bg-primary shadow-sm gap-5 p-5'>
          <div className='p-5 w-full grid gap-5'>
            <p className='text-center font-bold text-2xl text-red-600'>Contact Us</p>
            <TextInput
              label='Email'
              type='email'
              required={true}
              placeholder='your@email.com'
            />
            <TextInput
              label='Name'
              placeholder='John Doe'
            />
            <Textarea
              label='Your Message'
              required={true}
              autosize
              minRows={5}
            />
            <div className='text-right'>
              <Button size='xs' radius='sm' color='primary' className='bg-red-600 border-2 border-red-600 hover:bg-primary  hover:text-red-600 transition-all'
                onClick={() => {
                  showNotification({
                    title: 'Success',
                    message: 'Message Sent Successfully',
                    color: 'green'
                  });
                }}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default ContactUs;
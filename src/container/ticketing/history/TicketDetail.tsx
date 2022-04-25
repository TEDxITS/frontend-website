import React from 'react';

import NextImage from '@/components/NextImage';

import { TicketResponse } from '@/types/api';

function TicketDetail({ data }: { data: TicketResponse }) {
  return (
    <div className='flex justify-center sm:layout'>
      <div className='w-full sm:w-1/2'>
        <div className='relative mb-5'>
          <NextImage
            src='/svg/yellow-circle.svg'
            width={30}
            height={30}
            alt='sticker'
            quality={100}
            priority={true}
            className='right-[7.5vw] top-[40%] absolute z-10 animate-bounce'
          />
          <NextImage
            src='/svg/pink-sun.svg'
            width={60}
            height={60}
            alt='sticker'
            quality={100}
            priority={true}
            className='animate-[spin_8s_linear_infinite] left-[6vw] top-[30%] absolute z-10'
          />
          <h2 className='font-fivo text-cblue tracking-[-0.15rem] -mb-2 text-5xl font-normal text-center'>
            PAYM<span className='font-pilow'>E</span>NT
          </h2>
          <h2 className='font-fivo text-cblue tracking-[-0.15rem] text-5xl font-normal text-center'>
            DETAILS
          </h2>
        </div>
        <div className='flex flex-col px-10 pt-10 pb-9 overflow-clip bg-white rounded-xl drop-shadow'>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Event Name
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              {data.Event.event_name}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Event Date
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              {data.Event.event_date}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Booking Name
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              {data.booking_name}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Booking Address
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              {data.booking_address}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Booking Telephone
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              {data.booking_telp}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Timer
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              {data.booking_status ? '' : '00:00:00'}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Type
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              {data.PaymentType?.type}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo text-cdark w-[45%] text-sm font-semibold'>
              Price
            </p>
            <p className='font-fivo text-cdark w-[55%] text-sm'>
              Rp {data.PaymentType?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;

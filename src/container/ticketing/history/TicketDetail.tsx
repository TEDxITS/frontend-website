import React from 'react';

import NextImage from '@/components/NextImage';

import { TicketResponse } from '@/types/api';

function TicketDetail({ data }: { data: TicketResponse }) {
  return (
    <div className='flex justify-center sm:layout'>
      <div className='w-full sm:w-1/2'>
        <div className='mb-5 relative'>
          <NextImage
            src='/svg/yellow-circle.svg'
            width={30}
            height={30}
            alt='sticker'
            quality={100}
            priority={true}
            className='absolute animate-bounce right-[7.5vw] top-[40%] z-10'
          />
          <NextImage
            src='/svg/pink-sun.svg'
            width={60}
            height={60}
            alt='sticker'
            quality={100}
            priority={true}
            className='absolute animate-[spin_8s_linear_infinite] left-[6vw] top-[30%] z-10'
          />
          <h2 className='-mb-2 font-fivo font-normal text-5xl text-cblue text-center tracking-[-0.15rem]'>
            PAYM<span className='font-pilow'>E</span>NT
          </h2>
          <h2 className='font-fivo font-normal text-5xl text-cblue text-center tracking-[-0.15rem]'>
            DETAILS
          </h2>
        </div>
        <div className='bg-white drop-shadow flex flex-col overflow-clip pb-9 pt-10 px-10 rounded-xl'>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Event Name
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              {data.Event.event_name}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Event Date
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              {data.Event.event_date}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Booking Name
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              {data.booking_name}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Booking Address
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              {data.booking_address}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Booking Telephone
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              {data.booking_telp}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Timer
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              {data.booking_status ? '' : '00:00:00'}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Type
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              {data.PaymentType?.type}
            </p>
          </div>
          <div className='flex my-2'>
            <p className='font-fivo font-semibold text-cdark text-sm w-[45%]'>
              Price
            </p>
            <p className='font-fivo text-cdark text-sm w-[55%]'>
              Rp {data.PaymentType?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;

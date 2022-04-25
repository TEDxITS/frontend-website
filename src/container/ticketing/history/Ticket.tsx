import { useRouter } from 'next/router';
import React from 'react';

import NextImage from '@/components/NextImage';

import BlankLeftTicket from '@/assets/svg/BlankLeftTicket';
import BlankRightTicket from '@/assets/svg/BlankRightTicket';
import BlankRightTicketWhite from '@/assets/svg/BlankRightTicketWhite';

//setValue(MailInputField.MESSAGES, e as React.SetStateAction<string>);

interface TicketProps {
  data: {
    booking_id: string;
    event_id: string;
    user_id: string;
    booking_name: string;
    booking_address: string;
    booking_telp: string;
    booking_status: boolean;
    booking_start_time: string;
    booking_finish_time: string;
    Event: {
      event_id: string;
      event_name: string;
      event_date: string;
      event_start: null;
      event_finish: null;
      event_type: string;
    };
  };
}

function Ticket({ data }: TicketProps) {
  const router = useRouter();
  return (
    <div>
      <div className='block relative my-5 sm:hidden'>
        <BlankRightTicketWhite />
        <div className='absolute right-6 left-7 top-20 h-5/6'>
          <h1 className='font-fivo text-cblue text-2xl text-center -skew-x-6'>
            {data.Event.event_name}
          </h1>
          <h2 className='font-fivo text-cdark text-sm text-center'>
            {new Date(data.Event.event_date).toLocaleString('en-GB', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          <div className='flex flex-col items-center mt-10 mb-14 space-y-5 h-2/6 sm:flex-row'>
            <div className='h-1/2 leading-none'>
              <h3 className='font-fivo text-cdark text-xl font-extrabold text-center'>
                Status
              </h3>
              <p className='text-cdark'>
                {data.booking_status
                  ? 'Payment Success'
                  : 'Waiting for Payment'}
              </p>
            </div>
            <div className='h-1/2 leading-none'>
              {data.booking_status ? (
                <></>
              ) : (
                <>
                  <h3 className='font-fivo text-cdark text-xl font-extrabold text-center'>
                    Payment Confirmation
                  </h3>
                  <p className='text-cdark text-center'>00.30.00</p>
                </>
              )}
            </div>
            <button className='bg-cblue font-fivo flex px-6 py-1 h-3/4 text-xl font-bold rounded transition-all hover:scale-105'>
              <span className='text-cyellow'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-3 w-6 h-6'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
              </span>{' '}
              Details
            </button>
          </div>
          <p className='text-xs text-justify text-gray-400'>
            * Payment confirmation must be done within 3 hours in working hours
            (08.00-20.00 WIB). After 3 hours, the reservation we&apos;re holding
            will be released to others.
          </p>
        </div>
      </div>
      <div className='hidden sm:block'>
        <div className='grid relative grid-cols-7 my-5'>
          <BlankLeftTicket className='col-span-6' />
          <BlankRightTicket className='col-span-1' />
          <div className='w-[14.5%] absolute right-0 h-full overflow-clip'>
            <NextImage
              src='/svg/pink-sun.svg'
              width={120}
              height={120}
              alt='sticker'
              quality={100}
              className='animate-[spin_8s_linear_infinite] absolute top-0 left-1 z-10'
            />
            <NextImage
              src='/svg/yellow-blob.svg'
              width={150}
              height={150}
              alt='sticker'
              quality={100}
              className='absolute top-2 -right-16 z-20'
            />
            <NextImage
              src='/svg/yellow-blob.svg'
              width={150}
              height={150}
              alt='sticker'
              quality={100}
              className='absolute top-7 -left-20 rotate-90'
            />
            <NextImage
              src='/svg/arrow-circle.svg'
              width={50}
              height={50}
              alt='sticker'
              quality={100}
              className='absolute bottom-6 left-10'
            />
          </div>
          <div className='absolute top-7 left-14 w-3/4'>
            <h1 className='font-fivo text-cblue text-2xl -skew-x-6'>
              {data.Event.event_name}
            </h1>
            <h2 className='font-fivo text-cdark text-sm'>
              {new Date(data.Event.event_date).toLocaleString('en-GB', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </h2>
            <div className='flex justify-between items-center my-5'>
              <button
                className='bg-cblue font-fivo flex px-6 py-1 h-3/4 text-xl font-bold rounded transition-all hover:scale-105'
                onClick={() => router.push(`history/${data.booking_id}`)}
              >
                <span className='text-cyellow'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-3 w-6 h-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </span>{' '}
                Details
              </button>
              <div className='min-w-[30%] leading-none'>
                <h3 className='font-fivo text-cdark text-xl font-extrabold'>
                  Status
                </h3>
                <p className='text-cdark'>
                  {data.booking_status
                    ? 'Payment Success'
                    : 'Waiting for Payment'}
                </p>
              </div>
              <div className='min-w-[40%] leading-none'>
                {data.booking_status ? (
                  <></>
                ) : (
                  <>
                    <h3 className='font-fivo text-cdark text-xl font-extrabold'>
                      Payment Confirmation
                    </h3>
                    <p className='text-cdark'>00.30.00</p>
                  </>
                )}
              </div>
            </div>
            <p className='text-xs text-gray-400'>
              * Payment confirmation must be done within 3 hours in working
              hours (08.00-20.00 WIB). <br /> After 3 hours, the reservation
              we&apos;re holding will be released to others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

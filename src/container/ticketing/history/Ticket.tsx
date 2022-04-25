import React from 'react';

import clsxm from '@/lib/clsxm';
import { formatLocale, toDate } from '@/lib/date';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Timer from '@/components/Timer';

import BlankRightTicket from '@/assets/svg/BlankRightTicket';

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
  return (
    <div>
      <div className='flex flex-wrap drop-shadow-md'>
        <div className='flex flex-col w-full lg:w-5/6'>
          <div className='relative px-7 w-full h-full'>
            <TicketLeftComponent className='absolute top-0 left-0 h-full' />
            <TicketRightComponent className='absolute top-0 right-0 h-full' />
            <div className='flex flex-col justify-center p-8 w-full h-full bg-white'>
              <h1 className='font-fivo text-cblue text-2xl italic'>
                {data.Event.event_name}
              </h1>
              <h2 className='font-fivo text-cdark text-sm'>
                {formatLocale(toDate(data.Event.event_date), 'FULL')}
              </h2>
              <div className='flex flex-col gap-y-4 items-start mt-4 lg:flex-row lg:justify-between lg:items-center'>
                <UnstyledLink
                  className='bg-cblue font-fivo flex items-center px-6 py-1 text-xl font-bold rounded transition-all duration-100 hover:scale-105'
                  href={`/dashboard/history/${data.booking_id}`}
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
                  </span>
                  Details
                </UnstyledLink>
                <div className='ml-4 w-full leading-none'>
                  <h3 className='font-fivo text-cdark text-lg font-extrabold lg:text-xl'>
                    Status
                  </h3>
                  <p className='text-cdark'>
                    {data.booking_status
                      ? 'Payment Success'
                      : 'Waiting for Payment'}
                  </p>
                </div>
                <div className='flex flex-col items-end w-full leading-none'>
                  {!data.booking_status && (
                    <>
                      <h3 className='font-fivo text-cdark text-lg font-extrabold lg:text-xl'>
                        Payment Confirmation
                      </h3>
                      <Timer
                        endTime={data.booking_finish_time}
                        className='justify-start'
                      />
                    </>
                  )}
                </div>
              </div>
              <p className='mt-4 text-xs text-justify text-gray-400'>
                * Payment confirmation must be done within 3 hours in working
                hours (08.00-20.00 WIB). After 3 hours, the reservation
                we&apos;re holding will be released to others.
              </p>
            </div>
          </div>
        </div>
        <div className='flex relative w-0 overflow-clip lg:w-1/6'>
          <BlankRightTicket className='' />
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
      </div>
    </div>
  );
}

const TicketLeftComponent = ({
  pathClassName,
  ...props
}: { pathClassName?: string } & React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 42 298'
    {...props}
  >
    <path
      d='M1023.49 53.89v21.63h6.2v21.63h-6.2v21.63h6.2v21.63h-6.2v21.61h6.2v21.63h-6.2v21.63h6.2v21.63h-6.2v21.63h6.2v21.63h-6.2v10.34h2.42c-19 .59-34.19 9.11-35 19.72l-955.5-1.77c-.72-10.74-16.24-19.4-35.56-19.85L.33 21.73C20.18 21.34 36 12.28 36 1.15a4.1 4.1 0 0 0 0-.86l955.09 1.78c.73 10.62 15.87 19.19 34.88 19.85h-2.42v10.34h6.2v21.63Z'
      className={clsxm('fill-white', pathClassName)}
    />
  </svg>
);

const TicketRightComponent = ({
  pathClassName,
  ...props
}: { pathClassName?: string } & React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 42 298'
    {...props}
  >
    <path
      d='M35.76 51.64v21.64h6.2v21.63h-6.2v21.63h6.2v21.63H35.6v21.61h6.2v21.63h-6.2v21.63h6.2v21.63h-6.2v21.63h6v21.63h-6.25v10.34h2.42c-19 .58-34.18 9.1-34.95 19.72l-955.12-1.78c-.72-10.74-16.24-19.41-35.56-19.86l.48-256.87c19.85-.4 35.68-9.45 35.7-20.59a4.2 4.2 0 0 0-.06-.86L3.36-.17C4.08 10.44 19.23 19 38.24 19.68h-2.42L35.8 30H42v21.63Z'
      className={clsxm('fill-white', pathClassName)}
    />
  </svg>
);

export default Ticket;

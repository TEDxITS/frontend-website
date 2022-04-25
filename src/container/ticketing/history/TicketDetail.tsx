/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import toast from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

import { formatLocale, toDate } from '@/lib/date';

import NextImage from '@/components/NextImage';
import Timer from '@/components/Timer';

import { TicketResponse } from '@/types/api';

const formatEventType = (data: 'OFFLINE_NON_KIT' | 'OFFLINE_KIT' | string) => {
  if (data === 'OFFLINE_NON_KIT') {
    return 'Offline Main Event';
  } else if (data === 'OFFLINE_KIT') {
    return 'Offline Main Event with Additional Kit';
  } else return 's';
};

function TicketDetail({ data }: { data: TicketResponse }) {
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(`${data.booking_id}`);
    toast.success('Copied to clipboard');
  };
  return (
    <div className='text-cdark flex flex-col gap-4 items-center max-w-3xl'>
      <div>
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
        <div className='flex flex-col px-10 pt-10 pb-9 overflow-clip bg-white rounded-3xl drop-shadow'>
          <div className='text-cdark grid grid-cols-2 gap-x-2 gap-y-4'>
            <SectionHeader
              number='01'
              title='Payment Information'
              className='col-span-2'
            />
            <div className='text-cdark flex relative col-span-2 gap-1 items-center'>
              {data.booking_id}
              <MdContentCopy
                size={25}
                className='text-cdark cursor-pointer'
                onClick={copyToClipBoard}
              />
            </div>
            <p>Event Name</p>
            <p className='font-medium'>{data.Event.event_name}</p>
            <p>Status</p>
            <p className='font-medium'>
              {data.booking_status ? 'Payment Success' : 'Waiting for Payment'}
            </p>

            {!data.booking_status && (
              <div className='grid col-span-2 gap-x-2 gap-y-4 md:grid-cols-2'>
                <p>Confirmation Payment Until</p>
                <Timer
                  endTime={data.booking_finish_time}
                  className='justify-start'
                />
              </div>
            )}

            <SectionHeader
              number='02'
              title='Event Information'
              className='col-span-2'
            />
            <p>Event Name</p>
            <p className='font-medium'>{data.Event.event_name}</p>

            <p>Event Date</p>
            <p className='font-medium'>
              {formatLocale(toDate(data.Event.event_date), 'FULL')}
            </p>
            <SectionHeader
              number='03'
              title='Ticket Information'
              className='col-span-2'
            />
            <div className='bg-cgray bg-texture text-cdark col-span-2 px-2'>
              <p>{data.booking_name}</p>
              <p>{data.booking_address}</p>
              <p>{data.booking_telp}</p>
            </div>

            <p>Ticket Type</p>
            <p className='font-medium'>{data.PaymentType?.type}</p>
            <p>Package</p>
            <p className='font-medium'>
              {formatEventType(data.Event.event_type)}
            </p>
            <p>Price</p>
            <p className='font-medium'>Rp {data.PaymentType?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketDetail;

function SectionHeader({
  number,
  title,
  className,
}: {
  number: string;
  title: string;
  className: string;
}) {
  return (
    <div className={className}>
      <p className='text-cdark text-xl font-semibold'>
        <span className='font-sympath'>{number}</span>. {title}
      </p>
      <hr className='border-cdark' />
    </div>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import toast from 'react-hot-toast';
import { MdContentCopy } from 'react-icons/md';

import { formatLocale, toDate } from '@/lib/date';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
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
    <div className='flex flex-col gap-4 items-center max-w-3xl text-cdark'>
      <div>
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
        <div className='bg-white drop-shadow flex flex-col overflow-clip pb-9 pt-10 px-10 rounded-3xl'>
          <div className='gap-x-2 gap-y-4 grid grid-cols-2 text-cdark'>
            <SectionHeader
              number='01'
              title='Payment Information'
              className='col-span-2'
            />
            <div className='col-span-2 flex gap-1 items-center relative text-cdark'>
              {/* {data.booking_id} */}
              <MdContentCopy
                size={25}
                className='cursor-pointer text-cdark'
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
              <div className='col-span-2 gap-x-2 gap-y-4 grid md:grid-cols-2'>
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
            <div className='bg-cgray bg-texture col-span-2 px-2 text-cdark'>
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
          <div className='flex justify-end'>
            <div className='flex flex-col gap-y-2 items-end mt-8'>
              <UnstyledLink
                href={'https://page.line.me/193pbtpg'}
                className='animate-bounce bg-cred duration-75 flex font-bold font-fivo gap-4 items-center px-8 py-3 rounded-full text-center text-cgray text-lg transition-all hover:drop-shadow-xl hover:scale-105'
              >
                <NextImage
                  width={256}
                  height={256}
                  src='https://res.cloudinary.com/tedxits/image/upload/v1650892536/LINE_logo.svg_ub0rpu.png'
                  className='drop-shadow-lg w-6'
                  alt='Line'
                />
                Confirm Payment
              </UnstyledLink>
              <small className='text-cdark'>
                copy the payment detail text above and send it via chat to our
                admin
              </small>
              <div className='flex flex-wrap gap-2 items-center text-cdark'>
                <p>or confirm via</p>
                <UnderlineLink
                  className='text-cgreen'
                  href={`https://api.whatsapp.com/send/?phone=6281519457059&text=Halo! Aku mau konfirmasi pesanan tiket dengan kode unik: {data.booking_id}. Tolong diproses segera, ya!`}
                >
                  {'Whatsapp'}
                </UnderlineLink>
              </div>
            </div>
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
      <p className='font-semibold text-cdark text-xl'>
        <span className='font-sympath'>{number}</span>. {title}
      </p>
      <hr className='border-cdark' />
    </div>
  );
}

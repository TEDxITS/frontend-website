import React from 'react';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';

export default function CoverSection() {
  return (
    <>
      <div className='flex flex-col gap-4 justify-center'>
        <div>
          <NextImage
            src='/images/checkout-page/confirmation-page-title.svg'
            width={525}
            height={111.461}
            alt='checklist'
          />
        </div>
        <div className='flex justify-center'>
          <div className='bg-confirmationPage h-[34.71rem] w-[28.111rem] px-8 bg-no-repeat bg-contain'>
            <div className='h-[4.75rem] flex flex-col justify-end p-2 mt-6'>
              <h4 className='font-fivo text-cdark text-2xl font-bold'>
                Personal Information
              </h4>
            </div>
            <div className='flex flex-col justify-between p-2 h-40'>
              <div className='text-cdark text-sm'>
                <p>Isna Khoirun Nisa</p>
                <p>Jalan Jambu Utara No 18, Pondok Chandra, Sidoarjo</p>
                <p>isnakn123@gmail.com</p>
                <p>(+62)896719282</p>
              </div>
              <h4 className='font-fivo text-cdark text-2xl font-bold'>
                Payment Total
              </h4>
            </div>
            <div className='h-[5.75rem] flex flex-col justify-between p-2'>
              <h4 className='font-fivo text-cdark text-4xl font-bold'>
                Rp 250.000,00
              </h4>
              <h4 className='font-fivo text-cdark text-2xl font-bold'>
                Payment
              </h4>
            </div>
            <div className='p-2 h-44'>
              <div className='flex relative justify-center mx-0 mt-4 sm:mx-24'>
                <Button type='button'>Confirm Payment</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

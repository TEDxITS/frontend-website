/* eslint-disable @next/next/no-img-element */
import React from 'react';

import clsxm from '@/lib/clsxm';

import DrawBottomLeft from '@/assets/svg/DrawBottomLeft';
import DrawBottomRight from '@/assets/svg/DrawBottomRight';
import DrawTopLeft from '@/assets/svg/DrawTopLeft';
import DrawTopRight from '@/assets/svg/DrawTopRight';
import TicketCircle from '@/assets/svg/TicketCircle';
import TicketText from '@/assets/svg/TicketText';

type TicketProps = {
  isTicketOpen: boolean;
  showRegister: () => void;
  hideRegister: () => void;
};

export default function Ticket({
  isTicketOpen,
  showRegister,
  hideRegister,
}: TicketProps) {
  const toggleRegister = () => {
    isTicketOpen ? hideRegister() : showRegister();
  };
  return (
    <div className={clsxm('relative w-full')}>
      <div
        onClick={toggleRegister}
        className='from-cdark/30 absolute top-0 z-20 w-full h-4 bg-gradient-to-b to-transparent'
      >
        &nbsp;
      </div>
      <div className='flex absolute top-1/2 left-1/2 flex-col justify-center items-center w-full -translate-x-1/2 -translate-y-1/2'>
        <p className='font-fivo z-10 font-medium text-center'>
          Click the Ticket above! <br /> and reveal yours
        </p>
        <TicketCircle className='absolute left-1/2 max-w-xs -translate-x-1/2' />
      </div>
      <div
        onClick={toggleRegister}
        className={clsxm(
          'relative transition-all duration-150 ease-in-out cursor-pointer',
          [
            isTicketOpen
              ? 'translate-y-0 hover:cursor-register'
              : '-translate-y-[calc(100%-5rem)] hover:cursor-click',
          ]
        )}
      >
        <div className='flex relative flex-col pb-2 drop-shadow-lg'>
          <div className='/ bg-cgray flex z-10 flex-col gap-4 items-center px-8 pt-8 pb-1 -mb-1'>
            <img src='/svg/tedx-logo.svg' alt='TedxITS logo' className='h-10' />
            <svg viewBox='0 0 498.33 2.18'>
              <path
                d='M489.87 1.17L5.98 1'
                fill='none'
                stroke='#231f20'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='2px'
                strokeDasharray='5'
              />
            </svg>
            <div className='relative p-2 w-full'>
              <DrawBottomLeft className='/ left-[20%] absolute bottom-0 w-8' />
              <DrawBottomRight className='/ right-[20%] absolute bottom-0 w-8' />
              <DrawTopLeft className='/ left-[20%] absolute top-0 w-8' />
              <DrawTopRight className='/ right-[20%] absolute top-0 w-8' />
              <img
                src='/svg/bottom-center.svg'
                alt=''
                className='absolute bottom-0 left-1/2 w-10 -translate-x-1/2'
              />
              <TicketText className='/ drop-shadow-solid-md z-10 w-full' />
            </div>

            <div id='register'>
              <p className='/ font-fivo text-cdark font-medium leading-tight text-center'>
                The wait is over.
                <br />
                TEDxITS is opening volunteer applications for passionate and
                open-minded individuals who are full of ideas.
              </p>
            </div>
            <svg viewBox='0 0 498.33 2.18'>
              <path
                d='M489.87 1.17L5.98 1'
                fill='none'
                stroke='#231f20'
                strokeLinecap='round'
                strokeMiterlimit='10'
                strokeWidth='2px'
                strokeDasharray='5'
              />
            </svg>
            <img src='/svg/barcode.svg' alt='barcode' className='mt-4 w-56' />
            <p
              id='prompt'
              className='/ font-fivo text-cdark mt-2 text-xs font-medium text-center'
            >
              Are you the person we are looking for?
            </p>
          </div>
          <img src='/svg/ticket-bottom.svg' alt='' className='z-20 w-full' />
        </div>
      </div>
    </div>
  );
}

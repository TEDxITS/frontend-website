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
              <DrawBottomLeft className='absolute bottom-0 left-0 w-8' />
              <DrawBottomRight className='absolute right-0 bottom-0 w-8' />
              <DrawTopLeft className='absolute top-0 left-0 w-8' />
              <DrawTopRight className='absolute top-0 right-0 w-8' />
              <img
                src='/svg/bottom-center.svg'
                alt=''
                className='absolute bottom-0 left-1/2 w-10 -translate-x-1/2'
              />
              <TicketText className='drop-shadow-solid-md z-10 mx-auto w-5/6' />
            </div>

            <div id='register'>
              <p className='font-fivo text-cdark font-medium leading-tight text-center'>
                The wait is over.
                <br />
                TEDxITS is opening volunteer application for passionate and
                open-minded individuals who are full of ideas
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
          <svg
            className='w-full'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 559.97 50'
          >
            <defs>
              <clipPath id='a'>
                <path
                  style={{
                    fill: 'none',
                  }}
                  d='M-.02 0h560v50h-560z'
                />
              </clipPath>
            </defs>
            <g
              style={{
                clipPath: 'url(#a)',
              }}
            >
              <path
                d='M560-641.5v-.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.86 18.86 0 0 1-17 12 19 19 0 0 1-18-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.85 18.85 0 0 1-18 12 18.86 18.86 0 0 1-17-12v-.5a17.55 17.55 0 0 0-17-17.5h-.5a17.46 17.46 0 0 0-17.5 17.5v.5a18.86 18.86 0 0 1-17 12 19 19 0 0 1-18-12v-.5A17.55 17.55 0 0 0 70-642h-.5A17.46 17.46 0 0 0 52-624.5v.5a18.86 18.86 0 0 1-17 12 19 19 0 0 1-18-12v-.5A17.55 17.55 0 0 0 0-642V50a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5A17.46 17.46 0 0 0 69.48 50H70a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5A17.46 17.46 0 0 0 139.48 50h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5a17.55 17.55 0 0 0 17-17.5V32a18.76 18.76 0 0 1 35 0v.5a17.46 17.46 0 0 0 17.5 17.5h.5v-691.5Z'
                style={{
                  fill: '#efedea',
                }}
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

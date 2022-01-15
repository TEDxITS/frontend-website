/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';

import Button from '@/components/buttons/Button';

import Ticket from './Ticket';

export default function RegisterSection() {
  const [isTicketOpen, setIsTicketOpen] = React.useState<boolean>(false);
  const [isTicketClick, setIsTicketClick] = React.useState<boolean>(false);

  const showRegister = () => {
    setIsTicketOpen(true);
    setIsTicketClick(true);
  };
  const hideRegister = () => {
    setIsTicketOpen(false);
  };

  return (
    <>
      <div className='relative z-10 w-full max-w-xl'>
        <svg className='-mb-[2%] / drop-shadow-md' viewBox='0 0 769.2 45.2'>
          <rect
            width='757'
            height='43'
            x='5.02'
            y='0'
            className='fill-cblue'
            rx='21.5'
          />
          <rect
            width='680'
            height='17'
            x='43.52'
            y='13'
            className='fill-cdark'
            rx='8.5'
          />
        </svg>
        <div
          className='relative w-full'
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <div className='relative mx-auto w-5/6'>
            <Ticket
              isTicketOpen={isTicketOpen}
              showRegister={showRegister}
              hideRegister={hideRegister}
            />
          </div>
        </div>
      </div>
      {isTicketOpen && (
        <motion.div
          initial={{
            y: -60,
          }}
          animate={{
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
            },
          }}
          className='flex flex-col mt-4'
        >
          <Button variant='secondary' className='z-10'>
            Register Now
          </Button>
        </motion.div>
      )}
      {isTicketClick && (
        <img
          src='/svg/pink-splash.svg'
          alt='pink splash'
          className='absolute inset-0 z-0 lg:top-0'
        />
      )}
    </>
  );
}

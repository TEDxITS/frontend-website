import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';

import PositionCircle from '@/assets/svg/PositionCircle';

export default function CoverSection() {
  return (
    <div className='overflow-hidden relative md:min-h-main'>
      <div className='grid-cols layout min-h-[calc(100vh-64px)] grid relative lg:min-h-main'>
        <div className='flex gap-4 justify-center items-center mt-8 text-center lg:items-center lg:mt-0'>
          <div>
            <div className='flex relative justify-center'>
              <PositionCircle className='absolute -translate-y-1/2' />
              <h1 className='z-10'>
                <span className='font-sympath font-normal'>P</span>O
                <span className='font-sympath font-normal'>S</span>ITI
                <span className='font-sympath font-normal'>O</span>N{' '}
                <span className='font-sympath font-normal'>O</span>P
                <span className='font-sympath font-normal'>E</span>N
              </h1>
            </div>
            <p className='mt-16 max-w-lg'>
              Get to know the suited position for you!
            </p>
          </div>
        </div>
        {/* Absolute item */}
        <small className='font-fivo absolute left-0 bottom-20 text-sm md:bottom-32'>
          <span className='font-black'>TED</span>
          <span className='font-extrabold'>x</span>
          <span className='font-bold'>ITS</span>
        </small>
        <small className='font-fivo absolute right-0 bottom-20 text-sm font-normal md:bottom-32'>
          © 2022
        </small>
        <ArrowDownButton
          className='absolute bottom-20 left-1/2 -translate-x-1/2 md:bottom-32'
          href={'#position'}
        />
      </div>
    </div>
  );
}

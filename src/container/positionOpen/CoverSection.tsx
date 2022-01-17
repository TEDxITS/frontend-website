import Image from 'next/image';
import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';

export default function CoverSection() {
  return (
    <div className='overflow-hidden relative md:min-h-main'>
      <div className='grid-cols layout min-h-[calc(100vh-64px)] grid relative lg:min-h-main'>
        <div className='flex gap-4 justify-center items-center mt-8 text-center lg:items-center lg:mt-0'>
          <div className='absolute z-10 -translate-y-20'>
            <Image src='/images/Asset 7.svg' alt='' width={605} height={159} />
          </div>
          <div>
            <h1>
              <span className='font-sympath'>P</span>O
              <span className='font-sympath'>S</span>ITI
              <span className='font-sympath'>O</span>N{' '}
              <span className='font-sympath'>O</span>P
              <span className='font-sympath'>E</span>N
            </h1>
            <p className='content mt-20 md:w-[36rem]'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volut.
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
          href={'#about'}
        />
      </div>
    </div>
  );
}

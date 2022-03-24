import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import NextImage from '@/components/NextImage';

export default function CompleteSection() {
  return (
    <div className='text-cdark flex z-10 flex-col items-center'>
      <NextImage
        width={287.63}
        height={275.9}
        src='/svg/elephant-black.svg'
        alt={`Black elephant logo`}
        className='max-w-[128px] w-full drop-shadow-lg'
      />
      <h2 className='font text-cdark mt-8 text-lg font-bold drop-shadow-lg xl:text-xl 2xl:text-3xl'>
        T<span className='font-sympath'>h</span>ank{' '}
        <span className='font-sympath'>Y</span>ou
      </h2>
      <p className='text-xl font-medium drop-shadow-lg'>
        For Sharing Your Experience
      </p>
      <p className='mt-[30%] font-medium drop-shadow-lg'>
        Previous Black Elephant Mails :
      </p>
      <ArrowDownButton
        iconClassName='drop-shadow-lg text-cdark hover:border-cdark mt-4'
        href={'#mail'}
      />
    </div>
  );
}

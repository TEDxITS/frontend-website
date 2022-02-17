import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import NextImage from '@/components/NextImage';

import MerchPageCarousel from './MerchPageCarousel';

export default function CoverSection() {
  return (
    <div className='bg-cgray min-h-screen overflow-hidden relative z-40'>
      <NextImage
        src='/images/po-merch-bg.svg'
        width={800}
        height={369}
        alt='bg'
        priority={true}
        quality={100}
        className='-translate-x-[34rem] absolute bottom-[50%] left-[50%] scale-100 translate-y-[9.5rem] md:translate-y-[4rem] lg:-translate-x-[38rem] lg:scale-150'
      />
      <NextImage
        src='/images/po-merch-cover2.svg'
        width={174}
        height={181}
        alt='bg'
        priority={true}
        quality={100}
        className='-translate-x-[3rem] -translate-y-[9rem] absolute bottom-[50%] left-[50%] scale-[.3] z-50 sm:-translate-x-[2.5rem] sm:-translate-y-[11.5rem] md:-translate-x-[.5rem] md:-translate-y-[12.5rem] lg:-translate-y-[12.5rem]'
      />
      <div className='grid grid-cols layout min-h-[calc(100vh-64px)] relative text-cdark z-10'>
        <small className='absolute font-fivo left-0 text-sm top-8 md:top-16'>
          Pre-Order
        </small>
        <small className='absolute font-fivo right-0 text-sm top-8 md:top-16'>
          Merch 1.0
        </small>
        <div className='flex flex-col gap-4 items-center justify-center text-center lg:mt-0'>
          <div className='flex flex-row'>
            <h1 className='text-cdark'>
              ARC<span className='font-normal font-pilow'>A</span>NE
            </h1>
            <h1 className='italic ml-6 text-3xl text-cblue sm:ml-11'>Secret</h1>
          </div>
          <MerchPageCarousel className='w-[14rem] sm:w-[20rem]' />
          <ArrowDownButton
            iconClassName='text-cdark hover:border-cdark mt-4'
            href={'#products'}
          />
        </div>
        {/* Absolute item */}
        <small className='absolute bottom-8 font-fivo left-0 text-sm md:bottom-16'>
          Arcane
        </small>
        <small className='absolute bottom-8 font-fivo font-normal right-0 text-sm md:bottom-16'>
          Secret
        </small>
      </div>
    </div>
  );
}

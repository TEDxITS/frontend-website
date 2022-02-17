import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import NextImage from '@/components/NextImage';

import MerchPageCarousel from './MerchPageCarousel';

export default function CoverSection() {
  return (
    <div className='bg-cgray overflow-hidden relative z-40 min-h-screen'>
      <NextImage
        src='/images/po-merch-bg.svg'
        width={800}
        height={369}
        alt='bg'
        priority={true}
        quality={100}
        className='-translate-x-[34rem] bottom-[50%] left-[50%] translate-y-[9.5rem] absolute scale-100 md:translate-y-[4rem] lg:-translate-x-[38rem] lg:scale-150'
      />
      <NextImage
        src='/images/po-merch-cover2.svg'
        width={174}
        height={181}
        alt='bg'
        priority={true}
        quality={100}
        className='-translate-x-[3rem] -translate-y-[9rem] bottom-[50%] left-[50%] scale-[.3] absolute z-50 sm:-translate-x-[2.5rem] sm:-translate-y-[11.5rem] md:-translate-x-[.5rem] md:-translate-y-[12.5rem] lg:-translate-y-[12.5rem]'
      />
      <div className='grid-cols layout min-h-[calc(100vh-64px)] text-cdark grid relative z-10'>
        <small className='font-fivo absolute left-0 top-8 text-sm md:top-16'>
          Pre-Order
        </small>
        <small className='font-fivo absolute right-0 top-8 text-sm md:top-16'>
          Merch 1.0
        </small>
        <div className='flex flex-col justify-center items-center text-center lg:mt-0'>
          <div className='flex flex-row'>
            <h1 className='text-cdark'>
              ARC<span className='font-pilow font-normal'>A</span>NE
            </h1>
            <h1 className='text-cblue ml-6 text-3xl italic sm:ml-11'>Secret</h1>
          </div>
          <MerchPageCarousel className='w-[14rem] mt-16 sm:w-[20rem]' />
          <ArrowDownButton
            iconClassName='text-cdark hover:border-cdark mt-4'
            href={'#products'}
          />
        </div>
        {/* Absolute item */}
        <small className='font-fivo absolute left-0 bottom-8 text-sm md:bottom-16'>
          Arcane
        </small>
        <small className='font-fivo absolute right-0 bottom-8 text-sm font-normal md:bottom-16'>
          Secret
        </small>
      </div>
    </div>
  );
}

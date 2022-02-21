import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import NextImage from '@/components/NextImage';

import MerchPageCarousel from './MerchPageCarousel';

export default function CoverSection() {
  return (
    <div className='bg-cgray overflow-hidden relative z-40 min-h-screen'>
      <NextImage
        src='/images/background/bg-merch-draw.png'
        width={589}
        height={409}
        alt='bg'
        priority={true}
        quality={100}
        className='bottom-[50%] left-[50%] absolute -translate-x-1/2 translate-y-1/4'
      />

      <div className='grid-cols layout min-h-[calc(100vh-64px)] text-cdark grid relative'>
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
            <h1 className='text-cblue relative pl-6 text-3xl italic sm:pl-9'>
              Secret
              <NextImage
                src='/svg/sticker-plain-red.svg'
                width={174}
                height={181}
                alt='stickers red'
                priority={true}
                quality={100}
                className='animate-[spin_10s_ease_infinite] absolute bottom-2 left-2 z-10 w-6 sm:left-6 sm:w-8'
              />
            </h1>
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

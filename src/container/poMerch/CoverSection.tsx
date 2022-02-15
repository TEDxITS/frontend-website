import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import NextImage from '@/components/NextImage';

import DynamicCarousel from './DynamicCarousel';

export default function CoverSection() {
  return (
    <div className='bg-cgray overflow-hidden relative z-40 md:min-h-main'>
      <NextImage
        src='/images/po-merch-bg.svg'
        width={800}
        height={369}
        alt='bg'
        priority={true}
        quality={100}
        className='-translate-x-[34rem] bottom-[50%] left-[50%] translate-y-[8rem] absolute scale-100 md:translate-y-[7rem] lg:-translate-x-[38rem] lg:scale-150'
      />
      <NextImage
        src='/images/po-merch-cover2.svg'
        width={174}
        height={181}
        alt='bg'
        priority={true}
        quality={100}
        className='-translate-x-[2rem] -translate-y-[8.5rem] bottom-[50%] left-[50%] scale-[.3] absolute z-50 md:-translate-x-[.5rem] md:-translate-y-[10.5rem] lg:-translate-y-[11rem]'
      />
      <NextImage
        src='/images/po-merch-cover.svg'
        width={32}
        height={30}
        alt='bg'
        priority={true}
        className='-translate-x-[10rem] bottom-[50%] left-[50%] translate-y-[9rem] absolute md:-translate-x-[12.5rem] md:translate-y-[8rem] lg:translate-y-[7rem]'
      />
      <div className='grid-cols layout min-h-[calc(100vh-64px-32px)] text-cdark grid relative z-10 lg:min-h-[calc(100vh-64px-64px)]'>
        <small className='font-fivo absolute left-0 top-8 text-sm md:top-16'>
          Pre-Order
        </small>
        <small className='font-fivo absolute right-0 top-8 text-sm md:top-16'>
          Merch 1.0
        </small>
        <div className='flex flex-col gap-4 justify-center items-center text-center lg:mt-0'>
          <div className='flex flex-row'>
            <h1 className='text-cdark'>
              ARC<span className='font-pilow font-normal'>A</span>NE
            </h1>
            <h1 className='text-cblue ml-11 text-3xl italic'>Secret</h1>
          </div>
          <div className='grid my-4'>
            <DynamicCarousel className='min-h-[15rem] min-w-[80vw] overflow-x-hidden overflow-y-visible z-10 p-0 h-full lg:min-w-[40rem] 2xl:min-w-[70rem]' />
          </div>
          <h1 className='text-cdark'>
            R<span className='font-pilow font-normal'>E</span>D BUNDLE
          </h1>
          <h4 className='text-cdark mt-2 max-w-lg'>
            Health Protocol is a Must!
          </h4>
        </div>
        {/* Absolute item */}
        <small className='font-fivo absolute left-0 bottom-8 text-sm md:bottom-16'>
          Arcane
        </small>
        <small className='font-fivo absolute right-0 bottom-8 text-sm font-normal md:bottom-16'>
          Secret
        </small>
        <ArrowDownButton
          className='absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16'
          iconClassName='text-cdark hover:border-cdark'
          href={'#products'}
        />
      </div>
    </div>
  );
}

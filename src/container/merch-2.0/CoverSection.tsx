import React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import CoverPageCarousel from './CoverPageCarousel';

export default function CoverSection() {
  return (
    <div className='bg-cgray overflow-hidden relative z-30'>
      <NextImage
        src='/images/forgot-password/float.png'
        width={365}
        height={402}
        alt='float'
        className='absolute top-0 left-0 w-full -translate-x-1/4 pointer-events-none md:w-1/3'
      />
      <div className='min-h-[calc(100vh-64px-64px)] text-cdark flex relative flex-col gap-4 justify-between py-8 md:gap-0 md:py-16'>
        <div className='layout flex justify-between'>
          <small className='font-fivo text-sm'>Pre-Order</small>
          <small className='font-fivo text-sm'>Merch 2.0</small>
        </div>
        <div className='flex flex-col justify-center items-center h-full text-center'>
          <div className='layout flex flex-col justify-center items-center'>
            <div className='flex flex-col md:flex-row'>
              <h1 className='text-cdark'>
                ARC<span className='font-pilow font-normal'>A</span>NE
              </h1>
              <h1 className='text-cblue relative pl-6 text-xl italic sm:pl-9 md:text-3xl'>
                Beyond the Curtain
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
          </div>

          <h4 className='font-fivo text-cdark'>
            <span className='animate-flicker text-cred'>T</span>imeless,{' '}
            <span className='animate-flicker text-cred'>E</span>levate,{' '}
            <span className='animate-flicker text-cred'>D</span>aring
          </h4>
          <UnstyledLink
            href={'#products'}
            className='aspect-h-6 aspect-w-16 font-fivo text-cdark overflow-hidden relative -mb-12 w-full bg-fixed bg-center bg-no-repeat bg-cover md:aspect-h-3 md:mt-8'
            style={{
              backgroundImage:
                'url(https://res.cloudinary.com/tedxits/image/upload/v1652964414/merch/merch-cover.jpg)',
            }}
          >
            <div className='bg-cdark/30 flex flex-col justify-end items-center pb-16'>
              <h3 className='font-fivo text-clight font-black'>
                SH<span className='font-pilow font-normal'>O</span>P ALL!
              </h3>
            </div>
          </UnstyledLink>
          <CoverPageCarousel />
        </div>

        <div className='layout flex justify-between'>
          <small className='font-fivo text-sm'>Arcane</small>
          <small className='font-fivo text-sm font-normal'>
            Beyond the Curtain
          </small>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import NextImage from '@/components/NextImage';

export default function EndSection() {
  return (
    <div className='font-fivo layout text-cdark flex flex-col gap-8 justify-center py-8 md:py-16'>
      <NextImage
        width={48}
        height={52}
        alt='flower'
        className='mx-auto w-6'
        src='https://res.cloudinary.com/tedxits/image/upload/v1656926112/merch/main-event/end/flower-black_x1jbha.svg'
      />
      <div className='border-cdark divide-cdark flex flex-col border-t-2'>
        <Parallax translateX={['-100px', '100px']}>
          <div className='flex gap-4 justify-center items-center py-4'>
            <h1 className='text-cred font-normal tracking-tighter md:text-8xl'>
              ALTHOUGH
            </h1>
            <NextImage
              width={577}
              height={322}
              src='https://res.cloudinary.com/tedxits/image/upload/v1656926179/merch/main-event/end/Asset_40-80_rif8lv.jpg'
              alt='Group Photo'
              className='overflow-hidden w-16 rounded-full shadow-inner md:w-36'
              useSkeleton
            />
            <h1 className='text-cred font-normal tracking-tighter md:text-8xl'>
              THE
            </h1>
          </div>
        </Parallax>
        <hr className='border-cdark border' />
        <Parallax translateX={['100px', '-100px']}>
          <div className='flex gap-4 justify-center items-center py-4'>
            <NextImage
              width={577}
              height={322}
              src='https://res.cloudinary.com/tedxits/image/upload/v1656926180/merch/main-event/end/Asset_41-80_l2pzdt.jpg'
              alt='Group Photo'
              className='overflow-hidden w-12 rounded-full shadow-inner md:w-36'
              useSkeleton
            />
            <h1 className='text-cred font-normal tracking-tighter whitespace-nowrap md:text-8xl'>
              DEED IS DONE,
            </h1>
          </div>
        </Parallax>
        <hr className='border-cdark border' />
        <Parallax translateX={['-200px', '200px']}>
          <div className='flex gap-4 items-center py-4'>
            <h1 className='text-cred font-normal tracking-tighter whitespace-nowrap md:text-8xl'>
              THE STORY
            </h1>
            <NextImage
              width={494}
              height={330}
              src='https://res.cloudinary.com/tedxits/image/upload/v1656931121/merch/main-event/end/Asset_46-100_cifdkr.jpg'
              alt='Group Photo'
              className='overflow-hidden w-10 rounded-full shadow-inner md:w-36'
              useSkeleton
            />
          </div>
        </Parallax>
        <hr className='border-cdark border' />
        <Parallax translateX={['200px', '-200px']}>
          <div className='flex gap-4 justify-end items-center py-4'>
            <h1 className='text-cred font-normal tracking-tighter md:text-8xl'>
              REMAINS
            </h1>
            <NextImage
              width={491}
              height={329}
              src='https://res.cloudinary.com/tedxits/image/upload/v1656926180/merch/main-event/end/Asset_43-80_nujaso.jpg'
              alt='Group Photo'
              className='overflow-hidden w-12 rounded-full shadow-inner md:w-36'
              useSkeleton
            />
          </div>
        </Parallax>
        <hr className='border-cdark border' />
      </div>
    </div>
  );
}

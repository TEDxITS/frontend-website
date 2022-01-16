import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import Button from '@/components/buttons/Button';

import DynamicCarousel from './DynamicCarousel';
import HomePageCarousel from './HomePageCarousel';

export default function CoverSection() {
  return (
    <div className='overflow-hidden relative md:min-h-main'>
      <div className='grid-cols layout min-h-[calc(100vh-64px-40px)] grid relative lg:min-h-main lg:grid-cols-2'>
        <DynamicCarousel className='min-h-[30vh] block h-full lg:hidden' />
        <div className='flex flex-col gap-4 items-center mt-8 text-center lg:justify-center lg:items-start lg:mt-0 lg:text-left'>
          <h1>
            TEDxITS is on!
            <br />
            <span className='text-2xl font-extrabold md:text-3xl'>
              Time to see the unseen
            </span>
          </h1>
          <h2 className='font-fivo text-cgray/80 text-sm font-normal leading-none md:text-xl'>
            Feel the eye-opening experience by exploring novel ideas and unseen
            perspectives through meaningful interaction.
          </h2>
          <div className='mt-4 lg:mt-2'>
            <Button variant='primary' className='text-md md:text-xl'>
              TEDxITS 2021 story
            </Button>
          </div>
        </div>
        <HomePageCarousel className='hidden lg:block' />
        {/* Absolute item */}
        <small className='font-fivo absolute bottom-0 left-0 text-sm'>
          <span className='font-black'>TED</span>
          <span className='font-extrabold'>x</span>
          <span className='font-bold'>ITS</span>
        </small>
        <small className='font-fivo absolute right-0 bottom-0 text-sm font-normal'>
          © 2022
        </small>
        <ArrowDownButton
          className='absolute bottom-0 left-1/2 -translate-x-1/2'
          href={'#about'}
        />
      </div>
    </div>
  );
}

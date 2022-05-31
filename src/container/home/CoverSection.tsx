import React from 'react';

import { pre_event_3_data } from '@/data/event';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import ButtonLink from '@/components/links/ButtonLink';

import DynamicCarousel from './DynamicCarousel';
import HomePageCarousel from './HomePageCarousel';

export default function CoverSection() {
  return (
    <div className='overflow-hidden relative z-20'>
      <div className='grid grid-cols layout min-h-[calc(100vh-64px-32px)] relative lg:grid-cols-2 lg:min-h-[calc(100vh-64px-64px)]'>
        <DynamicCarousel className='block h-full min-h-[30vh] lg:hidden' />
        <div className='flex flex-col gap-4 items-center mt-8 text-center lg:items-start lg:justify-center lg:mt-0 lg:text-left'>
          {/* <h1>
            TEDxITS is on!
            <br />
            <span className='text-2xl font-extrabold md:text-3xl'>
              Time to see the unseen
            </span>
          </h1>
          <h2 className='font-fivo text-cgray/80 text-sm font-normal leading-none md:text-xl'>
            Feel the eye-opening experience by exploring novel ideas and unseen
            perspectives through meaningful interaction.
          </h2> */}

          <div className='flex flex-col md:gap-4'>
            <h2 className='font-fivo'>{pre_event_3_data.subTitle}</h2>
            <h1 className='font-bold font-fivo mt-2'>
              {pre_event_3_data.title}
            </h1>
            <p className='text-lg'>
              The terrifying backspace that hides undelivered messages is
              crashed.
            </p>
          </div>

          {/* end */}
          <div className='mt-2 lg:mt-4'>
            <ButtonLink
              variant='primary'
              className='text-md md:text-xl'
              href='/pre-events'
            >
              Discover
            </ButtonLink>
          </div>
        </div>
        <div className='hidden my-auto lg:block'>
          <HomePageCarousel />
        </div>
        {/* Absolute item */}
        <small className='absolute bottom-0 font-fivo left-0 text-sm'>
          <span className='font-black'>TED</span>
          <span className='font-extrabold'>x</span>
          <span className='font-bold'>ITS</span>
        </small>
        <small className='absolute bottom-0 font-fivo font-normal right-0 text-sm'>
          © 2022
        </small>
        <ArrowDownButton
          className='-translate-x-1/2 absolute bottom-0 left-1/2'
          href={'#about'}
        />
      </div>
    </div>
  );
}

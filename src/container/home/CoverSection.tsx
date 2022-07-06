import React from 'react';

import ArrowDownButton from '@/components/buttons/ArrowDownButton';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

import DynamicCarousel from './DynamicCarousel';
import HomePageCarousel from './HomePageCarousel';

export default function CoverSection() {
  return (
    <div className='overflow-hidden relative z-20'>
      <div className='grid-cols layout min-h-[calc(100vh-64px-32px)] grid relative lg:min-h-[calc(100vh-64px-64px)] lg:grid-cols-2'>
        <DynamicCarousel className='min-h-[30vh] block h-full lg:hidden' />
        <div className='flex flex-col gap-4 items-center mt-8 text-center lg:justify-center lg:items-start lg:mt-0 lg:text-left'>
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
          <div className='flex flex-col gap-4 items-center w-full md:items-start'>
            <NextImage
              width={439}
              height={228}
              alt='Main Event Text'
              className='w-[70%] md:max-w-xs'
              src='https://res.cloudinary.com/tedxits/image/upload/v1656570975/merch/main-event/landing-page/main-event-text_wsiyh5.svg'
              priority
              useSkeleton
            />
            <div className='flex items-start mt-auto md:flex-col'>
              <p className='leading-none'>
                <span className='font-pilow'>19</span> of
              </p>
              <p className='ml-2 leading-none md:ml-4'>
                June <span className='font-pilow'>2022</span>.
              </p>
            </div>

            <p className='max-w-sm text-sm'>
              Feel the eye-opening experience by exploring novel ideas and
              unseen perspectives through meaningful interaction.
            </p>
          </div>

          {/* end */}
          <div className='mt-2 lg:mt-4'>
            <ButtonLink
              variant='primary'
              className='text-md md:text-xl'
              href='/main-event'
            >
              Discover
            </ButtonLink>
          </div>
        </div>
        <div className='hidden my-auto lg:block'>
          <HomePageCarousel />
        </div>
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

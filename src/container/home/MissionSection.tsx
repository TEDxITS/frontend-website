/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import NextImage from '@/components/NextImage';

import StoryBlobIllustration from '@/assets/svg/StoryBlobIllustration';
import StoryBlobIllustrationMobile from '@/assets/svg/StoryBlobIllustrationMobile';

export default function MissionSection() {
  return (
    <Parallax
      y={[-10, 10]}
      tagOuter='figure'
      className='flex relative flex-col'
    >
      <StoryBlobIllustration className='hidden absolute inset-0 z-10 w-full lg:block' />
      <StoryBlobIllustrationMobile className='block absolute inset-0 z-10 w-full lg:hidden' />
      <div className='bg-story-mobile flex overflow-hidden z-20 pt-20 w-full bg-bottom bg-no-repeat bg-cover md:bg-story-desktop lg:pt-44'>
        <div className='layout min-h-main flex flex-col justify-center items-center h-full text-center lg:min-h-[50vh] lg:px-32'>
          <h1 className='font-bold text-black' id='about'>
            WH<span className='font-sympath font-normal'>A</span>TS ON TED
            <span className='font-sympath font-normal'>x</span>ITS 2022?{' '}
            <span className='font-sympath font-normal'>?</span>
          </h1>
          <p className='text-cdark mt-4 text-sm md:text-lg'>
            This year’s mission is to give something fresh, wild, and out-of-the
            box through eye-opening storytelling. We value everyone’s ideas and
            story. It’s been years, we stay quiet because we fear visibility and
            vulnerability that brings. But now, we’ll find strength in words,
            impacting not only students and youths, but also the community in
            ITS and Surabaya. We aim to bloom intrinsic motivation and immense
            sense of pride in its members for being a part of TEDxITS 2022 and
            sharing its value.
          </p>
        </div>
      </div>
      <NextImage
        src='/images/background/bg-story-bottom-desktop.png'
        width={1275}
        height={95}
        alt='bottom'
        priority={true}
        className='translate-y-[99%] hidden absolute bottom-0 z-0 w-full lg:block'
      />
      <NextImage
        src='/images/background/bg-story-bottom-mobile.png'
        width={2549}
        height={452}
        alt='bottom'
        priority={true}
        className='translate-y-[99%] block absolute bottom-0 z-0 w-full lg:hidden'
      />
    </Parallax>
  );
}

import React from 'react';

import NextImage from '@/components/NextImage';

import MeetTheTeamTitle from '@/assets/svg/MeetTheTeamTitle';

export default function MissionSection() {
  return (
    <>
      <NextImage
        src='/images/meet-the-team/foot-transparent.png'
        width={489}
        height={489}
        alt='bg'
        priority={true}
        className='absolute right-0 z-0 brightness-0 translate-y-12 sm:translate-y-80'
      />
      <div
        className='layout flex relative flex-col justify-center items-center my-16 text-center'
        id='members'
      >
        <NextImage
          src='/images/meet-the-team/meet-the-team-blue-rect.png'
          width={12}
          height={12}
          alt='bg'
          className='absolute left-0 top-2 z-0'
        />
        <NextImage
          src='/images/meet-the-team/meet-the-team-blue-rect.png'
          width={12}
          height={12}
          alt='bg'
          className='absolute right-0 top-2 z-0'
        />
        <NextImage
          src='/images/meet-the-team/meet-the-team-blue-rect.png'
          width={12}
          height={12}
          alt='bg'
          className='absolute left-0 z-0 -translate-y-40 sm:-translate-y-32 lg:-translate-y-36 xl:-translate-y-48'
        />
        <NextImage
          src='/images/meet-the-team/meet-the-team-blue-rect.png'
          width={12}
          height={12}
          alt='bg'
          className='absolute right-0 z-0 -translate-y-40 sm:-translate-y-32 lg:-translate-y-36 xl:-translate-y-48'
        />
        <div className='layout flex z-10 flex-col justify-center items-center'>
          <div className='w-full'>
            <h1 className='text-cblue font-medium'>MEET THE</h1>
            <MeetTheTeamTitle />
          </div>
          <small className='font-fivo text-cblue translate-y-[1rem] absolute left-0 text-sm md:translate-y-0'>
            <div className='leading-tigh w-[32px] break-words sm:w-full'>
              TEDxITS
            </div>
          </small>
          <small className='font-fivo leading-tigh text-cblue translate-y-[1rem] absolute right-0 text-sm md:translate-y-0'>
            2022
          </small>
          <small className='font-fivo mt-[-2.5rem] text-cblue inset-x-0 z-30 text-sm translate-y-6'>
            <div className='w-64 text-xs leading-tight'>
              Who try their best to listen to the unheard, see the unseen, and
              speak the unspeakable.
            </div>
          </small>
        </div>
        <div className='layout flex z-0 flex-col justify-center items-center'>
          <NextImage
            src='/images/meet-the-team/blur.png'
            width={1150}
            height={469}
            alt='bg'
            className='mt-20 w-full xl:w-[1150px]'
          />
          <NextImage
            src='/images/meet-the-team/yellow-circle.png'
            width={190}
            height={190}
            alt='bg'
            className='h-[100px] w-[60px] inset-x-0 z-10 -translate-y-6 md:w-[100px] md:-translate-y-12 lg:h-[140px] lg:w-[140px] lg:-translate-y-16 xl:h-[190px] xl:w-[190px] xl:-translate-y-24'
          />
        </div>
        <div className='flex flex-wrap justify-start w-full sm:justify-between'>
          <div className='flex flex-col mb-5 w-full text-center sm:mb-0 sm:w-auto sm:text-left'>
            <h1 className='font-fivo text-cblue font-medium'>
              BO<span className='font-pilow'>A</span>RD OF
            </h1>
            <h1 className='font-fivo text-cblue font-medium'>
              EXECUT<span className='font-pilow'>I</span>V
              <span className='font-pilow'>E</span>S
            </h1>
          </div>
          <div className='font-fivo text-cblue pt-2 w-64 text-xs leading-tight text-left sm:text-right'>
            Elephant Flocks leaders which oversees every departments, working on
            TEDxITS 2022 license and estimating budgeting.
          </div>
        </div>
      </div>
    </>
  );
}

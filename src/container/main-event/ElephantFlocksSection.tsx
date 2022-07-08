import React from 'react';
import { Reveal, Tween } from 'react-gsap';

import NextImage from '@/components/NextImage';

export default function ElephantFlocksSection() {
  return (
    <Reveal
      trigger={
        <div className='layout text-cdark flex flex-col justify-center py-8 min-h-screen md:py-16' />
      }
    >
      <Tween
        from={{
          y: '50px',
          opacity: 0,
        }}
        to={{
          y: 0,
          opacity: 1,
        }}
        duration={1}
        stagger={0.2}
        ease='power2.out'
      >
        <div className='flex gap-16 items-center'>
          <Tween
            from={{ y: '50px', opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            duration={1}
            delay={0.9}
            stagger={0.5}
            ease='power2.out'
          >
            <div className='w-full'>
              <NextImage
                width={845}
                height={388}
                src='https://res.cloudinary.com/tedxits/image/upload/v1656909986/merch/main-event/elephant-flocks/elephant-flocks-text_wvilpb.svg'
                alt='The Elephant Flocks Gallery'
                className='w-full'
              />
            </div>
            <div className='hidden flex-shrink-0 w-full max-w-xs md:block'>
              <p className='animate-[float_4s_ease-in-out_infinite] font-fivo text-xs leading-none'>
                People behind the scenes of a successful TEDxITS 2022. We are
                excited to reveal the pack who have participated in our
                event&apos;s long journey. Mass gratitude are expressed to each
                and every individual through the excitement, worries, and our
                roller-coaster ride of preparing TEDxITS 2022.
              </p>
            </div>
          </Tween>
        </div>
        <div className='w-full'>
          <NextImage
            width={2913}
            height={881}
            src='https://res.cloudinary.com/tedxits/image/upload/v1656909955/merch/main-event/elephant-flocks/team-photo_qakzkw.png'
            alt='Team Photo'
            className='animate-[float_2s_ease-in-out_infinite] w-full drop-shadow-lg'
          />
        </div>
        <div className='block md:hidden'>
          {' '}
          <div className='block flex-shrink-0 mt-16 w-full md:hidden'>
            <p className='font-fivo leading-tight text-justify'>
              People beyond the curtain of the successful TEDxITS 2022. We are
              excited to reveal the pack who have participated in our
              event&apos;s long journey. Mass gratitude was sent to each
              individual within through the excitement, worrisome, and the
              roller coaster ride of emotions in the process of TEDxITS.
            </p>
          </div>
        </div>
        <div className='flex justify-between mt-16 md:mt-auto'>
          <p className='font-fivo text-[10px] max-w-xs leading-none'>TEDxITS</p>
          <p className='font-fivo text-[10px] max-w-xs leading-none'>
            - Faces Behind The Scene -
          </p>
          <p className='font-fivo text-[10px] max-w-xs leading-none'>2022</p>
        </div>
      </Tween>
    </Reveal>
  );
}

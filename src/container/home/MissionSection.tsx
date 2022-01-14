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
      <div className='bg-story-mobile flex overflow-hidden z-20 pt-20 w-full bg-bottom bg-no-repeat bg-cover md:bg-story lg:pt-44'>
        <div className='layout min-h-main flex flex-col justify-center items-center h-full text-center lg:min-h-[50vh] lg:px-32'>
          <h1 className='font-bold text-black' id='about'>
            O<span className='font-sympath font-normal'>U</span>R MISSI
            <span className='font-sympath font-normal'>O</span>N
          </h1>
          <p className='text-cdark mt-4 text-sm md:text-lg'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor i odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis Lorem ipsum dolor
            sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat Ut
            iam quis.
          </p>
        </div>
      </div>
      <NextImage
        src='/images/bg-story-bottom.png'
        width={2550}
        height={189}
        alt='bottom'
        priority={true}
        className='translate-y-[99%] hidden absolute bottom-0 z-0 w-full lg:block'
      />
      <NextImage
        src='/images/bg-story-mobile-bottom.png'
        width={2549}
        height={452}
        alt='bottom'
        priority={true}
        className='translate-y-[99%] block absolute bottom-0 z-0 w-full lg:hidden'
      />
    </Parallax>
  );
}

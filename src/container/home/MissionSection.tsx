/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import StoryBlobIllustration from '@/assets/svg/StoryBlobIllustration';
import StoryBlobIllustrationMobile from '@/assets/svg/StoryBlobIllustrationMobile';

export default function MissionSection() {
  return (
    <Parallax y={[-10, 10]} tagOuter='figure'>
      <div className='flex overflow-hidden w-full'>
        <img
          src='/images/story-bg-plain.png'
          alt=''
          className='hidden w-full drop-shadow-md lg:block'
        />
        <img
          src='/images/story-bg-plain-mobile.png'
          alt=''
          className='block drop-shadow-md lg:hidden'
        />
        <StoryBlobIllustration className='hidden absolute inset-0 z-40 w-full h-full lg:block' />
        <StoryBlobIllustrationMobile className='block absolute inset-0 z-40 w-full h-full lg:hidden' />
        <div className='absolute w-full h-full'>
          <div className='layout flex flex-col justify-center items-center h-full text-center lg:px-32'>
            <h1 className='font-bold text-black' id='about'>
              O<span className='font-sympath font-normal'>U</span>R MISSI
              <span className='font-sympath font-normal'>O</span>N
            </h1>
            <p className='text-cdark mt-4 text-sm md:text-lg'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor i odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis Lorem ipsum
              dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat Ut iam quis.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

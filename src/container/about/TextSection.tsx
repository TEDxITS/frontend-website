import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

import AboutCircle from '@/assets/svg/AboutCircle';

export default function TextSection() {
  return (
    <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
      <ul className='font-fivo grid gap-8 mt-8 w-full'>
        <p className='bg-cgreen flex z-10 justify-center items-center h-96 rounded-3xl'>
          placeholder for videos
        </p>
        {/* Text Section */}
        <li className='flex flex-col gap-16 mt-8 text-left'>
          <div className='gap-x-[calc(100%/12)] flex flex-col gap-y-16 md:flex-row'>
            <div className='basis-1/2 flex flex-col'>
              <NextImage
                className='absolute translate-x-4 -translate-y-4 md:translate-x-12 md:-translate-y-4'
                src='/images/Asset 3.svg'
                alt='Circle Drawing'
                width={154}
                height={69}
              />
              <h2 className='z-10 pb-1 font-bold'>
                <span className='font-normal'>About</span> TED
              </h2>
              <p className='mt-14 text-justify'>
                TED is a nonprofit devoted to spreading ideas, usually in the
                form of short, powerful talks (18 minutes or less). TED began in
                1984 as a conference where Technology, Entertainment and Design
                converged, and today covers almost all topics — from science to
                business to global issues — in more than 100 languages.
                Meanwhile, independently run TEDx events help share ideas in
                communities around the world.
              </p>
              <div className='flex flex-row gap-4 items-end pt-5'>
                <p className='pt-2'>For more information, visit</p>

                <div>
                  <UnderlineLink href='https://www.ted.com/'>
                    www.ted.com
                  </UnderlineLink>
                </div>
              </div>
            </div>
            <div className='basis-1/2 flex flex-col'>
              <NextImage
                className='absolute z-10 translate-x-4 -translate-y-4 md:translate-x-12 md:-translate-y-4'
                src='/images/Asset 1.svg'
                alt='Circle Drawing'
                width={161}
                height={61}
              />
              <h2 className='z-10 font-extrabold'>
                <span className='font-normal'>About</span> TED
                <span className='ordinal'>x</span>
              </h2>
              <h4 className='text-sm'>x = independently organized TED event</h4>
              <p className='mt-9 text-justify'>
                In the spirit of ideas worth spreading, TEDx is a program of
                local, self-organized events that bring people together to share
                a TED-like experience. At a TEDx event, TEDTalks video and live
                speakers combine to spark deep discussion and connection in a
                small group. These local, self-organized events are branded
                TEDx, where x=independently organized TED event. The TED
                Conference provides general guidance for the TEDx program, but
                individual TEDx events are self-organized.
              </p>
              <div className='flex gap-4 items-end pt-5'>
                <p className='pt-2'>Find out more about TEDx at</p>

                <div>
                  <UnderlineLink href='www.ted.com'>
                    www.ted.com/tedx
                  </UnderlineLink>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className='relative z-10 mb-1 font-extrabold'>
              <AboutCircle className='absolute w-48 translate-x-4 -translate-y-4 md:translate-x-16' />
              <span className='font-normal'>About</span> TED
              <span className='ordinal'>x</span>
              <span className='font-normal'>ITS</span>
            </h2>
            <p className='mt-16 text-justify'>
              In the spirit of ideas worth spreading, TEDx is a program of
              local, self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TEDTalks video and live
              speakers combine to spark deep discussion and connection in a
              small group. These local, self-organized events are branded TEDx,
              where x=independently organized TED event. The TED Conference
              provides general guidance for the TEDx program, but individual
              TEDx events are self-organized.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

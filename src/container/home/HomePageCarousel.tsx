/* eslint-disable @next/next/no-img-element */
import React from 'react';

import clsxm from '@/lib/clsxm';

import { LANDING_PAGE_PHOTO } from '@/data/main_event';

import NextImage from '@/components/NextImage';

//#region  //*=========== Image Data ===========
//change this according to your data
const homePageImage = [...LANDING_PAGE_PHOTO];
const homePageStyle = [
  'relative -top-0 left-0 z-[4]',
  'absolute -top-[2rem] left-[10rem] z-[3] opacity-95',
  'absolute -top-[4rem] left-[20rem] z-[2] blur-sm opacity-95',
];
const TOTAL_PHOTO = homePageImage.length;
//#endregion  //*======== Image Data ===========

export default function HomePageCarousel({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div
      className={clsxm(
        '  relative justify-center items-center p-8 w-full h-full lg:p-16',
        className
      )}
      {...rest}
    >
      <div className='flex relative flex-col gap-4 p-2 w-full md:mt-32 lg:mt-0'>
        {homePageImage.map((image, i) => (
          <div
            onClick={() => setActive(i)}
            key={i}
            className={clsxm(
              ' w-full rounded-lg shadow-md transition-all ease-in-out cursor-pointer',
              'hover:-translate-y-2',
              [i === active && homePageStyle[0]],
              [
                i < active
                  ? homePageStyle[TOTAL_PHOTO - active + i]
                  : homePageStyle[i - active],
              ]
            )}
          >
            <div
              className={clsxm(
                i !== active &&
                  'absolute bg-gradient-to-b from-transparent inset-0 via-cdark/20 to-cdark/80'
              )}
            ></div>
            <NextImage
              useSkeleton={true}
              src={image}
              alt=''
              width={1980}
              height={1980}
              layout='responsive'
              objectFit='cover'
              className='h-fit overflow-hidden mx-auto w-full rounded-2xl md:mx-0'
            />
          </div>
        ))}
      </div>

      <div className='flex gap-2 justify-center my-8 lg:bottom-0'>
        {[...Array(TOTAL_PHOTO)].map((_, idx) => (
          <button
            onClick={() => setActive(idx)}
            key={idx}
            className={clsxm(
              'flex justify-center items-center w-7 h-7 rounded-full border',
              [idx === active ? 'border-cgray' : 'border-transparent']
            )}
          >
            <span
              className={clsxm(
                'h-[14px] w-[14px]',
                'border-cgray flex-shrink-0 rounded-full border ',

                'transition-all duration-100 ease-in-out',
                [
                  idx === active
                    ? 'bg-cgray'
                    : 'hover:bg-cgray hover:shadow-md hover:shadow-white/20',
                ]
              )}
            >
              &nbsp;
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

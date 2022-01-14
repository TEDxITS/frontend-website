/* eslint-disable @next/next/no-img-element */
import React from 'react';

import clsxm from '@/lib/clsxm';

//#region  //*=========== Image Data ===========
const homePageImage = [
  '/sample/sample-home-1.png',
  '/sample/sample-home-2.png',
  '/sample/sample-home-3.png',
];
const homePageStyle = [
  'top-0 left-0 z-30',
  '-top-8 left-40 z-20 opacity-95',
  '-top-16 left-80 z-10 blur-sm opacity-95',
];
const TOTAL_PHOTO = homePageImage.length;
//#endregion  //*======== Image Data ===========

export default function HomePageCarousel() {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className='relative p-16'>
      <div className='flex relative flex-col gap-4'>
        {homePageImage.map((image, i) => (
          <div
            onClick={() => setActive(i)}
            key={i}
            className={clsxm(
              'absolute w-full rounded-lg shadow-md transition-all ease-in-out cursor-pointer',
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
            <img
              key={i}
              src={image}
              alt='TedXITS 2022 Recap'
              className={clsxm('w-full h-full')}
            />
          </div>
        ))}
      </div>

      <div className='flex absolute bottom-0 left-1/2 gap-2 justify-center mb-8 -translate-x-1/2'>
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

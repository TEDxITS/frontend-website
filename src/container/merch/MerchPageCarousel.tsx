/* eslint-disable @next/next/no-img-element */
import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

//#region  //*=========== Image Data ===========
//change this according to your data
const merchPageImage = [
  '/images/po-merch-bundle1.png',
  '/images/po-merch-bundle2.png',
  '/images/po-merch-bundle2.png',
];

const merchPageDesc = [
  <>
    <NextImage
      src='/images/po-merch-cover.svg'
      width={32}
      height={30}
      alt='bg'
      priority={true}
      className='-translate-x-[10rem] -translate-y-[1rem] bottom-[50%] left-[50%] absolute sm:-translate-y-[1.5rem] md:-translate-x-[12.5rem] md:-translate-y-[2rem]'
    />
    <h1 className='text-cdark'>
      R<span className='font-pilow font-normal'>E</span>D BUNDLE
    </h1>
    <h4 className='text-cdark max-w-lg sm:mt-2'>Health Protocol is a Must!</h4>
  </>,
  <>
    <NextImage
      src='/images/po-merch-cover.svg'
      width={32}
      height={30}
      alt='bg'
      priority={true}
      className='-translate-x-[11.5rem] -translate-y-[1rem] bottom-[50%] left-[50%] absolute sm:-translate-y-[1.5rem] md:-translate-x-[14.5rem] md:-translate-y-[2rem]'
    />
    <h1 className='text-cdark'>
      BL<span className='font-pilow font-normal'>A</span>CK BUNDLE
    </h1>
    <h4 className='text-cdark max-w-lg sm:mt-2'>
      Keeping up with the heat of Surabaya
    </h4>
  </>,
  <>
    <NextImage
      src='/images/po-merch-cover.svg'
      width={32}
      height={30}
      alt='bg'
      priority={true}
      className='-translate-x-[11.5rem] -translate-y-[1rem] bottom-[50%] left-[50%] absolute sm:-translate-y-[1.5rem] md:-translate-x-[14.5rem] md:-translate-y-[2rem]'
    />
    <h1 className='text-cdark'>
      W<span className='font-pilow font-normal'>H</span>ITE BUNDLE
    </h1>
    <h4 className='text-cdark max-w-lg sm:mt-2'>
      Can&apos;t get mixed up with others
    </h4>
  </>,
];

const merchPageStyle = [
  'relative -top-0 left-0 z-[4] scale-125',
  'absolute -top-0 -left-[8rem] sm:-left-[12rem] lg:-left-[20rem] z-[2] opacity-80 scale-75',
  'absolute -top-0 left-[8rem] sm:left-[12rem] lg:left-[20rem] z-[2] opacity-80 scale-75',
];

const TOTAL_PHOTO = merchPageImage.length;
//#endregion  //*======== Image Data ===========

export default function HomePageCarousel({
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div
      className={clsxm(
        'flex relative justify-center items-center w-full',
        className
      )}
      {...rest}
    >
      <div className='flex relative flex-col gap-4 w-full lg:mt-0'>
        {merchPageImage.map((image, i) => (
          <div
            onClick={() => setActive(i)}
            key={i}
            className={clsxm(
              'w-full rounded-lg transition-all ease-in-out cursor-pointer',
              'hover:-translate-y-2',
              [i === active && merchPageStyle[0]],
              [
                i < active
                  ? merchPageStyle[TOTAL_PHOTO - active + i]
                  : merchPageStyle[i - active],
              ]
            )}
          >
            <div className={clsxm(i !== active && 'absolute inset-0')}></div>
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
        <div className='w-[30rem] left-0 mt-4 -translate-x-1/4 sm:-translate-x-[17%]'>
          {merchPageDesc[active]}
        </div>
      </div>
    </div>
  );
}

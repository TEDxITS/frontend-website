/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

import { Event } from '@/types/event';

type TicketingCardProps = {
  type: Event;
} & React.ComponentPropsWithoutRef<'div'>;

//#region  //*=========== No Kit ===========
const BENEFIT_NO_KIT: React.ReactNode[] = [
  'Offline TEDx Talks Experiences',
  `Insightful Content From Remarkable Speakers`,
  `E-certificate`,
  `Lanyard and ID Card`,
  `Food and Beverage`,
  `Sticker Pack`,
];

const TITLE_NO_KIT: React.ReactNode = (
  <>
    <div className='animate-float my-auto'>
      <h1 className='text-cdark text-5xl leading-none'>
        <span className='italic'>OFF</span>
        <span className='ml-1 font-normal'>LINE</span>
      </h1>
    </div>

    <p>
      Minimalism that&apos;s what we called for this package, the essential
      package will be delivered right on the spot.
    </p>
  </>
);
//#endregion  //*======== No Kit ===========

//#region  //*=========== With Kit ===========
const BENEFIT_WITH_KIT: React.ReactNode[] = [
  <>
    <span className='font-bold'>Special kit:</span> Totebag, Key Chain, and
    Custom Hand Sanitizer.
  </>,
  'Offline TEDx Talks Experiences',
  `E-certificate`,
  `Lanyard and ID Card`,
  `Food and Beverage`,
  `Sticker Pack`,
];

const TITLE_WITH_KIT: React.ReactNode = (
  <>
    <div className='animate-float my-auto'>
      <h1 className='text-cdark text-5xl leading-none'>
        <span className='italic'>OFF</span>
        <span className='ml-1 font-normal'>LINE</span>
      </h1>
      <h2 className='text-cred leading-none md:text-4xl'>
        With <span className='font-bold'>Kit</span>
      </h2>
    </div>
    <p>
      The live experiences of TEDx Talk from the distinguished speakers with
      event companion exceptional kit.
    </p>
  </>
);

//#endregion  //*======== With Kit ===========

export default function TicketingCard({
  type,
  children,
  className,
}: TicketingCardProps) {
  return (
    <div
      className={clsxm(
        'text-cdark relative max-w-xs drop-shadow-lg',
        className
      )}
    >
      {type === 'offline-kit' && (
        <div className='absolute top-0 -right-4 z-10'>
          <NextImage
            src='/images/sticker/yellow-circle.png'
            width={484}
            height={484}
            alt='yellow circle'
            className='w-28'
          />
        </div>
      )}
      {/* Card Header */}
      <div className='overflow-hidden relative rounded-t-3xl'>
        <NextImage
          width={217.7}
          height={263}
          className='w-full'
          src={
            type === 'offline-non-kit'
              ? '/svg/checkout-card-1.svg'
              : '/svg/checkout-card-2.svg'
          }
          alt='Card Background'
          priority={true}
        />
        <div className='flex absolute top-0 flex-col px-8 py-4 h-full'>
          {type === 'offline-non-kit' ? TITLE_NO_KIT : TITLE_WITH_KIT}
        </div>
      </div>
      {/* Card Contents */}
      <div className='min-h-32 flex flex-col'>
        <NextImage
          width={217.7}
          height={4}
          className='-mb-[1px] w-full'
          src='/svg/checkout-content-top.svg'
          alt='Card Content Top'
          priority={true}
        />
        <div className='flex flex-col gap-2 bg-white rounded-b-3xl'>
          <div className='flex flex-col gap-2 px-8 pt-4 pb-4'>
            <p className='mb-4 font-semibold'>What you will get</p>

            {(type === 'offline-non-kit'
              ? BENEFIT_NO_KIT
              : BENEFIT_WITH_KIT
            ).map((text, i) => {
              return (
                <div key={i} className='flex gap-2'>
                  <NextImage
                    src='/images/checkout-page/checklist.svg'
                    width={19.9653}
                    height={21.1257}
                    alt='checklist'
                    className='flex-shrink-0'
                  />
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
          <DottedDivider />
          <div className='flex flex-col gap-2 px-8 py-4'>{children}</div>
        </div>
      </div>
    </div>
  );
}

const DottedDivider = ({ ...rest }: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg
    id='b674365d-b950-4b16-b626-b91f7c9a70e4'
    data-name='Layer 1'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 217.43 5.63'
    {...rest}
  >
    <path className='fill-[#1c1c1c]' d='M0 0h3.14v.48H0z' />
    <path
      className='fill-[#1c1c1c]'
      d='M218.35 51.17h-6.21v-.48h6.21Zm-10.36 0h-6.21v-.48H208Zm-10.34 0h-6.22v-.48h6.22Zm-10.36 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0H150v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0H119v-.48h6.21Zm-10.35 0h-6.22v-.48h6.22Zm-10.36 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.38 0h-6.18v-.48H32Zm-10.35 0h-6.18v-.48h6.21Z'
      transform='translate(-8.19 -50.69)'
    />
    <path
      className='fill-[#1c1c1c]'
      d='M214.3 0h3.14v.48h-3.14zM0 5.15h3.14v.48H0z'
    />
    <path
      className='fill-[#1c1c1c]'
      d='M218.35 56.31h-6.21v-.48h6.21Zm-10.36 0h-6.21v-.48H208Zm-10.34 0h-6.22v-.48h6.22Zm-10.36 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0H150v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0H119v-.48h6.21Zm-10.35 0h-6.22v-.48h6.22Zm-10.36 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.35 0h-6.21v-.48h6.21Zm-10.38 0h-6.18v-.48H32Zm-10.35 0h-6.18v-.48h6.21Z'
      transform='translate(-8.19 -50.69)'
    />
    <path className='fill-[#1c1c1c]' d='M214.3 5.15h3.14v.48h-3.14z' />
  </svg>
);

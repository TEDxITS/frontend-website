/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import NextImage from '@/components/NextImage';

type TicketingCardProps = {
  cardType: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TicketingCard({ cardType }: TicketingCardProps) {
  interface CardProps {
    text: string;
  }

  const whatWillYouGetNoKit: CardProps[] = [
    { text: 'Offline TEDx Talks Experiences' },
    {
      text: `Insightful Content From Remarkable Speakers`,
    },
    { text: `E-certificate` },
    { text: `Lanyard and ID Card` },
    { text: `Food and Beverage` },
    { text: `Sticker Pack` },
  ];

  const whatWillYouGetWithKit: CardProps[] = [
    { text: 'Special kit: Totebag, Key Chain, and Custom Hand Sanitizer' },
    { text: 'Offline TEDx Talks Experiences' },
    { text: `E-certificate` },
    { text: `Lanyard and ID Card` },
    { text: `Food and Beverage` },
    { text: `Sticker Pack` },
  ];

  if (cardType == 'offline-no-kit') {
    return (
      <div className='bg-checkoutPage h-[40rem] text-cdark w-56 bg-no-repeat bg-contain'>
        <div className='h-[13.375rem] flex flex-col justify-end md:h-[16.625rem]'>
          <h1 className='text-cdark text-center'>
            <span className='italic'>OFF</span>
            <span className='font-normal'>LINE</span>
          </h1>
          <p className='px-4 text-xs md:p-4'>
            Minimalism that&apos;s what we called for this package, the
            essential package will be delivered right on the spot.
          </p>
        </div>
        <div className='h-[12.25rem] p-4 mt-3 md:h-[14.75rem] md:mt-1'>
          <h4 className='text-cdark mb-2 text-sm font-bold'>
            What you will get
          </h4>
          {whatWillYouGetNoKit.map(({ text }, i) => {
            return (
              <div key={i} className='shrink-0 flex gap-2'>
                <NextImage
                  src='/images/checkout-page/checklist.svg'
                  width={20}
                  height={20}
                  alt='checklist'
                />
                <p className='flex flex-col justify-end text-xs'>{text}</p>
              </div>
            );
          })}
        </div>
        <div className='h-[7.5rem] flex flex-col justify-center p-4 mt-1 md:h-[7.875rem]'>
          <h4 className='text-cdark mb-2 text-xl font-bold'>Price</h4>
          <h1 className='text-cdark'>
            110k
            <span className='text-cdark text-2xl font-normal'>/ticket</span>
          </h1>
        </div>
      </div>
    );
  } else if (cardType == 'offline-with-kit') {
    return (
      <>
        <div className='bg-checkoutPage h-[40rem] text-cdark w-56 bg-no-repeat bg-contain'>
          <div className="bg-[url('/images/checkout-page/yellow-circle.png')] h-[7.116rem] translate-x-[8rem] translate-y-[-2rem] w-[7.112rem] absolute z-30 pt-4 md:translate-x-[10rem] md:translate-y-[-2rem]">
            <h1 className='text-cblue mx-2 my-6 text-sm text-center rotate-12'>
              Limited seats only
            </h1>
          </div>
          <div className='h-[13.375rem] flex flex-col justify-end md:h-[16.625rem]'>
            <h1 className='text-cdark text-center'>
              <span className='italic'>OFF</span>
              <span className='font-normal'>LINE</span>
            </h1>
            <h1 className='text-corange px-4 text-3xl text-left'>
              <span className='font-normal'>With </span>
              Kit
            </h1>
            <p className='px-4 pb-4 text-xs'>
              Minimalism that&apos;s what we called for this package, the
              essential package will be delivered right on the spot.
            </p>
          </div>
          <div className='h-[12.25rem] p-4 mt-3 md:h-[14.75rem] md:mt-1'>
            <h4 className='text-cdark mb-2 text-sm font-bold'>
              What you will get
            </h4>
            {whatWillYouGetWithKit.map(({ text }, i) => {
              return (
                <div key={i} className='shrink-0 flex gap-2'>
                  <NextImage
                    src='/images/checkout-page/checklist.svg'
                    width={20}
                    height={20}
                    alt='checklist'
                  />
                  <p className='flex flex-col justify-end text-xs'>{text}</p>
                </div>
              );
            })}
          </div>
          <div className='h-[7.5rem] flex flex-col justify-center p-4 mt-1 md:h-[7.875rem]'>
            <h4 className='text-cdark mb-2 text-xl font-bold'>Price</h4>
            <h1 className='text-cdark'>
              110k
              <span className='text-cdark text-2xl font-normal'>/ticket</span>
            </h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className='bg-checkoutPage h-[40rem] text-cdark w-56 bg-no-repeat bg-contain'>
        <div className='h-[13.375rem] flex flex-col justify-end md:h-[16.625rem]'>
          <h1 className='text-cdark text-center'>
            <span className='italic'>OFF</span>
            <span className='font-normal'>LINE</span>
          </h1>
          <p className='px-6 text-xs md:p-6'>
            Minimalism that&apos;s what we called for this package, the
            essential package will be delivered right on the spot.
          </p>
        </div>
        <div className='h-[12.25rem] p-4 mt-3 md:h-[14.75rem] md:mt-1'>
          <h4 className='text-cdark mb-2 text-sm font-bold'>
            What you will get
          </h4>
          {whatWillYouGetNoKit.map(({ text }, i) => {
            return (
              <div key={i} className='shrink-0 flex gap-2'>
                <NextImage
                  src='/images/checkout-page/checklist.svg'
                  width={20}
                  height={20}
                  alt='checklist'
                />
                <p className='flex flex-col justify-end text-xs'>{text}</p>
              </div>
            );
          })}
        </div>
        <div className='h-[7.5rem] flex flex-col justify-center p-4 mt-1 md:h-[7.875rem]'>
          <h4 className='text-cdark mb-2 text-xl font-bold'>Price</h4>
          <h1 className='text-cdark'>
            110k
            <span className='text-cdark text-2xl font-normal'>/ticket</span>
          </h1>
        </div>
      </div>
    );
  }
}

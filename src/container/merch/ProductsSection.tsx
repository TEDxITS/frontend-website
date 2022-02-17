/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { merchData } from '@/data/merch';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

import ProductCard from './ProductCard';

export default function MissionSection() {
  return (
    <div
      className='flex flex-col items-center justify-center mb-16 text-center'
      id='products'
    >
      <NextImage
        src='/images/po-merch-bg.svg'
        width={552}
        height={369}
        alt='bg'
        priority={true}
        className='absolute bottom-[72rem] right-0 translate-x-32 translate-y-36'
      />
      <NextImage
        src='/images/po-merch-bg.svg'
        width={552}
        height={369}
        alt='bg'
        priority={true}
        className='-left-48 absolute bottom-96 rotate-180 translate-x-32 translate-y-36'
      />
      <div className='flex flex-col items-center justify-center layout z-10'>
        <div className='flex flex-wrap gap-24 items-center justify-center w-full'>
          {merchData.map((item, i) => (
            <ProductCard
              image={item.image}
              title={item.title}
              price={item.price}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className='animate-bounce block bottom-12 fixed mt-16 mx-auto z-20'>
        <ButtonLink
          className='from-cdark px-16 py-4 shadow-2xl to-cdark'
          href='https://tedxits.org/links/OPENPOARCANE'
        >
          BUY NOW
        </ButtonLink>
      </div>
    </div>
  );
}

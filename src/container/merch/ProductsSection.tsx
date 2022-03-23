/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { merchData } from '@/data/merch';

import NextImage from '@/components/NextImage';

import ProductCard from './ProductCard';

export default function MissionSection() {
  return (
    <div
      className='flex flex-col justify-center items-center mb-16 text-center'
      id='products'
    >
      <NextImage
        src='/images/background/bg-merch-draw.png'
        width={589}
        height={409}
        alt='bg'
        priority={true}
        className='bottom-[72rem] absolute right-0 translate-x-36 translate-y-36'
      />
      <NextImage
        src='/images/background/bg-merch-draw.png'
        width={589}
        height={409}
        alt='bg'
        priority={true}
        className='absolute -left-48 bottom-96 rotate-180 translate-y-36'
      />
      <div className='layout flex z-10 flex-col justify-center items-center'>
        <div className='flex flex-wrap gap-24 justify-center items-center w-full'>
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
    </div>
  );
}

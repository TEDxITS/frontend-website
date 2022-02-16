/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { positionData } from '@/data/merch';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

import ProductTypeCard from './ProductTypeCard';

export default function MissionSection() {
  return (
    <div className='flex flex-col justify-center items-center my-16 text-center'>
      <NextImage
        src='/images/po-merch-bg.svg'
        width={552}
        height={369}
        alt='bg'
        priority={true}
        className='bottom-[72rem] absolute right-0 translate-x-32 translate-y-36'
      />
      <NextImage
        src='/images/po-merch-bg.svg'
        width={552}
        height={369}
        alt='bg'
        priority={true}
        className='absolute -left-48 bottom-96 rotate-180 translate-x-32 translate-y-36'
      />
      <div className='layout flex z-10 flex-col gap-32'>
        {positionData.map((item, i) => (
          <ProductTypeCard
            dataClassName={item.dataClassName}
            image={item.image}
            data={item.data}
            key={i}
          />
        ))}
      </div>
      <div className='block fixed bottom-12 z-20 mx-auto mt-16 animate-bounce'>
        <ButtonLink
          className='from-cdark to-cdark px-16 py-4 shadow-2xl'
          href='https://tedxits.org/links/OPENPOARCANE'
        >
          BUY NOW
        </ButtonLink>
      </div>
    </div>
  );
}

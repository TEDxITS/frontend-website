import React from 'react';

import { BundleProductDataType, merch_2_bundle_data } from '@/data/merch';

import NextImage from '@/components/NextImage';

import DrawTopRight from '@/assets/svg/DrawTopRight';

export default function CarouselSection() {
  return (
    <div className='layout flex flex-col justify-center items-center my-16 text-center'>
      <div className='flex flex-row'>
        <h1 className='text-cred font-extrabold'>
          B<span className='font-sympath font-normal'>U</span>NDLE{' '}
          <span className='font-sympath font-normal'>U</span>P !
        </h1>
      </div>
      <div className='grid w-full md:grid-cols-2 md:gap-16'>
        {merch_2_bundle_data.map((data, i) => (
          <BundleCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

function BundleCard({ data }: { data: BundleProductDataType }) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <NextImage
        alt='Bundle Merch'
        width={data.photo.width}
        height={data.photo.height}
        src={data.photo.url}
        className='w-full max-w-lg'
        useSkeleton
      />

      <div className='font-fivo relative'>
        <h3 className='text-cdark text-2xl font-extrabold'>{data.title}</h3>
        <h4 className='text-cdark'>
          {data.subtitle} →{' '}
          <span className='animate-flicker text-cred font-extrabold'>
            {data.price}
          </span>
        </h4>
        <DrawTopRight className='text-cdark absolute top-0 right-0 w-8 translate-x-full -translate-y-1/2' />
      </div>
    </div>
  );
}

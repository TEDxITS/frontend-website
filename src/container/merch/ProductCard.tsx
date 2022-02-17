import React from 'react';

import clsxm from '@/lib/clsxm';

import { ProductType } from '@/data/merch';

export default function ProductCard({
  image,
  title,
  price,
  className,
}: ProductType & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsxm('flex flex-col w-80', className)}>
      <div className='flex h-full items-center overflow-hidden'>{image}</div>
      <div className='mt-auto pt-4'>
        <h1 className='text-2xl text-cred'>{title}</h1>
        <p className='font-fivo font-medium text-cdark text-lg'>{price}</p>
      </div>
    </div>
  );
}

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
    <div className={clsxm('flex flex-col', className)}>
      <div className='flex overflow-hidden items-center h-full'>{image}</div>
      <div className='pt-4 mt-auto'>
        <h1 className='text-cred text-2xl'>{title}</h1>
        <p className='font-fivo text-cdark text-lg font-medium'>{price}</p>
      </div>
    </div>
  );
}

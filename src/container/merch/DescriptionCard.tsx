import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type DescriptionCardProps = {
  header: React.ReactNode;
  description: React.ReactNode;
  image: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function DescriptionCard({
  header,
  description,
  image,
  className,
}: DescriptionCardProps) {
  return (
    <div className={clsxm('text-cdark text-cp-8 rounded-3xl', className)}>
      {image && (
        <NextImage
          src={image}
          width='100%'
          height='100%'
          alt='merch'
          className='mb-7 w-full transition-all ease-in-out cursor-pointer hover:-translate-y-2'
          imgClassName='rounded-2xl'
        />
      )}
      <h1 className='text-cred pb-2 text-lg'>{header}</h1>
      <p className=''>{description}</p>
    </div>
  );
}

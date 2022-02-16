import React from 'react';

import clsxm from '@/lib/clsxm';

import { JobType, PositionData } from '@/data/merch';

import NextImage from '@/components/NextImage';

import DescriptionCard from './DescriptionCard';

type PositionTypeCardProps = PositionData & {
  data: JobType[];
  image: string;
} & {
  dataClassName?: string;
};

export default function PositionTypeCard({
  data,
  image,
  dataClassName,
}: PositionTypeCardProps) {
  return (
    <div className={clsxm('flex overflow-hidden relative flex-col h-full')}>
      <div className='flex z-10 flex-col gap-8'>
        {image && (
          <NextImage
            src={image}
            width={1038}
            height={250}
            alt='bg'
            className='mb-7 w-full'
            imgClassName='rounded-2xl'
          />
        )}
        {data.length > 0 && (
          <div className={clsxm('grid', dataClassName)}>
            {data.map((item, i) => (
              <DescriptionCard
                header={item.title}
                description={item.description}
                image={item.image}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

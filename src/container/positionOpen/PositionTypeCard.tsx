import React from 'react';
import useInView from 'react-cool-inview';

import clsxm from '@/lib/clsxm';

import { JobType, PositionData } from '@/data/position';

import NextImage from '@/components/NextImage';

import DescriptionCard from './DescriptionCard';

type PositionTypeCardProps = PositionData & {
  data: JobType[];
  image: string;
} & {
  dataClassName?: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export default function PositionTypeCard({
  title,
  description,
  href,
  data,
  image,
  dataClassName,
  setActive,
}: PositionTypeCardProps) {
  const { observe } = useInView({
    trackVisibility: true,
    delay: 100,
    onEnter: () => {
      setActive(href);
    },
  });

  return (
    <div
      className={clsxm(
        'min-h-main flex overflow-hidden relative flex-col pb-16 h-full'
      )}
      id={href}
    >
      <NextImage
        src='/images/bolder-blob.svg'
        width={546}
        height={546}
        alt='bg'
        priority={true}
        className='absolute top-0 left-1/2 translate-x-32 translate-y-36'
      />
      <NextImage
        src='/images/bg-positionopen.svg'
        width={681}
        height={808}
        alt='bg'
        priority={true}
        className='absolute top-0 right-1/2 translate-x-12 translate-y-10'
      />
      <NextImage
        src='/images/bolder-blob.svg'
        width={546}
        height={546}
        alt='bg'
        priority={true}
        className='absolute bottom-0 left-1/2 rotate-180 -translate-x-72 translate-y-56'
      />
      <div className='layout flex z-10 flex-col gap-8' ref={observe}>
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
        <h1 className='text-cdark text-3xl uppercase md:text-4xl lg:text-5xl'>
          {title} <span className='text-primary-500'>VOLUNTEERS</span>
        </h1>
        <p className='text-cdark text-justify'>{description}</p>
        {data.length > 0 && (
          <div className={clsxm('grid', dataClassName)}>
            {data.map((item, i) => (
              <DescriptionCard
                header={item.title}
                description={item.description}
                key={i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

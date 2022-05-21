import React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

//#region  //*=========== Data ===========
type CarouselDataType = {
  id: number;
  image: string;
  title: string;
  ref: string;
};

const carouselData: CarouselDataType[] = [
  {
    id: 0,
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1652954157/merch/cover/bucket-hat-inside.png',
    title: 'BUCKET HAT',
    ref: 'bucket',
  },
  {
    id: 1,
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1652954135/merch/cover/tumblr.png',
    title: 'TUMBLR',
    ref: 'tumblr',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1652953954/merch/cover/tshirt.png',
    title: 'T-SHIRT',
    ref: 'tshirt',
  },

  {
    id: 3,
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1652954191/merch/cover/sticker.png',
    title: 'STICKER PACK',
    ref: 'sticker',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/tedxits/image/upload/v1652954371/merch/cover/lanyard.png',
    title: 'SAKO',
    ref: 'sako',
  },
];

const IMAGE_STYLE = [
  'absolute  right-1/2 scale-50 -translate-x-[calc(125%-2rem)]',
  'absolute  right-1/2 scale-75 -translate-x-[calc(50%-1rem)]',
  'flex relative',
  'absolute left-1/2 scale-75 translate-x-[calc(50%-1rem)]',
  'absolute left-1/2 scale-50 translate-x-[calc(125%-2rem)]',
];
//#endregion  //*======== Data ===========

export default function CoverPageCarousel() {
  //#region  //*=========== default variable ===========
  const IMAGE_COUNT = carouselData.length - 1;
  const CENTER_IMAGE_INDEX = Math.floor(IMAGE_COUNT / 2);
  //#endregion  //*======== default variable ===========

  //#region  //*=========== state ===========
  const [active, setActive] = React.useState<number>(CENTER_IMAGE_INDEX);
  const [pictureStyle, setPictureStyle] = React.useState<number[]>([
    0, 1, 2, 3, 4,
  ]);
  //#endregion  //*======== state ===========

  //#region  //*=========== update ===========
  const updateCarousel = (id: number) => {
    setActive(id);
    const diff = Math.abs(active - id);
    if (id > active) {
      const newStyle = pictureStyle.map((id) => {
        const newId = id + diff;
        if (newId > pictureStyle.length - 1) {
          return newId - pictureStyle.length;
        } else return newId;
      });

      setPictureStyle(newStyle);
      return;
    } else if (id < active) {
      const newStyle = pictureStyle.map((id) => {
        const newId = id - diff;
        if (newId < 0) {
          return pictureStyle.length + newId;
        } else return newId;
      });
      setPictureStyle(newStyle);
      return;
    }
  };
  //#endregion  //*======== update ===========

  return (
    <div className='flex relative justify-center items-center pb-12 w-full h-full'>
      {pictureStyle.map((id, i) => (
        <>
          {i === Math.floor(pictureStyle.length / 2) ? (
            <UnstyledLink
              href={`#${carouselData[id].ref}`}
              className={clsxm(IMAGE_STYLE[i], ' shadow-xl cursor-pointer')}
              key={id}
              onClick={() => updateCarousel(carouselData[id].id)}
            >
              <NextImage
                useSkeleton
                src={carouselData[id].image}
                alt='cover'
                priority={true}
                objectFit='cover'
                layout='fill'
                className={clsxm(
                  'overflow-hidden rounded-md',
                  'aspect-h-1 aspect-w-1 relative w-64 ',
                  'bg-cdark shadow-inner drop-shadow-2xl',
                  'ease transition-all duration-150 '
                )}
              />

              <h4 className='bg-clight/80 font-fivo text-cdark absolute right-0 left-0 bottom-1/4 px-3 font-bold drop-shadow-xl'>
                {carouselData[id].title}
              </h4>
            </UnstyledLink>
          ) : (
            <div
              className={clsxm(IMAGE_STYLE[i], ' shadow-xl cursor-pointer')}
              key={id}
              onClick={() => updateCarousel(carouselData[id].id)}
            >
              <NextImage
                useSkeleton
                src={carouselData[id].image}
                alt='cover'
                priority={true}
                objectFit='cover'
                layout='fill'
                className={clsxm(
                  'overflow-hidden rounded-md',
                  'aspect-h-1 aspect-w-1 relative w-64 ',
                  'bg-cdark shadow-inner drop-shadow-2xl',
                  'ease transition-all duration-150 '
                )}
              />

              <h4 className='bg-clight/80 font-fivo text-cdark absolute right-0 left-0 bottom-1/4 px-3 font-bold drop-shadow-xl'>
                {carouselData[id].title}
              </h4>
            </div>
          )}
        </>
      ))}
    </div>
  );
}

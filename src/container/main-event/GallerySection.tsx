import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type GalleryDataType = {
  content: React.ReactChild | string;
};

const GALLERY_DATA_5: GalleryDataType[] = [
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913948/merch/main-event/elephant-flocks/gallery/Asset_22-100_g6bcls.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_23-100_mxg7a5.jpg',
  },
  {
    content: (
      <div className='inline-flex items-center pl-4'>
        <hr className='border-cdark w-full' />
      </div>
    ),
  },
  {
    content: (
      <NextImage
        width={234}
        height={107}
        alt='The Elephant Flocks'
        className='grid my-auto w-full'
        src='https://res.cloudinary.com/tedxits/image/upload/v1656920339/merch/main-event/elephant-flocks/gallery/Asset_24_sfqy84.svg'
      />
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913948/merch/main-event/elephant-flocks/gallery/Asset_24-100_k9zpje.jpg',
  },
  {
    content: <h3 className='text-cdark'>TEDxITS</h3>,
  },
  {
    content: <h3 className='text-cdark text-right'>2022</h3>,
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913952/merch/main-event/elephant-flocks/gallery/Asset_25-100_enqxcu.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_26-100_xzn7jz.jpg',
  },
  {
    content: <h3 className='text-cdark'>(Gallery)</h3>,
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_27-100_ehyd8n.jpg',
  },
  {
    content: (
      <h3 className='max-w-[6rem] text-cdark inline-flex items-end leading-none'>
        Faces * Behind The Scene
      </h3>
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656924122/merch/main-event/elephant-flocks/gallery/Asset_28-100_jj63gd.jpg',
  },
  {
    content: <div></div>,
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_29-100_dbbvoy.jpg',
  },
  {
    content: <div></div>,
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_30-100_hwmrzo.jpg',
  },
  {
    content: <div></div>,
  },
  {
    content: <div></div>,
  },
  {
    content: (
      <p className='max-w-[8rem] text-cdark inline-flex items-end ml-auto text-sm leading-none text-right'>
        People beyond the curtain of the successful TEDxITS 2022.
      </p>
    ),
  },
  {
    content: (
      <p className='max-w-[8rem] text-cdark inline-flex items-end text-sm leading-none'>
        We are excited to reveal the pack who have participated in our
        event&apos;s long journey.
      </p>
    ),
  },
  {
    content: <div></div>,
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_31-100_s5y9pb.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_32-100_gaciqu.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_33-100_wk697g.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_34-100_mog8fx.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_35-100_ulxetc.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_36-100_wt2a6u.jpg',
  },
  {
    content: (
      <NextImage
        width={83}
        height={74}
        alt='X'
        className='grid mx-auto my-auto w-1/3'
        src='https://res.cloudinary.com/tedxits/image/upload/v1656920382/merch/main-event/elephant-flocks/gallery/Asset_25_avlgzt.svg'
      />
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_37-100_wsw5l2.jpg',
  },
  {
    content: <h3 className='text-cdark inline-flex items-end'>Thank you.</h3>,
  },
  {
    content: (
      <p className='text-cdark inline-flex justify-center items-center text-sm leading-none text-center'>
        Mass gratitude was sent to each individual within through the
        excitement, worrisome, and the roller coaster ride of emotions in the
        process of TEDxITS.
      </p>
    ),
  },
  {
    content: <div></div>,
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_38-100_ezrvak.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_39-100_jqgvl4.jpg',
  },
];

const GALLERY_DATA_2: GalleryDataType[] = [
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913948/merch/main-event/elephant-flocks/gallery/Asset_22-100_g6bcls.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_23-100_mxg7a5.jpg',
  },
  {
    content: (
      <NextImage
        width={234}
        height={107}
        alt='The Elephant Flocks'
        className='grid my-auto w-full'
        src='https://res.cloudinary.com/tedxits/image/upload/v1656920339/merch/main-event/elephant-flocks/gallery/Asset_24_sfqy84.svg'
      />
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913948/merch/main-event/elephant-flocks/gallery/Asset_24-100_k9zpje.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913952/merch/main-event/elephant-flocks/gallery/Asset_25-100_enqxcu.jpg',
  },
  {
    content: (
      <div className='flex flex-col justify-between'>
        <h3 className='text-cdark'>TEDxITS</h3>
        <h3 className='text-cdark text-right'>2022</h3>
      </div>
    ),
  },
  {
    content: (
      <div className='flex items-end'>
        <h3 className='text-cdark'>(Gallery)</h3>
      </div>
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_26-100_xzn7jz.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_27-100_ehyd8n.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656924122/merch/main-event/elephant-flocks/gallery/Asset_28-100_jj63gd.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_29-100_dbbvoy.jpg',
  },
  {
    content: (
      <h3 className='max-w-[6rem] text-cdark inline-flex items-end leading-none'>
        Faces * Behind The Scene
      </h3>
    ),
  },

  {
    content: (
      <p className='max-w-[8rem] text-cdark inline-flex items-end ml-auto text-sm leading-none text-right'>
        People beyond the curtain of the successful TEDxITS 2022.
      </p>
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913951/merch/main-event/elephant-flocks/gallery/Asset_30-100_hwmrzo.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_31-100_s5y9pb.jpg',
  },
  {
    content: (
      <p className='text-cdark text-sm leading-none'>
        We are excited to reveal the pack who have participated in our
        event&apos;s long journey.
      </p>
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_32-100_gaciqu.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_33-100_wk697g.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_34-100_mog8fx.jpg',
  },
  {
    content: (
      <NextImage
        width={83}
        height={74}
        alt='X'
        className='grid mx-auto my-auto w-1/3'
        src='https://res.cloudinary.com/tedxits/image/upload/v1656920382/merch/main-event/elephant-flocks/gallery/Asset_25_avlgzt.svg'
      />
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_35-100_ulxetc.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913950/merch/main-event/elephant-flocks/gallery/Asset_36-100_wt2a6u.jpg',
  },
  {
    content: (
      <p className='text-cdark inline-flex justify-center items-center text-xs leading-none text-justify'>
        Mass gratitude was sent to each individual within through the
        excitement, worrisome, and the roller coaster ride of emotions in the
        process of TEDxITS.
      </p>
    ),
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_37-100_wsw5l2.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_38-100_ezrvak.jpg',
  },
  {
    content:
      'https://res.cloudinary.com/tedxits/image/upload/v1656913949/merch/main-event/elephant-flocks/gallery/Asset_39-100_jqgvl4.jpg',
  },
  {
    content: (
      <h3 className='animate-float text-cdark inline-flex justify-center items-center my-4'>
        Thank you.
      </h3>
    ),
  },
];

export default function GallerySection() {
  return (
    <div className='font-fivo layout text-cdark flex flex-col py-8 min-h-screen md:py-16'>
      <div className='flex justify-between'>
        <h3 className='text-cdark'>JUNE 19</h3>
        <h3 className='text-cdark'>‘22</h3>
      </div>
      <div className='hidden gap-2 md:grid md:grid-cols-5'>
        {GALLERY_DATA_5.map(({ content }, i) => (
          <div key={i}>
            <Parallax speed={i % 2 === 0 ? (i % 5) * 3 : (5 - (i % 5)) * 3}>
              {typeof content === 'string' ? (
                <NextImage
                  width={534}
                  height={534}
                  alt='Gallery Photo'
                  className='w-full'
                  src={content}
                  useSkeleton
                />
              ) : (
                <div
                  className={clsxm('aspect-h-1 aspect-w-1 grid w-full h-full')}
                >
                  {content}
                </div>
              )}
            </Parallax>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 gap-2 md:hidden'>
        {GALLERY_DATA_2.map(({ content }, i) => (
          <Parallax
            speed={i % 2 === 0 ? (i % 2) * 10 : (2 - (i % 2)) * 10}
            key={i}
            className={clsxm(i === GALLERY_DATA_2.length - 1 && 'col-span-2 ')}
          >
            {typeof content === 'string' ? (
              <NextImage
                width={534}
                height={534}
                alt='Gallery Photo'
                className='w-full'
                src={content}
                useSkeleton
              />
            ) : (
              <div
                className={clsxm(
                  'grid w-full h-full',
                  i !== GALLERY_DATA_2.length - 1 && 'aspect-h-1 aspect-w-1'
                )}
              >
                {content}
              </div>
            )}
          </Parallax>
        ))}
      </div>
    </div>
  );
}

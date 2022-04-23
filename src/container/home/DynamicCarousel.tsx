/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { config } from 'react-spring';
import { v4 as uuidv4 } from 'uuid';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

// @ts-ignore
const Carousel = dynamic(() => import('react-spring-3d-carousel'), {
  ssr: false,
});

type DynamicCarouselProps = {
  imgClassName?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function DynamicCarousel({ className }: DynamicCarouselProps) {
  const [state, setState] = useState({
    goToSlide: 1,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  });

  const slides = [
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650792810/photo/pre-event-2-1_fsgvla.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650789047/photo/pre-event-2-2_fifwdr.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650789047/photo/pre-event-2-3_babenj.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650792810/photo/pre-event-2-1_fsgvla.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650789047/photo/pre-event-2-2_fifwdr.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650789047/photo/pre-event-2-3_babenj.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650792810/photo/pre-event-2-1_fsgvla.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650789047/photo/pre-event-2-2_fifwdr.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <NextImage
          useSkeleton={true}
          src='https://res.cloudinary.com/tedxits/image/upload/v1650789047/photo/pre-event-2-3_babenj.jpg'
          alt=''
          width={1980}
          height={1980}
          layout='responsive'
          objectFit='cover'
          className='h-fit max-w-[18rem] w-[65vw] overflow-hidden mx-auto rounded-2xl md:mx-0'
        />
      ),
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: () =>
        setState((prevState) => ({ ...prevState, goToSlide: index })),
    };
  });

  //#region  //*=========== Handle Touch Events ===========
  let xDown: number | null = null;
  let yDown: number | null = null;

  const getTouches = (evt: {
    touches: any;
    originalEvent: { touches: any };
  }) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    ); // jQuery
  };

  const handleTouchStart = (evt: any) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt: { touches: { clientY: any }[] }) => {
    if (!xDown || !yDown) {
      return;
    }
    // @ts-ignore
    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        setState((prevState) => ({
          ...prevState,
          goToSlide: state.goToSlide + 1,
        }));
      } else {
        /* right swipe */
        setState((prevState) => ({
          ...prevState,
          goToSlide: state.goToSlide - 1,
        }));
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };
  //#endregion  //*======== Handle Touch Events ===========

  return (
    <div
      style={{ width: '100%' }}
      onTouchStart={handleTouchStart}
      // @ts-ignore
      onTouchMove={handleTouchMove}
      className={clsxm(className)}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
}

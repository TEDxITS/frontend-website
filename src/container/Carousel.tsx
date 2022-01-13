/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { config } from "react-spring";

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});
export const Example = () => {
  const [state, setState] = useState({
    goToSlide: 1,
    offsetRadius: 4,
    showNavigation: false,
    config: config.gentle,
  });

  const slides = [
    {
      key: 1,
      content: (
        <img
          src="/sample/sample-home-1.png"
          alt="1"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 2,
      content: (
        <img
          src="/sample/sample-home-2.png"
          alt="2"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 3,
      content: (
        <img
          src="/sample/sample-home-3.png"
          alt="3"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 4,
      content: (
        <img
          src="/sample/sample-home-1.png"
          alt="4"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 5,
      content: (
        <img
          src="/sample/sample-home-1.png"
          alt="5"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 6,
      content: (
        <img
          src="/sample/sample-home-1.png"
          alt="1"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 7,
      content: (
        <img
          src="/sample/sample-home-2.png"
          alt="2"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 8,
      content: (
        <img
          src="/sample/sample-home-3.png"
          alt="3"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 9,
      content: (
        <img
          src="/sample/sample-home-1.png"
          alt="4"
          className="w-full -translate-x-1/2"
        />
      ),
    },
    {
      key: 10,
      content: (
        <img
          src="/sample/sample-home-1.png"
          alt="5"
          className="w-full -translate-x-1/2"
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

  return (
    <div className="flex">
      <div
        style={{ width: "100%" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="min-h-main / text-black"
      >
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
      </div>
    </div>
  );
};

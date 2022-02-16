/* eslint-disable @next/next/no-img-element */
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React from 'react';

import clsxm from '@/lib/clsxm';

import CampaignDoodle1 from '@/assets/svg/CampaignDoodle1';
import CampaignDoodle2 from '@/assets/svg/CampaignDoodle2';
import CampaignDoodle3 from '@/assets/svg/CampaignDoodle3';

type CampaignImageStateType = [boolean, boolean, boolean];

//#region  //*=========== Constant ===========
const DOODLE_STYLE = 'absolute inset-0 w-full';
const IMAGE_HIDDEN_STYLE =
  'opacity-0 shadow-2xl  duration-700 transition-all rotate-0 md:w-full w-9/12 sm:w-11/12';
//#endregion  //*======== Constant ===========

export default function CampaignSection() {
  //#region  //*=========== Image State ===========
  const [imageState, setImageState] = React.useState<CampaignImageStateType>([
    false,
    false,
    false,
  ]);
  const elementRef = React.useRef<HTMLDivElement>();
  //#endregion  //*======== Image State ===========

  //#region  //*=========== Track Scroll ===========
  useScrollPosition(
    ({ currPos }) => {
      const windowHeight = window.innerHeight;
      if (currPos.y < windowHeight && elementRef.current) {
        if (!imageState.every((item) => item === true)) {
          setImageState((prevState) => [
            prevState[0] ? true : currPos.y < windowHeight ? true : false,
            prevState[1] ? true : currPos.y < windowHeight - 200 ? true : false,
            prevState[2] ? true : currPos.y < windowHeight - 400 ? true : false,
          ]);
        }
      }
    },
    [],
    elementRef,
    false,
    300
  );
  //#endregion  //*======== Track Scroll ===========

  return (
    <div
      className='flex flex-col items-center md:flex-row'
      ref={elementRef as React.MutableRefObject<HTMLDivElement>}
    >
      <div
        className={clsxm(IMAGE_HIDDEN_STYLE, '-translate-x-1/2', {
          'relative rotate-[10deg] opacity-100 translate-x-0': imageState[0],
        })}
      >
        <CampaignDoodle1 className={clsxm(DOODLE_STYLE)} />
        <img src='/images/campaign-1.jpg' alt='Listen' className='w-full' />
      </div>
      <div
        className={clsxm(IMAGE_HIDDEN_STYLE, 'translate-y-1/2', {
          'relative md:-translate-y-8 translate-y-0 rotate-3 opacity-100':
            imageState[1],
        })}
      >
        <CampaignDoodle2 className={clsxm(DOODLE_STYLE)} />
        <img src='/images/campaign-2.jpg' alt='See' className='w-full' />
      </div>
      <div
        className={clsxm(IMAGE_HIDDEN_STYLE, 'translate-x-1/2', {
          'relative -rotate-6 md:translate-y-8 opacity-100 translate-x-0':
            imageState[2],
        })}
      >
        <CampaignDoodle3 className={clsxm(DOODLE_STYLE)} />
        <img src='/images/campaign-3.jpg' alt='Speak' className='w-full' />
      </div>
    </div>
  );
}

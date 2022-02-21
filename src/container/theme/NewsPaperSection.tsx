import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import React from 'react';
import ReactPlayer from 'react-player';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

import NewspaperHeader from '@/assets/svg/NewspaperHeader';

export type NewsPaperstateType = [boolean, boolean, boolean, boolean];
const NEWSPAPER_HIDDEN_STYLE =
  'opacity-0 shadow-2xl w-full duration-700 transition-all rotate-0 ';

export default function NewsPaperSection() {
  //#region  //*=========== News Paper Background State ===========
  const [newsPaperState, setNewsPaperState] =
    React.useState<NewsPaperstateType>([false, false, false, false]);
  //#endregion  //*======== News Paper Background State ===========

  //#region  //*=========== Tracking Scroll Position ===========
  useScrollPosition(({ currPos }) => {
    if (!newsPaperState.every((item) => item === true)) {
      setNewsPaperState((prevState) => [
        prevState[0] ? true : currPos.y < -25 ? true : false,
        prevState[1] ? true : currPos.y < -105 ? true : false,
        prevState[2] ? true : currPos.y < -100 ? true : false,
        prevState[3] ? true : currPos.y < -250 ? true : false,
      ]);
    }
  });
  //#endregion  //*======== Tracking Scroll Position ===========
  return (
    <>
      {/* Background */}
      <div className={clsxm('absolute inset-0 min-h-screen blur-md ')}>
        <div className='grid grid-cols-1 -m-20 md:grid-cols-2'>
          <NextImage
            src='/images/newspaper-1.jpg'
            alt='taboo issues'
            width={817}
            height={818}
            className={clsxm(NEWSPAPER_HIDDEN_STYLE, '-translate-x-20', {
              'opacity-100 rotate-12 translate-x-0': newsPaperState[0],
            })}
          />
          <NextImage
            src='/images/newspaper-2.jpg'
            alt='crucial matters'
            width={907}
            height={806}
            className={clsxm(
              NEWSPAPER_HIDDEN_STYLE,
              'hidden -translate-y-20 md:block',
              {
                'opacity-100 -rotate-12 translate-y-16': newsPaperState[1],
              }
            )}
          />
          <NextImage
            src='/images/newspaper-3.jpg'
            alt='failed delivered message'
            width={726}
            height={721}
            className={clsxm(NEWSPAPER_HIDDEN_STYLE, {
              'opacity-100 -rotate-[3deg] -translate-y-20': newsPaperState[2],
            })}
          />
          <NextImage
            src='/images/newspaper-3.jpg'
            alt='elephant in the room'
            width={871}
            height={701}
            className={clsxm(NEWSPAPER_HIDDEN_STYLE, 'translate-x-16', {
              'opacity-100 -rotate-[-5deg] translate-x-0': newsPaperState[3],
            })}
          />
        </div>
      </div>
      {/* Main Newspaper */}
      <div className='border-cdark/30 z-10 border shadow-2xl lg:layout lg:-rotate-2'>
        <div className='bg-newspaper-content font-fivo min-h-main text-cdark flex flex-col gap-8 p-8 pt-4 bg-no-repeat bg-cover lg:p-16 lg:pt-16'>
          <NewspaperHeader />
          <div className='flex justify-between items-baseline md:mt-8'>
            <p className='text-lg lg:text-2xl'>GRAND THEME RELEASE!</p>
            <p className='hidden text-lg lg:block'>BREAKING NEWS FOR TODAY</p>
          </div>
          <div className='grid grid-cols-1 lg:divide-cdark lg:grid-cols-2 lg:divide-x'>
            <div className='lg:pr-8'>
              <div className='flex gap-2'>
                <h1 className='text-cdark -translate-y-4'>“</h1>
                <h1 className='text-cdark'>Elephant in The Room</h1>
                <h1 className='text-cdark translate-y-[calc(100%-0.5rem)] mr-4'>
                  ”
                </h1>
              </div>
              <p className='mt-8'>
                A major problem or controversial issue that is obviously present
                but avoided as a subject for discussion because it is more
                comfortable to do so.
              </p>
            </div>

            <p className='border-t-cdark pt-8 mt-8 text-justify border lg:pt-0 lg:pl-8 lg:mt-auto lg:border-0'>
              We touched only the part that&apos;s on the surface and never
              considered the actual story of the oblivion. The{' '}
              <b>elephant in the room</b> with its massive trunks sucked away
              the air till it thickened and dense the surroundings,{' '}
              <b>but no one chose to notice its existence.</b>
            </p>
          </div>
          <div>
            <div className='aspect-h-9 aspect-w-16 overflow-hidden rounded-sm'>
              <ReactPlayer
                url='https://www.youtube.com/embed/hJAAbfABpz8'
                width={'100%'}
                height={'100%'}
                muted={true}
                controls={true}
              />
            </div>
            <NextImage
              src='/images/sticker-1.png'
              width={478}
              height={110}
              alt='Sticker TedxITS'
              className='ml-auto w-32 -translate-y-1/2 lg:w-56'
            />
          </div>
        </div>
      </div>
    </>
  );
}

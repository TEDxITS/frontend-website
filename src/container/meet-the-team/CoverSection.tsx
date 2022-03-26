import React from 'react';
import ReactPlayer from 'react-player';

import clsxm from '@/lib/clsxm';

import Header from '@/components/layout/Header';
import NextImage from '@/components/NextImage';

export default function CoverSection() {
  const [active, setActive] = React.useState<number>(0);
  const [hidden, setHidden] = React.useState<boolean>(true);

  return (
    <>
      <div
        className={clsxm(
          'bg-cover bg-meet-the-team bg-no-repeat h-[calc(100vh+64px)] pt-8 w-full md:pt-16',
          [hidden ? hidden : 'hidden']
        )}
      >
        <Header isDark={false} />
        <div className='-translate-y-16 flex items-center justify-center w-full'>
          <div className='grid grid-cols layout min-h-[calc(100vh-64px)] overflow-hidden relative text-clight'>
            <div className='flex flex-col items-center justify-center text-center lg:mt-0'>
              <div className='flex flex-col'>
                <h1 className='font-normal text-3xl sm:text-5xl'>
                  Who are we?
                </h1>
                <h1 className='font-normal text-3xl sm:text-5xl'>
                  #WeListenSeeSpeak
                </h1>
              </div>
            </div>
            <small className='absolute bottom-8 font-fivo inset-x-0 text-center text-sm md:bottom-16'>
              “We rise by lifting others” - Robert Ingersoll
            </small>
          </div>
        </div>
      </div>
      <div
        className={clsxm(
          'bg-cblue bg-cover bg-no-repeat h-[calc(100vh+64px)] pt-8 w-full md:pt-16',
          [hidden ? 'hidden' : hidden]
        )}
      >
        <Header isDark={false} />
        <div className='-translate-y-20 flex flex-wrap items-center justify-center'>
          <div className='overflow-hidden relative w-full z-40'>
            <div className='flex justify-items-center layout min-h-[calc(100vh-64px)] relative text-clight'>
              <div className='flex flex-col items-center justify-center text-center w-full lg:mt-0'>
                <NextImage
                  src='/images/meet-the-team/arrow.png'
                  width={42}
                  height={45}
                  alt='bg'
                  className='-translate-x-[36.2rem] -translate-y-80 absolute z-40'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='-translate-x-[36rem] -translate-y-80 absolute z-30'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='-translate-y-[18rem] -z-10 absolute translate-x-[42rem]'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='-translate-x-80 absolute translate-y-80 z-20'
                />
                <div className='aspect-h-9 aspect-w-16 bg-cdark overflow-hidden rounded-2xl w-full z-10 md:rounded-3xl'>
                  <ReactPlayer
                    url='https://www.youtube.com/embed/qtVxOYCuICw'
                    width={'100%'}
                    height={'100%'}
                    playing={false}
                    muted={true}
                    controls={true}
                  />
                </div>
                <small className='-translate-y-56 absolute font-fivo font-medium select-none text-[8rem] translate-x-[32rem]'>
                  MEET
                </small>
                <small className='-translate-y-20 absolute font-fivo font-medium select-none text-[8rem] translate-x-[36.5rem]'>
                  WE
                </small>
                <small className='-translate-x-[31rem] -translate-y-24 absolute font-fivo select-none text-left'>
                  <h1 className='font-medium text-[8rem]'>OUR</h1>
                  <h1 className='font-medium text-[8rem]'>TEAM,</h1>
                </small>
                <small className='-translate-x-[29.5rem] absolute font-fivo select-none text-left translate-y-64'>
                  <h1 className='font-medium text-[8rem] underline'>LISTEN</h1>
                  <h1 className='font-medium text-[8rem] underline'>SEE</h1>
                </small>
                <small className='absolute font-fivo font-medium select-none text-[8rem] translate-x-0 translate-y-80'>
                  AND
                </small>
                <small className='absolute font-fivo leading-tight select-none text-left text-sm text-xs" translate-x-[33rem] translate-y-24 w-20'>
                  Meet the Executives, directors & managers of tedxits 2022
                </small>
                <small className='absolute font-fivo font-medium select-none text-[8rem] translate-x-[30rem] translate-y-80 underline'>
                  SPEAK
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='-translate-y-[6.5rem] absolute flex inset-x-0 justify-center z-40'>
        {[...Array(2)].map((_, idx) => (
          <button
            onClick={() => {
              setActive(idx);
              setHidden(!hidden);
            }}
            key={idx}
            className={clsxm(
              'border flex h-7 items-center justify-center rounded-full w-7',
              [idx === active ? 'border-cgray' : 'border-transparent']
            )}
          >
            <span
              className={clsxm(
                'h-[14px] w-[14px]',
                'border border-cgray flex-shrink-0 rounded-full ',

                'duration-100 ease-in-out transition-all',
                [
                  idx === active
                    ? 'bg-cgray'
                    : 'hover:bg-cgray hover:shadow-md hover:shadow-white/20',
                ]
              )}
            >
              &nbsp;
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

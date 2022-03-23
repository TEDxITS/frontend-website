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
          'bg-meet-the-team h-[calc(100vh+64px)] pt-8 w-full bg-no-repeat bg-cover md:pt-16',
          [hidden ? hidden : 'hidden']
        )}
      >
        <Header isDark={false} />
        <div className='flex justify-center items-center w-full -translate-y-16'>
          <div className='grid-cols layout min-h-[calc(100vh-64px)] text-clight grid overflow-hidden relative'>
            <div className='flex flex-col justify-center items-center text-center lg:mt-0'>
              <div className='flex flex-col'>
                <h1 className='text-3xl font-normal sm:text-5xl'>
                  Who are we?
                </h1>
                <h1 className='text-3xl font-normal sm:text-5xl'>
                  #WeListenSeeSpeak
                </h1>
              </div>
            </div>
            <small className='font-fivo absolute inset-x-0 bottom-8 text-sm text-center md:bottom-16'>
              “We rise by lifting others” - Robert Ingersoll
            </small>
          </div>
        </div>
      </div>
      <div
        className={clsxm(
          'bg-cblue h-[calc(100vh+64px)] pt-8 w-full bg-no-repeat bg-cover md:pt-16',
          [hidden ? 'hidden' : hidden]
        )}
      >
        <Header isDark={false} />
        <div className='flex flex-wrap justify-center items-center -translate-y-20'>
          <div className='overflow-hidden relative z-40 w-full'>
            <div className='layout min-h-[calc(100vh-64px)] text-clight flex relative justify-items-center'>
              <div className='flex flex-col justify-center items-center w-full text-center lg:mt-0'>
                <NextImage
                  src='/images/meet-the-team/arrow.png'
                  width={42}
                  height={45}
                  alt='bg'
                  className='-translate-x-[36.2rem] absolute z-40 -translate-y-80'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='-translate-x-[36rem] absolute z-30 -translate-y-80'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='-translate-y-[18rem] -z-10 translate-x-[42rem] absolute'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='absolute z-20 -translate-x-80 translate-y-80'
                />
                <div className='aspect-h-9 aspect-w-16 bg-cdark overflow-hidden z-10 w-full rounded-2xl md:rounded-3xl'>
                  <ReactPlayer
                    url='https://www.youtube.com/embed/VinuTH1_4YI'
                    width={'100%'}
                    height={'100%'}
                    playing={false}
                    muted={true}
                    controls={true}
                  />
                </div>
                <small className='font-fivo text-[8rem] translate-x-[32rem] absolute font-medium -translate-y-56 select-none'>
                  MEET
                </small>
                <small className='font-fivo text-[8rem] translate-x-[36.5rem] absolute font-medium -translate-y-20 select-none'>
                  WE
                </small>
                <small className='-translate-x-[31rem] font-fivo absolute text-left -translate-y-24 select-none'>
                  <h1 className='text-[8rem] font-medium'>OUR</h1>
                  <h1 className='text-[8rem] font-medium'>TEAM,</h1>
                </small>
                <small className='-translate-x-[29.5rem] font-fivo absolute text-left translate-y-64 select-none'>
                  <h1 className='text-[8rem] font-medium underline'>LISTEN</h1>
                  <h1 className='text-[8rem] font-medium underline'>SEE</h1>
                </small>
                <small className='font-fivo text-[8rem] absolute font-medium translate-x-0 translate-y-80 select-none'>
                  AND
                </small>
                <small className='font-fivo text-xs" translate-x-[33rem] absolute w-20 text-sm leading-tight text-left translate-y-24 select-none'>
                  Meet the Executives, directors & managers of tedxits 2022
                </small>
                <small className='font-fivo text-[8rem] translate-x-[30rem] absolute font-medium underline translate-y-80 select-none'>
                  SPEAK
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='-translate-y-[6.5rem] flex absolute inset-x-0 z-40 justify-center'>
        {[...Array(2)].map((_, idx) => (
          <button
            onClick={() => {
              setActive(idx);
              setHidden(!hidden);
            }}
            key={idx}
            className={clsxm(
              'flex justify-center items-center w-7 h-7 rounded-full border',
              [idx === active ? 'border-cgray' : 'border-transparent']
            )}
          >
            <span
              className={clsxm(
                'h-[14px] w-[14px]',
                'border-cgray flex-shrink-0 rounded-full border ',

                'transition-all duration-100 ease-in-out',
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

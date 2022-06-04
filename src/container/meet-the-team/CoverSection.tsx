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
        <div className='flex flex-wrap justify-center items-center'>
          <div className='overflow-hidden relative z-40 w-full'>
            <div className='layout min-h-[calc(100vh-180px)] text-clight flex relative justify-items-center'>
              <div className='flex flex-col justify-center items-center w-full text-center lg:mt-0'>
                <NextImage
                  src='/images/meet-the-team/arrow.png'
                  width={42}
                  height={45}
                  alt='bg'
                  className='-translate-x-[10rem] absolute z-40 scale-75 -translate-y-32 sm:-translate-x-[20rem] sm:scale-100 sm:-translate-y-56 lg:-translate-x-[36.2rem] lg:-translate-y-80'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='-translate-x-[10rem] absolute z-30 scale-75 -translate-y-32 sm:-translate-x-[20rem] sm:scale-100 sm:-translate-y-56 lg:-translate-x-[36rem] lg:-translate-y-80'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='-translate-y-[18rem] -z-10 translate-x-[12rem] absolute scale-75 sm:translate-x-[22rem] sm:scale-100 lg:-translate-y-[18rem] lg:translate-x-[42rem]'
                />
                <NextImage
                  src='/images/meet-the-team/yellow-circle.png'
                  width={122}
                  height={122}
                  alt='bg'
                  className='absolute z-20 scale-75 -translate-x-24 translate-y-32 sm:scale-100 sm:-translate-x-56 sm:translate-y-48 lg:-translate-x-80 lg:translate-y-80'
                />
                <div className='aspect-h-9 aspect-w-16 bg-cdark overflow-hidden z-10 w-full rounded-2xl md:rounded-3xl'>
                  <ReactPlayer
                    url='https://www.youtube.com/embed/qtVxOYCuICw'
                    width={'100%'}
                    height={'100%'}
                    playing={false}
                    muted={true}
                    controls={true}
                  />
                </div>
                <small className='font-fivo text-[6rem] translate-x-[14rem] absolute font-medium -translate-y-48 select-none sm:translate-x-[18rem] sm:-translate-y-56 md:text-[8rem] lg:translate-x-[32rem]'>
                  MEET
                </small>
                <small className='font-fivo text-[6rem] translate-x-[16rem] absolute font-medium -translate-y-20 select-none sm:translate-x-[23rem] md:text-[8rem] lg:translate-x-[36.5rem]'>
                  WE
                </small>
                <small className='-translate-x-[16rem] font-fivo absolute text-left -translate-y-36 select-none sm:-translate-x-[20.5rem] lg:-translate-x-[31rem] lg:-translate-y-24'>
                  <h1 className='text-[6rem] mb-16 font-medium underline md:text-[8rem] md:mb-0'>
                    OUR
                  </h1>
                  <h1 className='text-[6rem] font-medium underline md:text-[8rem]'>
                    TEAM,
                  </h1>
                </small>
                <small className='-translate-x-[19rem] font-fivo absolute text-left translate-y-48 select-none sm:translate-y-64 lg:-translate-x-[29.5rem]'>
                  <h1 className='text-[6rem] mb-12 font-medium underline md:mb-0 lg:text-[8rem]'>
                    LISTEN
                  </h1>
                  <h1 className='text-[6rem] font-medium underline lg:text-[8rem]'>
                    SEE
                  </h1>
                </small>
                <small className='font-fivo text-[6rem] absolute font-medium translate-x-0 translate-y-56 select-none sm:translate-y-80 md:text-[8rem]'>
                  AND
                </small>
                <small className='font-fivo translate-x-[16rem] absolute w-20 text-sm leading-tight text-left translate-y-20 select-none sm:translate-x-[20rem] sm:translate-y-24 md:translate-x-[26rem] lg:translate-x-[33rem]'>
                  Meet the Executives, directors & managers of tedxits 2022
                </small>
                <small className='font-fivo text-[6rem] translate-x-[24rem] absolute font-medium underline translate-y-56 select-none sm:translate-y-80 md:text-[8rem] lg:translate-x-[30rem]'>
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

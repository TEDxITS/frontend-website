import React from 'react';
import { Reveal, Tween } from 'react-gsap';

import clsxm from '@/lib/clsxm';

import { TALK_DATA } from '@/data/main_event';

import NextImage from '@/components/NextImage';

export default function SpeakersTalkSection() {
  const [active, setActive] = React.useState<number>(0);

  const updateActive = (id: number) => {
    setActive(id);
  };

  return (
    <>
      {/* Desktop Version */}
      <Reveal
        trigger={
          <div className='hidden relative py-8 min-h-screen md:flex md:py-16' />
        }
      >
        <div className='layout flex z-10 flex-col gap-8 justify-between'>
          {/* header section */}
          <div className='flex gap-6'>
            <div className='w-[38%] flex-shrink-0'></div>
            <div className='flex flex-col w-full'>
              <div className='flex gap-6 w-full'>
                <div className='max-w-[8rem]'>
                  <p className='font-fivo text-[10px] leading-none select-none'>
                    Elephant in The Room
                  </p>
                </div>
                <div className='max-w-[8rem]'>
                  <p className='font-fivo text-[10px] leading-none select-none'>
                    The Unseen of Great Importance
                  </p>
                </div>

                <h2 className='font-pilow ml-auto 2xl:text-5xl'>
                  0{active + 1}
                </h2>
              </div>
              <div className={clsxm('ease transition-all duration-300')}>
                <Tween
                  from={{
                    opacity: 0,
                  }}
                  to={{
                    opacity: 1,
                  }}
                  duration={1}
                  stagger={0.5}
                  ease='power2.out'
                >
                  <div>
                    <h2 className='font-fivo font-medium 2xl:text-5xl'>
                      {TALK_DATA[active].name}
                    </h2>
                  </div>
                  <div>
                    <h4 className='font-fivo 2xl:text-2xl'>
                      &quot;{TALK_DATA[active].title}&quot;
                    </h4>
                  </div>
                </Tween>
              </div>
            </div>
          </div>
          {/* content section */}
          <div className='flex gap-4 justify-between'>
            <div className='flex relative justify-center w-full'>
              {/* Photo Section */}
              <div className='max-w-[60%] flex gap-4 w-full 2xl:max-w-[70%]'>
                <Tween
                  from={{
                    y: '50px',
                    opacity: 0,
                  }}
                  to={{
                    y: 0,
                    opacity: 1,
                  }}
                  duration={1}
                  stagger={1}
                  ease='power2.out'
                >
                  {TALK_DATA[active].photo.map((photo, i) => (
                    <div key={i} className='w-full'>
                      <NextImage
                        width={730}
                        height={932}
                        src={photo}
                        alt='Images'
                        className={clsxm(
                          'relative w-full drop-shadow-lg',
                          'ease transition-all duration-300',
                          'hover:-translate-y-2',

                          [i === 1 && 'delay-100', i === 2 && 'delay-200']
                        )}
                        useSkeleton
                      />
                    </div>
                  ))}
                </Tween>
              </div>
              {/* Navigation Section */}
              <div className='absolute right-0 top-1/2 flex-shrink-0 -translate-y-1/2'>
                <div className='min-w-[2rem] flex relative flex-col gap-4 justify-center items-center'>
                  {[...Array(TALK_DATA.length)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => updateActive(i)}
                      className={clsxm(
                        'z-10 flex-shrink-0 rounded-full cursor-pointer',
                        'ease transition-all duration-150 ',
                        'inline-flex justify-center items-center',
                        active === i
                          ? 'bg-clight text-cdark  font-bold w-8 h-8 '
                          : 'hover:text-cred h-6 w-6 bg-cdark border-0'
                      )}
                      style={{
                        filter:
                          active === i
                            ? 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
                            : 'none',
                      }}
                    >
                      <p className='mt-1 text-xs leading-none 2xl:text-sm'>
                        0{i + 1}
                      </p>
                    </button>
                  ))}
                  <div className='bg-clight w-[1px] absolute inset-y-0 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
            </div>
          </div>
          {/* footer section */}
          <div className='w-full'>
            <div className='flex gap-6'>
              <div className='w-[38%] flex-shrink-0'>
                <h3 className='font-fivo leading-none'>The</h3>
                <h2 className='text-7xl font-medium'>
                  TA<span className='font-pilow'>L</span>K.
                </h2>
              </div>
              <div className='flex flex-col w-full'>
                <NextImage
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656773590/merch/main-event/speaker-section/arrow-down_bhgck8.svg'
                  width={12}
                  height={12}
                  alt='arrow'
                  className='w-2'
                />
                <div className='flex gap-6 pb-2 mt-2'>
                  <Tween
                    from={{
                      y: '-50px',
                      opacity: 0,
                    }}
                    to={{
                      y: '0px',
                      opacity: 1,
                    }}
                    duration={1}
                    stagger={0.5}
                    ease='power2.out'
                  >
                    <div className='max-w-[12rem]'>
                      <p className='font-fivo text-[10px] leading-tight select-none 2xl:text-sm'>
                        {TALK_DATA[active].title_1}
                      </p>
                    </div>
                    <div className='max-w-[12rem]'>
                      <p className='font-fivo text-[10px] leading-tight select-none 2xl:text-sm'>
                        {TALK_DATA[active].title_2}
                      </p>
                    </div>
                  </Tween>

                  <NextImage
                    width={125}
                    height={100}
                    alt='X'
                    className='ml-auto w-16'
                    src='https://res.cloudinary.com/tedxits/image/upload/v1656569494/merch/main-event/landing-page/x-letter_he9uam.svg'
                  />
                </div>
              </div>
            </div>

            <div className='flex gap-4 items-end w-full'>
              <hr className='w-full' />
              <p className='text-[10px] leading-none'>Listen.See.Speak</p>
            </div>
          </div>
        </div>
        {/* background section */}
        <div
          style={{
            backgroundImage: `url(${TALK_DATA[active].backgroundImage})`,
          }}
          className={clsxm(
            'w-[40%] absolute inset-y-0 bg-cover',
            'ease transition-all duration-100'
          )}
        />
      </Reveal>
      {/* Mobile Version */}
      <Reveal
        trigger={<div className='flex relative py-8 min-h-screen md:hidden' />}
      >
        <div className='layout flex z-10 flex-col gap-8 justify-between'>
          {/* header section */}
          <div className='flex gap-4 w-full'>
            <div className='flex-shrink-0 w-1/2'>
              <h3 className='font-fivo leading-none'>The</h3>
              <h2 className='text-6xl font-medium'>
                TA<span className='font-pilow'>L</span>K.
              </h2>
            </div>

            <div className='flex gap-2 w-full'>
              <p className='font-fivo max-w-[8rem] text-[10px] leading-none select-none'>
                Elephant in The Room
              </p>
              <p className='font-fivo max-w-[8rem] text-[10px] leading-none select-none'>
                The Unseen of Great Importance
              </p>
            </div>
          </div>
          {/* content section */}
          <div className='flex relative flex-col gap-8 justify-center w-full'>
            {/* name section */}
            <div className='flex gap-4 w-full'>
              <h2 className='font-pilow'>0{active + 1}</h2>

              <div className={clsxm('ease transition-all duration-300')}>
                <Tween
                  from={{
                    opacity: 0,
                  }}
                  to={{
                    opacity: 1,
                  }}
                  duration={1}
                  stagger={0.5}
                  ease='power2.out'
                >
                  <div>
                    <h3 className='font-fivo font-medium'>
                      {TALK_DATA[active].name}
                    </h3>
                  </div>
                  <div>
                    <p className='font-fivo text-sm'>
                      {TALK_DATA[active].title}
                    </p>
                  </div>
                </Tween>
              </div>
            </div>
            {/* Photo Section */}
            <div className='hidden-scrollbar snap-x flex overflow-scroll gap-4 w-full max-w-full'>
              <Tween
                from={{
                  y: '20px',
                  opacity: 0,
                }}
                to={{
                  y: '0px',
                  opacity: 1,
                }}
                duration={1}
                stagger={0.5}
                ease='power2.out'
              >
                {TALK_DATA[active].photo.map((photo, i) => (
                  <div key={i} className='min-w-[55%] w-full'>
                    <NextImage
                      width={730}
                      height={932}
                      src={photo}
                      alt='Images'
                      className={clsxm(
                        'min-w-[55%] relative w-full drop-shadow-lg',
                        'ease transition-all duration-300',
                        [i === 1 && 'delay-100', i === 2 && 'delay-200']
                      )}
                      useSkeleton
                    />
                  </div>
                ))}
              </Tween>
            </div>
            {/* description section */}
            <div className='flex flex-col w-full'>
              <NextImage
                src='https://res.cloudinary.com/tedxits/image/upload/v1656773590/merch/main-event/speaker-section/arrow-down_bhgck8.svg'
                width={12}
                height={12}
                alt='arrow'
                className='w-2'
              />
              <div className='flex gap-6 mt-2'>
                <p className='font-fivo text-[10px] w-full leading-tight select-none'>
                  {`${TALK_DATA[active].title_1}. ${TALK_DATA[active].title_2}`}
                </p>

                <NextImage
                  width={125}
                  height={100}
                  alt='X'
                  className='ml-auto w-16'
                  src='https://res.cloudinary.com/tedxits/image/upload/v1656569494/merch/main-event/landing-page/x-letter_he9uam.svg'
                />
              </div>
            </div>
          </div>

          {/* footer section */}
          <div className='flex flex-col gap-4 w-full'>
            {/* Navigation Section */}
            <div className='min-h-[2rem] flex relative gap-3 justify-evenly items-center w-full'>
              {[...Array(TALK_DATA.length)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => updateActive(i)}
                  className={clsxm(
                    'z-10 flex-shrink-0 rounded-full cursor-pointer',
                    'ease transition-all duration-150 ',
                    'inline-flex justify-center items-center',
                    active === i
                      ? 'bg-clight text-cdark font-bold w-8 h-8 '
                      : 'hover:text-cred h-5 w-5 bg-cdark border-0'
                  )}
                  style={{
                    filter:
                      active === i
                        ? 'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
                        : 'none',
                  }}
                >
                  <p className='mt-1 text-xs leading-none'> 0{i + 1}</p>
                </button>
              ))}
              <div className='bg-clight h-[1px] absolute inset-x-0 top-1/2 w-full -translate-y-1/2'></div>
            </div>

            <div className='flex justify-end w-full'>
              <p className='text-[10px] leading-none'>Listen.See.Speak</p>
            </div>
          </div>
        </div>
        {/* background section */}
        <div
          className={clsxm(
            'w-[50%] absolute inset-y-0',
            'ease transition-all duration-100'
          )}
        >
          <div
            style={{
              backgroundImage: `url(${TALK_DATA[active].backgroundImage})`,
            }}
            className='absolute inset-0 bg-fixed bg-center bg-cover'
          />
          <div className='bg-cdark/50 absolute inset-0 backdrop-blur-sm'></div>
        </div>
      </Reveal>
    </>
  );
}

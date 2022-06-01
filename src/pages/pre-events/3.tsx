import * as React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { GoPlay } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import { pre_event_3_data, pre_event_3_images } from '@/data/event';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function PreEventsPage() {
  return (
    <Layout>
      <Seo templateTitle='Pre-events' />

      <main className={clsxm(` relative flex flex-col`)}>
        <section
          id='explore'
          className='flex flex-col gap-8 pt-8 relative z-20 md:pt-16'
        >
          <Header />
          <div className='grid overflow-hidden'>
            <div className='flex flex-wrap gap-y-8 items-center layout min-h-[calc(100vh-64px-64px)] pb-16 md:min-h-[calc(100vh-64px-96px)]'>
              <div
                className={clsxm(
                  ' min-h-[calc(100vh-64px-64px)] pr-0 md:min-h-0 md:pr-8 md:translate-y-0',
                  'duration-200 flex flex-col gap-y-10 justify-center transition-all w-full md:w-2/3'
                )}
              >
                <div className='flex gap-4 max-w-[80%] md:max-w-xs'>
                  <NextImage
                    width={287.63}
                    height={275.9}
                    src={pre_event_3_data.logo}
                    alt={`Elephant logo`}
                    className='drop-shadow-lg flex-shrink-0 w-16 md:w-20'
                  />
                  <p className='text-justify text-sm'>
                    {pre_event_3_data.logoText}
                  </p>
                </div>
                <div>
                  <h2 className='font-fivo'>{pre_event_3_data.subTitle}</h2>
                  <h1 className='font-bold font-fivo mt-2'>
                    {pre_event_3_data.title}
                  </h1>
                </div>
                <ArrowDown className='w-16' />
                <p className='text-lg'>{pre_event_3_data.description}</p>
                <UnstyledLink
                  href='#watch'
                  className='cursor-pointer duration-200 ease flex gap-4 items-center origin-left select-none transition-all hover:animate-flicker hover:scale-105'
                >
                  <GoPlay size={40} />
                  <h2 className='font-fivo'>See Documentation</h2>
                </UnstyledLink>
              </div>
            </div>
          </div>
        </section>
        <div className='absolute bg-cover bg-gradient-red bg-no-repeat drop-shadow-md inset-0 z-10'></div>
        <div
          className={clsxm(
            `absolute bg-fixed inset-0 bg-cover opacity-40 bg-no-repeat bg-center transition-all duration-200 ease`
          )}
          style={{
            backgroundImage: `url(${pre_event_3_data.backgroundImage})`,
          }}
        />
      </main>

      {/* carousel image */}
      <main className='bg-cdark flex justify-center min-h-screen py-20 relative'>
        <div
          className='flex flex-col gap-16 justify-between layout z-10'
          id='watch'
        >
          <div className='flex gap-4'>
            <NextImage
              width={287.63}
              height={275.9}
              src={pre_event_3_data.logo}
              alt={`Elephant logo`}
              className='flex-shrink-0 hidden w-16 md:block md:w-20'
            />
            <div className='border-clight border-l pl-4'>
              <p className='text-lg'>{pre_event_3_data.thumbnail.subTitle}</p>
              <p className='font-bold leading-none mt-4 text-xl'>
                {pre_event_3_data.thumbnail.title}
              </p>
              <p className='leading-none mt-1'>
                {pre_event_3_data.thumbnail.description}
              </p>
            </div>
          </div>
          {/* carousel */}
          <CarouselSection />
          <div className='flex items-center justify-between w-full'>
            <small className='font-fivo text-sm'>
              <span className='font-extrabold'>TED</span>
              <span className='font-bold'>x</span>
              <span>ITS</span>
            </small>
            <small className='font-fivo font-normal text-sm'>© 2022</small>
          </div>
        </div>
        <div
          className='absolute bg-center bg-cover bg-no-repeat inset-0 opacity-40 pointer-events-none'
          style={{
            backgroundImage: `url(${pre_event_3_data.textureImage})`,
          }}
        />
      </main>
    </Layout>
  );
}

function ArrowDown({ ...rest }: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 33.71 33.64'
      {...rest}
    >
      <path
        d='m943.33 525.86 3.16-3.16 26.35 26.36-.06-21.72H977l-.06 29H948v-4.13h21.78Z'
        transform='translate(-943.33 -522.7)'
        style={{
          fill: '#f0eeeb',
        }}
      />
    </svg>
  );
}

function CarouselSection() {
  const [active, setActive] = React.useState<number>(0);
  const IMAGE_TOTAL = pre_event_3_images.length;

  const scrollToComponent = (id: number) => {
    const element = document.getElementById(`carousel-${id}`);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  const selectImage = (id: number) => {
    setActive(id);
    scrollToComponent(id);
  };

  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className='flex gap-1 hidden-scrollbar items-center overflow-x-scroll snap-x w-full'>
        {pre_event_3_images.map((image, i) => (
          <div
            onClick={() => selectImage(i)}
            className={clsxm(
              '  relative snap-center w-full',
              i === active
                ? 'z-10  min-w-[calc((100%/2)+2rem)] lg:min-w-[calc((100%/4)+4rem)] '
                : 'min-w-[calc((100%/2)-1rem)] lg:min-w-[calc((100%/4)-1rem)] '
            )}
            key={i}
            id={`carousel-${i}`}
          >
            <NextImage
              alt=''
              src={image}
              className={clsxm(
                'duration-200 ease transition-all',
                i === active
                  ? 'aspect-w-1 aspect-h-1'
                  : 'aspect-h-12 aspect-w-16 '
              )}
              objectFit='cover'
              layout='fill'
              useSkeleton
            />
          </div>
        ))}
        <div
          id={`carousel-${IMAGE_TOTAL}`}
          className={clsxm(
            'relative snap-center w-full ',
            'min-w-[calc((100%/2)+2rem)] z-10 lg:min-w-[calc((100%/4)+4rem)] '
          )}
        >
          <div
            className={clsxm(
              'duration-500 ease-in overflow-hidden relative transition-all',
              'aspect-h-1 aspect-w-1 ',
              active === IMAGE_TOTAL - 1 ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div className='flex flex-col h-full justify-between p-8 w-full z-10'>
              <div className='flex flex-col gap-4 w-full'>
                <hr
                  className={clsxm(
                    'delay-150',
                    'duration-500 ease-in origin-left relative rotate-90 transition-all',

                    active === IMAGE_TOTAL - 1 ? 'w-full' : 'w-0'
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 relative w-full md:flex-row md:gap-8'>
        {/* Track */}
        <div className='bg-clight h-[2px] relative w-full'>
          <div
            className='absolute bg-cred duration-200 ease-in h-[2px] left-0 transition-all'
            style={{
              width: `${Math.floor((active * 100) / (IMAGE_TOTAL - 1))}%`,
            }}
          ></div>
        </div>
        <div className='hidden md:block'>
          <div className='flex gap-4'>
            {[...Array(IMAGE_TOTAL)].map((_, i) => (
              <button key={i} onClick={() => selectImage(i)}>
                <p
                  className={clsxm(
                    'duration-200 ease transition-all',
                    i === active ? 'text-cred scale-150 font-bold' : ''
                  )}
                >
                  {i + 1}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className='block md:hidden'>
          <div className='flex gap-2 justify-center'>
            <button
              disabled={active <= 0}
              className={clsxm(
                'text-clight hover:text-clight/70',
                'cursor-not-allowed disabled:text-clight/50'
              )}
              onClick={() => active > 0 && selectImage(active - 1)}
            >
              <AiOutlineArrowLeft size={25} />
            </button>
            <p>
              {active + 1}/{IMAGE_TOTAL}
            </p>
            <button
              disabled={active >= IMAGE_TOTAL - 1}
              className={clsxm(
                'text-clight hover:text-clight/70',
                'cursor-not-allowed disabled:text-clight/50'
              )}
              onClick={() =>
                active < IMAGE_TOTAL - 1 && selectImage(active + 1)
              }
            >
              <AiOutlineArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';
import { GoPlay } from 'react-icons/go';

import clsxm from '@/lib/clsxm';

import { pre_event_3_data } from '@/data/event';

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
          className='flex relative z-20 flex-col gap-8 pt-8 md:pt-16'
        >
          <Header />
          <div className='grid overflow-hidden'>
            <div className='layout min-h-[calc(100vh-64px-64px)] flex flex-wrap gap-y-8 items-center pb-16 md:min-h-[calc(100vh-64px-96px)]'>
              <div
                className={clsxm(
                  ' min-h-[calc(100vh-64px-64px)] pr-0 md:pr-8 md:min-h-0 md:translate-y-0',
                  'flex flex-col gap-y-10 justify-center w-full transition-all duration-200 md:w-2/3'
                )}
              >
                <div className='max-w-[80%] flex gap-4 md:max-w-xs'>
                  <NextImage
                    width={287.63}
                    height={275.9}
                    src={pre_event_3_data.logo}
                    alt={`Elephant logo`}
                    className='flex-shrink-0 w-16 drop-shadow-lg md:w-20'
                  />
                  <p className='text-sm text-justify'>
                    {pre_event_3_data.logoText}
                  </p>
                </div>
                <div>
                  <h2 className='font-fivo'>{pre_event_3_data.subTitle}</h2>
                  <h1 className='font-fivo mt-2 font-bold'>
                    {pre_event_3_data.title}
                  </h1>
                </div>
                <ArrowDown className='w-16' />
                <p className='text-lg'>{pre_event_3_data.description}</p>
                <UnstyledLink
                  href='#watch'
                  className='ease flex gap-4 items-center transition-all duration-200 origin-left cursor-pointer select-none hover:animate-flicker hover:scale-105'
                >
                  <GoPlay size={40} />
                  <h2 className='font-fivo'>Watch Now</h2>
                </UnstyledLink>
              </div>
            </div>
          </div>
        </section>
        <div className='bg-gradient-red absolute inset-0 z-10 bg-no-repeat bg-cover drop-shadow-md'></div>
        <div
          className={clsxm(
            `absolute bg-fixed inset-0 bg-cover opacity-40 bg-no-repeat bg-center transition-all duration-200 ease`
          )}
          style={{
            backgroundImage: `url(${pre_event_3_data.backgroundImage})`,
          }}
        />
      </main>

      <main
        id='watch'
        className='bg-cdark flex relative flex-col justify-center items-center py-16 min-h-screen'
      ></main>
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

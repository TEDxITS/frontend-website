/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import GuidebookSection from '@/container/cfs/GuidebookSection';
import RegistrationForm from '@/container/cfs/RegistrationForm';

import TitleCfsRegistration from '@/assets/svg/TitleCfsRegistration';

export default function CfsPage() {
  return (
    <Layout>
      <Seo templateTitle='Call for Local Speaker' />
      <main className='bg-[#E6E6E6] bg-texture flex overflow-hidden flex-col gap-8 pt-8 md:pt-16'>
        <Header isDark={true} />
        <section className='layout min-h-main grid'>
          <GuidebookSection />
        </section>
        <section className='relative'>
          <img
            src='/images/cfs/bg-torn-paper.png'
            alt=''
            className='absolute drop-shadow-2xl'
          />
          <div className='relative drop-shadow-2xl'>
            <BackgroundPath />
            <div className='bg-[#d7d5d2]'>
              <div
                id='registration'
                className='layout flex flex-col gap-16 items-center pb-32'
              >
                <TitleCfsRegistration className='w-3/4 md:w-1/2 lg:w-1/3' />
                <RegistrationForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function BackgroundPath() {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 241.33'
    >
      <path
        d='M5.14 125.71c2.79-3.11 39.12-15.18 43.72-14.71 10.24 1 16 12.6 30.91 12.58 11.26 0 13.29-.81 23.52-5.39 13.4-6 14-12.86 30.61-15.61 9.15-1.52 19.23 1.87 28.28.11C180.92 99 200.41 84.22 219 78.07c17.72 32.56 10.19 26.88 38.77 11.39 28.84-15.63 58.33-9.16 64.11 20.8 9.1-3.18 16.45-10 25.37-14.5 18.87 29 60.29 21.51 92.58 17.1 26.38-3.61 43.24 10.32 72 10.27 47.44-.07 36.17 19.31 62.13 49 21.62-9.77 27-34.63 42.31-44.56s12.85.32 29.25 2.73c16.85 2.48 29.71-3.39 46-12.84 7.24-4.21 25.77-13 31.75-17.88 7.08-5.76 11.28-18.85 16.56-22.68 11.68-8.48 18.07-3.29 31.22-7.75 10.59-3.58 13.25-9.91 22.18-15.65 19.2-12.31 34.6-6.34 58.18-8.11 8-.61 10.22-9.93 20.42-6.12 8.43 3.15 4.13 19.45 11.74 25 11.91 8.69 28.92-3.32 39.82 6.58 7.14 6.49 1.71 17.29 5.35 24 4.21 7.79 19 26.89 27.53 28.71 12.9 2.74 22.75-12.61 36-16 6.56 8.06 8.78 24.37 15.69 31 7.37 7.07 21 3.83 27 10.21 8 8.56.17 20.85 5.52 29.62 7.21 11.83 33.56 21.58 45.07 27.66 6.75-7.68 12-16.69 19.44-23.93 23 13 25.27 20 56.24 18.16 8.94-.54 19.62-4.77 28-1.39 6.77 2.74 8 15.14 16.2 17.19 18.67 4.63 27.07-13.68 42.26-21.23 7.49-3.73 13 2 19.72-1.29 14.14-7.05 26.49-21.33 41.38-29 20.14-10.36 36.44-13.58 59.37-5.9 11 3.7 24.92 18.49 36 19.85 23 2.84 16.35-17.9 34.8-24.62 6.59-2.4 22.36 6.82 32 5.18v757.5H-30.86v-801.9Z'
        style={{
          fill: '#d7d5d2',
        }}
      />
    </svg>
  );
}

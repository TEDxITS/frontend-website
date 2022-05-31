/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { pre_event_3_data } from '@/data/event';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import CoverSection from '@/container/home/CoverSection';
import MissionSection from '@/container/home/MissionSection';
import RegisterSection from '@/container/home/RegisterSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-cgray flex flex-col'>
        <section className='bg-blob-1 bg-bottom bg-cdark bg-cover bg-no-repeat h-full pt-8 relative text-clight z-20 md:pt-16'>
          <div
            className='absolute bg-center bg-cover inset-0 opacity-20'
            style={{
              backgroundImage: `url(${pre_event_3_data.backgroundImage})`,
            }}
          ></div>
          <div className='absolute bg-cover bg-gradient-to-b from-transparent inset-0 to-cdark z-10'></div>
          <Header />
          <CoverSection />
          <NextImage
            priority={true}
            src='/images/background/bg-bottom-1.png'
            width={1276}
            height={178}
            alt='bottom'
            className='absolute bottom-0 drop-shadow-md translate-y-[98%] w-full'
          />
        </section>
        <section className={clsxm('flex flex-col relative z-10')}>
          <MissionSection />
        </section>
        <section className='bg-blob-green bg-bottom bg-cover bg-no-repeat flex flex-col items-center justify-center overflow-hidden pb-32 pt-80 relative'>
          <RegisterSection />
        </section>
      </main>
    </Layout>
  );
}

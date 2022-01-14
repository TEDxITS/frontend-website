/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CoverSection from '@/container/home/CoverSection';
import MissionSection from '@/container/home/MissionSection';
import RegisterSection from '@/container/home/RegisterSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className='flex flex-col'>
        <section className='/ bg-home pb-[27%] text-clight relative z-20 pt-8 bg-no-repeat bg-cover drop-shadow-md md:pt-16'>
          <Header />
          <CoverSection />
        </section>
        <section className='relative z-10 -mb-40 -translate-y-40'>
          <MissionSection />
        </section>
        <section className='/ bg-volunteer min-h-main flex relative flex-col justify-center items-center pt-80 pb-32 -mb-20 bg-no-repeat bg-cover -translate-y-20'>
          <RegisterSection />
        </section>
      </main>
    </Layout>
  );
}

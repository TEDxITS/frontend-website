/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CoverSection from '@/container/positionOpen/CoverSection';
import PositionsSection from '@/container/positionOpen/PositionsSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='bg-cgray flex flex-col'>
        <section className='bg-cdark bg-home text-clight relative z-20 pt-8 h-full bg-bottom bg-no-repeat bg-cover md:pt-16'>
          <Header />
          <CoverSection />
          <img
            src='/images/bg-positionOpen-bottom.png'
            width={6003}
            height={756}
            alt='bottom'
            className='translate-y-[99%] absolute bottom-0 w-full drop-shadow-md'
          />
        </section>
        <section className={clsxm('flex relative z-10 flex-col')}>
          <PositionsSection />
        </section>
      </main>
    </Layout>
  );
}

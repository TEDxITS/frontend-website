/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

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
      <main className='bg-cgray flex flex-col'>
        <section
          className={clsxm(
            'bg-home bg-center bg-no-repeat bg-cover',
            'text-clight relative z-20 drop-shadow-md',
            'pb-[27vh] pt-8 md:pb-[27%] md:pt-16',
            '-mb-[25%] lg:-mb-[18%]'
          )}
        >
          <Header />
          <CoverSection />
        </section>
        <section className={clsxm('relative z-10', '-mb-[12vh] lg:-mb-[20vh]')}>
          <MissionSection />
        </section>

        <section
          className={clsxm(
            'bg-volunteer overflow-hidden bg-bottom bg-no-repeat bg-cover',
            'flex relative flex-col justify-center items-center',
            'pt-80 pb-32 lg:pt-[50vh]'
          )}
        >
          <RegisterSection />
        </section>
      </main>
    </Layout>
  );
}

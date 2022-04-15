import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import HistorySection from '@/container/ticketing/history/HistorySection';

export default function HistoryPage() {
  return (
    <Layout
      showFooter={true}
      withDashboard={true}
      className='bg-clight z-20 min-h-screen'
    >
      <Seo templateTitle='History' />

      <main className='bg-clight min-h-[65vh] flex overflow-hidden flex-col'>
        {/* <NextImage
          src='/images/history/blue-blob-2.png'
          width={500}
          height={500}
          alt='sticker'
          quality={100}
          className='-top-24 absolute scale-50 sm:-right-40 sm:scale-100 sm:top-4'
        /> */}
        <section className='relative z-20 px-4 py-8'>
          <HistorySection />
        </section>
      </main>
    </Layout>
  );
}

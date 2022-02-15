import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import MyModal from '@/components/tabs/Modal';
import CoverSection from '@/container/poMerch/CoverSection';
import ProductsSection from '@/container/poMerch/ProductsSection';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main className='bg-cgray over text-cdark pt-8 md:pt-16'>
        <MyModal />
        <Header />
        <section className='bg-cgray text-cdark flex overflow-hidden relative flex-col'>
          <CoverSection />
          <section id='products'>
            <ProductsSection />
          </section>
        </section>
      </main>
    </Layout>
  );
}

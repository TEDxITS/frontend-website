import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CoverSection from '@/container/merch/CoverSection';
import ProductsSection from '@/container/merch/ProductsSection';

export default function MerchPage() {
  return (
    <Layout>
      <Seo templateTitle='Merch' />
      <main className='bg-cgray over pt-8 md:pt-16'>
        <Header isDark={true} />
        <section className='bg-cgray flex overflow-hidden relative flex-col'>
          <CoverSection />
          <ProductsSection />
        </section>
      </main>
    </Layout>
  );
}

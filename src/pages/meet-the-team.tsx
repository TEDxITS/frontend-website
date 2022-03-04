import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StaffSection from '@/container/team/StaffSection';
// import CoverSection from '@/container/merch/CoverSection';
// import ProductsSection from '@/container/merch/ProductsSection';
import TeamSection from '@/container/team/TeamSection';

export default function MerchPage() {
  return (
    <Layout>
      <Seo templateTitle='Merch' />
      <main className='bg-cgray pt-8 md:pt-16'>
        <Header isDark={true} />
        <section className='bg-cblue flex overflow-hidden relative flex-col'>
          <TeamSection />
          {/* <CoverSection />
          <ProductsSection /> */}
        </section>
        <section className='bg-cdark flex overflow-hidden relative flex-col'>
          <StaffSection />
        </section>
      </main>
    </Layout>
  );
}

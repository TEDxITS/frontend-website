/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ProfilePage() {
  return (
    <Layout>
      <Seo templateTitle='Profile' />
      <main className='bg-clight flex flex-col'>
        <section className='flex relative z-10 flex-col gap-8 pt-8 md:pt-16'>
          <Header isDark={true} />
        </section>
      </main>
    </Layout>
  );
}

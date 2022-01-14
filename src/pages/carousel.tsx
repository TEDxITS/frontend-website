import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { Example } from '@/container/Carousel';

export default function CarouselPage() {
  return (
    <Layout>
      <Seo templateTitle='Carousel' />

      <main>
        <section className=''>
          <div className='/ layout py-20 min-h-screen'>
            <Example />
          </div>
        </section>
      </main>
    </Layout>
  );
}

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ComponentPage() {
  return (
    <Layout
      withDashboard={true}
      // fill your background color and styling here
      className='bg-blob-1 min-h-screen bg-no-repeat bg-cover'
    >
      <Seo templateTitle='Component' />

      <main className='py-8 min-h-screen md:py-16'>
        <p>
          This is not protected page, you can access this page without login
        </p>
        {/* this is your content */}
        <section className='bg-cgreen layout flex relative flex-col'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quo
          deserunt atque consequuntur mollitia excepturi doloribus dolore,
          aspernatur tenetur quis quasi officia incidunt suscipit nobis eaque.
          Nihil sint dolorum distinctio. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quas quo deserunt atque consequuntur mollitia
          excepturi doloribus dolore, aspernatur tenetur quis quasi officia
          incidunt suscipit nobis eaque. Nihil sint dolorum distinctio. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quas quo deserunt
          atque consequuntur mollitia excepturi doloribus dolore, aspernatur
          tenetur quis quasi officia incidunt suscipit nobis eaque. Nihil sint
          dolorum distinctio.
        </section>
      </main>
    </Layout>
  );
}

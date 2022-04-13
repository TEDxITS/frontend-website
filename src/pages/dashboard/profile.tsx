import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import ProfileForm from '@/container/ticketing/profile/ProfileForm';

export default function ComponentPage() {
  return (
    <Layout
      showFooter={true}
      withDashboard={true}
      className='bg-clight min-h-screen z-20'
    >
      <Seo templateTitle='Profile' />

      <main className='bg-clight flex flex-col'>
        <NextImage
          src='/images/ticketing/blue-blob-2.png'
          width={500}
          height={500}
          alt='sticker'
          quality={100}
          className='-top-24 absolute scale-50 sm:-right-40 sm:scale-100 sm:top-4'
        />
        {/* <NextImage
          src='/images/ticketing/blue-blob-1.png'
          width={500}
          height={500}
          alt='sticker'
          quality={100}
          className='-bottom-60 -translate-x-6 absolute left-0 scale-50 sm:scale-100'
        /> */}
        <section className='px-4 py-8 relative z-20'>
          <ProfileForm />
        </section>
      </main>
    </Layout>
  );
}

import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import ProfileForm from '@/container/ticketing/profile/ProfileForm';

export default function ComponentPage() {
  return (
    <Layout
      withDashboard={true}
      className='bg-blob-1 min-h-screen bg-no-repeat'
    >
      <Seo templateTitle='Profile' />

      <main className='min-h-screen'>
        <section className='flex relative flex-col'>
          <ProfileForm />
        </section>
      </main>
    </Layout>
  );
}

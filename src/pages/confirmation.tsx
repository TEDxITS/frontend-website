/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import OrderSummary from '@/container/ticketing/OrderSummary';

export default function offlineNoKit() {
  return (
    <Layout withDashboard={true}>
      <Seo templateTitle='Checkout' />
      <main className='bg-cgray flex overflow-hidden flex-col gap-8 pt-8 md:pt-16'>
        <div className='flex justify-center'>
          <OrderSummary />
        </div>
      </main>
    </Layout>
  );
}

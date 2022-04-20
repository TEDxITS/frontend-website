/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import OfflineCheckout from '@/container/ticketing/OfflineCheckout';
import TicketingCard from '@/container/ticketing/TicketingCard';

export default function offlineNoKit() {
  return (
    <Layout withDashboard={true} className='bg-cgray' isDark={true}>
      <Seo templateTitle='Checkout' />
      <main className='bg-cgray flex overflow-hidden flex-col gap-8 pt-8 md:pt-16'>
        <div className='flex gap-16 justify-center'>
          <TicketingCard type='offline-no-kit'>
            <h4 className='text-cdark text-xl font-bold'>Price</h4>
            <h1 className='text-cdark'>
              110k
              <span className='text-cdark text-2xl font-normal'>/ticket</span>
            </h1>
          </TicketingCard>
          <div className='bg-clight h-fit w-[calc(100vw-4rem)] relative mb-10 rounded-3xl drop-shadow-lg sm:w-[calc(100vw-8rem)] md:w-[40rem] hover:drop-shadow-xl'>
            <div
              id='registration'
              className='layout py-[2.5rem] flex flex-col gap-16 items-center w-full'
            >
              <OfflineCheckout />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

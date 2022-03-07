import * as React from 'react';

import { executives } from '@/data/team';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CoverSection from '@/container/meet-the-team/CoverSection';
import Executives from '@/container/meet-the-team/ExecutivesBoard';
import ManagersSection from '@/container/meet-the-team/ManagersSection';
import MeetTheElephant from '@/container/meet-the-team/MeetTheElephant';
import StaffSection from '@/container/meet-the-team/StaffSection';

import YellowLine from '@/assets/svg/YellowLine';
import YellowLine2 from '@/assets/svg/YellowLine2';

export default function MerchPage() {
  return (
    <Layout className='bg-transparent'>
      <Seo templateTitle='Meet The Team' />
      <main>
        <section>
          <CoverSection />
        </section>
        <section className='bg-cgray flex overflow-hidden relative flex-col'>
          <YellowLine className='absolute -left-56 scale-50 translate-y-12 sm:-left-24 sm:scale-75 lg:-left-4 lg:scale-100' />
          <MeetTheElephant />
        </section>
        <section className='bg-cblue bg-texture flex overflow-hidden relative flex-col'>
          <div className='bg-cgray h-[12rem] rounded-b-[70%] pt-14 sm:pt-12'>
            <Executives data={executives} />
          </div>
          <YellowLine2 className='-rotate-[45deg] absolute -left-24 z-0 translate-y-48' />
          <div className='pt-[28rem]'>
            <ManagersSection />
          </div>
        </section>
        <section className='bg-cdark flex overflow-hidden relative flex-col'>
          <StaffSection />
        </section>
      </main>
    </Layout>
  );
}

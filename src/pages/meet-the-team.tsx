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
import YellowLine3 from '@/assets/svg/YellowLine3';

export default function MerchPage() {
  return (
    <Layout className='bg-transparent'>
      <Seo templateTitle='Meet The Team' />
      <main>
        <section>
          <CoverSection />
        </section>
        <section className='bg-clight bg-texture flex overflow-hidden relative flex-col'>
          <YellowLine className='absolute -left-56 z-0 brightness-95 scale-50 translate-y-12 sm:-left-24 sm:scale-75 lg:-left-4 lg:scale-100' />
          <MeetTheElephant />
        </section>
        <section className='bg-cblue bg-texture flex overflow-hidden relative flex-col'>
          <div className='bg-clight bg-texture h-[12rem] rounded-b-[70%] shadow-2xl'>
            <Executives data={executives} />
          </div>
          <YellowLine2 className='-rotate-[45deg] absolute -left-24 z-0 brightness-95 translate-y-48' />
          <div className='pt-[29rem]'>
            <ManagersSection />
          </div>
        </section>
        <section className='bg-cdark flex overflow-hidden relative flex-col'>
          <YellowLine2 className='-rotate-[15deg] absolute -left-28 top-72 z-0 brightness-95' />
          <YellowLine3 className='top-[82rem] absolute -right-96 z-0 brightness-95' />
          <YellowLine2 className='-rotate-[15deg] top-[164rem] absolute -left-28 z-0 brightness-95' />
          <YellowLine2 className='-rotate-[15deg] -scale-100 top-[258rem] absolute -right-28 z-0 brightness-95' />
          <YellowLine3 className='-scale-100 top-[324rem] absolute -left-96 z-0 brightness-95' />
          <YellowLine3 className='top-[428rem] absolute -right-96 z-0 brightness-95' />
          <YellowLine2 className='-rotate-[15deg] top-[512rem] absolute -left-28 z-0 brightness-95' />
          <YellowLine2 className='-rotate-[15deg] -scale-100 bottom-[102rem] absolute -right-28 z-0 brightness-95' />
          <YellowLine3 className='-scale-100 bottom-[28rem] absolute -left-96 z-0 brightness-95' />
          <StaffSection />
        </section>
      </main>
    </Layout>
  );
}

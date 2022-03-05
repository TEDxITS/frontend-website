import * as React from 'react';

import { executives } from '@/data/team';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import CoverSection from '@/container/meet-the-team/CoverSection';
import Executives from '@/container/meet-the-team/ExecutivesBoard';
import ManagersSection from '@/container/meet-the-team/ManagersSection';
import MeetTheElephant from '@/container/meet-the-team/MeetTheElephant';

import YellowLine from '@/assets/svg/YellowLine';
import YellowLine2 from '@/assets/svg/YellowLine2';

export default function MerchPage() {
  return (
    <Layout className='bg-transparent'>
      <Seo templateTitle='Meet The Team' />
      <main className='overflow-hidden relative'>
        <div>
          <CoverSection />
        </div>
        <div className='bg-cgray flex relative flex-col shadow-xl'>
          <YellowLine className='absolute -left-56 scale-50 translate-y-12 sm:-left-24 sm:scale-75 lg:-left-4 lg:scale-100' />
          <NextImage
            src='/images/meet-the-team/foot-transparent.png'
            width={779}
            height={720}
            alt='bg'
            className='h-[410px] w-[469px] absolute top-28 -right-56 z-0 sm:top-48 lg:h-[720px] lg:w-[779px] lg:-right-80'
          />
          <NextImage
            src='/images/meet-the-team/foot-transparent.png'
            width={779}
            height={720}
            alt='bg'
            className='bottom-[35rem] h-[410px] rotate-[160deg] w-[469px] absolute -left-56 z-0 lg:-left-[18rem] lg:h-[720px] lg:w-[779px]'
          />
          <MeetTheElephant />
          <Executives data={executives} />
        </div>
        <div className='bg-cblue bg-texture flex flex-col'>
          <YellowLine2 className='-rotate-[45deg] absolute -left-24 z-0 -translate-y-24' />
          <ManagersSection />
        </div>
      </main>
    </Layout>
  );
}

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
        <div className='bg-cgray flex relative flex-col'>
          <YellowLine className='absolute -left-56 scale-50 translate-y-12 sm:-left-24 sm:scale-75 lg:-left-4 lg:scale-100' />
          <NextImage
            src='/images/meet-the-team/foot-transparent.png'
            width={779}
            height={720}
            alt='bg'
            className='h-[410px] w-[469px] absolute top-28 -right-56 z-0 -translate-y-36 sm:top-48 lg:-right-48 xl:h-[720px] xl:w-[779px]'
          />
          <NextImage
            src='/images/meet-the-team/foot-transparent.png'
            width={779}
            height={720}
            alt='bg'
            className='bottom-[35rem] h-[410px] rotate-[160deg] translate-y-[48rem] w-[469px] absolute -left-56 z-0 sm:translate-y-[36rem] lg:-left-48 xl:h-[720px] xl:w-[779px]'
          />
          <MeetTheElephant />
        </div>
        <div className='bg-cblue bg-texture flex flex-col'>
          <div className='bg-cgray h-[12rem] rounded-b-[70%] pt-14 sm:pt-12'>
            <Executives data={executives} />
          </div>
          <YellowLine2 className='-rotate-[45deg] absolute -left-24 z-0 translate-y-48' />
          <div className='pt-[28rem]'>
            <ManagersSection />
          </div>
        </div>
      </main>
    </Layout>
  );
}

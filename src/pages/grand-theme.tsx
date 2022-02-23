/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CampaignSection from '@/container/theme/CampaignSection';
import LogoSection from '@/container/theme/LogoSection';
import NewsPaperSection from '@/container/theme/NewsPaperSection';

import CampaignArrow from '@/assets/svg/CampaignArrow';

export default function GrandThemePage() {
  return (
    <Layout>
      <Seo templateTitle='Grand Theme Reveal' />
      <main className='bg-clight bg-texture flex overflow-hidden flex-col pt-8 md:pt-16'>
        <Header isDark={true} />
        <section className='flex relative flex-col p-4 -mb-16 min-h-screen md:p-8 lg:p-16'>
          <NewsPaperSection />
        </section>
        <section className='relative pt-16'>
          <CampaignArrow className='absolute top-0 right-16 z-10 w-8 -translate-y-1/2 md:w-16 lg:w-24' />
          <CampaignSection />
        </section>
        <section className='min-h-main relative py-16'>
          <LogoSection />
        </section>
      </main>
    </Layout>
  );
}

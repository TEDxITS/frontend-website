import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TeamSection from '@/container/team/ManagersSection';
import StaffSection from '@/container/team/StaffSection';

export default function MeetTheTeamPage() {
  return (
    <Layout>
      <Seo templateTitle='Meet The Team' />
      <main className='bg-cgray pt-8 md:pt-16'>
        <Header isDark={true} />
        <section className='bg-cblue bg-texture flex overflow-hidden relative flex-col py-10 bg-repeat'>
          <TeamSection />
        </section>
        <section className='bg-cdark flex overflow-hidden relative flex-col'>
          <StaffSection />
        </section>
      </main>
    </Layout>
  );
}

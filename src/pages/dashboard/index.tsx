import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import { PageWithAuth } from '@/types/auth';

const IndexPage: PageWithAuth = () => {
  const isAuthenticated = useAuthStore().isAuthenticated;
  return (
    <Layout withDashboard={true}>
      <Seo templateTitle='Index' />

      <section className='layout min-h-main py-8 md:py-16'>
        <h2>Protected Page</h2>
        <br />
        <p>
          use snippets <span className='bg-cgreen px-5 rounded-md'>npa</span> to
          generate this protected page
        </p>
        <br />
        <p>This is Protected Page</p>
        <p>User must Login Before Access this Page</p>
        <p>Authenticated : {JSON.stringify(isAuthenticated)}</p>
      </section>
    </Layout>
  );
};

IndexPage.permission = 'auth';

export default IndexPage;

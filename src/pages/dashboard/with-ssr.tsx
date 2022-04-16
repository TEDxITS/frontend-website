import axios from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import api, { setApiContext } from '@/lib/axios';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { ApiResponse } from '@/types/api';
import { PageWithAuth } from '@/types/auth';

type User = {
  user_name: string;
  user_email: string;
};

const WithssrPage: PageWithAuth = ({
  data,
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout withDashboard={true}>
      <Seo templateTitle='With-ssr' />

      <main>
        <section className=''>
          <div className='layout py-20 min-h-screen'>
            <p>
              Server Side Rendering data from{' '}
              <span className='underline'>/profile</span>
            </p>
            <hr className='my-8' />

            <p>nama : {JSON.stringify(data?.user_name)}</p>
            <p>email : {JSON.stringify(data?.user_email)}</p>
            <p>{JSON.stringify(message)}</p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

WithssrPage.permission = 'auth';

export default WithssrPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const response = await api.get<ApiResponse<User>>(`/profile`);
    return {
      props: { data: response.data.data },
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        props: {
          data: null,
          message: error.response?.data.message as string,
        },
      };
    }
    return {
      props: { data: null },
    };
  }
};

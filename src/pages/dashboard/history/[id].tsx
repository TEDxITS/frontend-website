import axios from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import api, { setApiContext } from '@/lib/axios';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import TicketDetail from '@/container/ticketing/history/TicketDetail';

import { ApiResponse, TicketResponse } from '@/types/api';
import { PageWithAuth } from '@/types/auth';

const TicketDetailPage: PageWithAuth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout
      isDark={true}
      showFooter={true}
      withDashboard={true}
      className='bg-clight z-20 min-h-screen'
    >
      <Seo templateTitle='Details' />

      <main className='bg-clight overflow-x-clip flex relative flex-col'>
        <NextImage
          src='/images/ticketing/blue-blob-2.png'
          width={500}
          height={500}
          alt='sticker'
          quality={100}
          className='absolute -top-32 scale-50 sm:-top-30 sm:-right-40 sm:scale-100'
          priority={true}
        />
        <NextImage
          src='/images/ticketing/blue-blob-1.png'
          width={500}
          height={500}
          alt='sticker'
          quality={100}
          className='absolute -bottom-28 -left-28 scale-50 -translate-x-6 sm:scale-100'
          priority={true}
        />
        <section className='layout min-h-[calc(100vh-64px-32px)] flex relative z-20 justify-center py-8 lg:min-h-[calc(100vh-64px-64px)]'>
          <TicketDetail data={data as TicketResponse} />
        </section>
      </main>
    </Layout>
  );
};

TicketDetailPage.permission = 'auth';

export default TicketDetailPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const response = await api.get<ApiResponse<TicketResponse>>(
      `/ticketing/booking-detail/${context.params?.id}`
    );
    return {
      props: { data: response.data.data },
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        props: {
          data: null,
          message: 'error',
        },
      };
    }
    return {
      props: { data: null },
    };
  }
};

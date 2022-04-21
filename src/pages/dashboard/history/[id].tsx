import axios from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import api, { setApiContext } from '@/lib/axios';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import TicketDetail from '@/container/ticketing/history/TicketDetail';

import { ApiResponse } from '@/types/api';
import { TicketResponse } from '@/types/api';
import { PageWithAuth } from '@/types/auth';

const TicketDetailPage: PageWithAuth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout
      showFooter={true}
      withDashboard={true}
      className='bg-clight min-h-screen z-20'
    >
      <Seo templateTitle='Details' />

      <main className='bg-clight flex flex-col overflow-x-clip relative'>
        <NextImage
          src='/images/ticketing/blue-blob-2.png'
          width={500}
          height={500}
          alt='sticker'
          quality={100}
          className='-top-32 absolute scale-50 sm:-right-40 sm:-top-30 sm:scale-100'
          priority={true}
        />
        <NextImage
          src='/images/ticketing/blue-blob-1.png'
          width={500}
          height={500}
          alt='sticker'
          quality={100}
          className='-bottom-28 -left-28 -translate-x-6 absolute scale-50 sm:scale-100'
          priority={true}
        />
        <section className='min-h-[75vh] px-4 py-8 relative z-20'>
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

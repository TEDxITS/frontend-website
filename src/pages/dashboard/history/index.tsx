import axios from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import api, { setApiContext } from '@/lib/axios';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import HistorySection from '@/container/ticketing/history/HistorySection';

import { ApiResponse } from '@/types/api';
import { TicketResponse } from '@/types/api';
import { PageWithAuth } from '@/types/auth';

const HistoryPage: PageWithAuth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout
      showFooter={true}
      withDashboard={true}
      className='bg-clight min-h-screen z-20'
    >
      <Seo templateTitle='History' />

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
          <HistorySection data={data as TicketResponse[]} />
        </section>
        <div className='flex flex-grow items-end justify-between layout mb-12 text-cdark text-xs'>
          <p className='font-medium'>
            <span className='font-black'>TED</span>xITS
          </p>
          <p>&copy; 2022</p>
        </div>
      </main>
    </Layout>
  );
};

HistoryPage.permission = 'auth';

export default HistoryPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const response = await api.get<ApiResponse<TicketResponse[]>>(
      `/ticketing/booking`
    );
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
      props: { data: null, message: '' },
    };
  }
};

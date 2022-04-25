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
      className='bg-clight z-20 min-h-screen'
    >
      <Seo templateTitle='History' />

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
        <section className='min-h-[75vh] relative z-20 px-4 py-8'>
          <HistorySection data={data as TicketResponse[]} />
        </section>
        <div className='layout text-cdark flex flex-grow justify-between items-end mb-12 text-xs'>
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

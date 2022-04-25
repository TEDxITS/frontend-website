/* eslint-disable @next/next/no-img-element */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import api, { setApiContext } from '@/lib/axios';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import HistorySection from '@/container/ticketing/history/HistorySection';

import { TICKET_PAGE_AUTH } from '@/constant/links';

import { ApiResponse, TicketResponse } from '@/types/api';
import { PageWithAuth } from '@/types/auth';

const HistoryPage: PageWithAuth = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dataLength = data?.length;

  return (
    <Layout
      showFooter={true}
      withDashboard={true}
      isDark={true}
      className='bg-clight z-20 min-h-screen'
    >
      <Seo templateTitle='History' />

      <main className='bg-clight min-h-[calc(100vh-64px-32px)] overflow-x-clip grid relative md:min-h-[calc(100vh-64px-64px)]'>
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
        <section className='grid relative z-20 py-8'>
          {(dataLength as number) > 0 ? (
            <HistorySection data={data as TicketResponse[]} />
          ) : (
            <div className='grid relative h-full'>
              <div className='layout flex z-10 justify-center items-center'>
                <div className='flex relative flex-col drop-shadow-lg'>
                  <img
                    src='/svg/ticket-top.svg'
                    alt=''
                    className='z-20 w-full'
                  />
                  <div className='/ bg-cgray flex z-10 flex-col gap-4 items-center px-8 pt-8 pb-1 -mb-1'>
                    <img
                      src='/svg/tedx-logo.svg'
                      alt='TedxITS logo'
                      className='h-10'
                    />
                    <svg viewBox='0 0 498.33 2.18'>
                      <path
                        d='M489.87 1.17L5.98 1'
                        fill='none'
                        stroke='#231f20'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        strokeWidth='2px'
                        strokeDasharray='5'
                      />
                    </svg>
                    <div>
                      <p className='/ font-fivo text-cdark font-medium leading-tight text-center'>
                        No History data available :(
                      </p>
                    </div>
                    <svg viewBox='0 0 498.33 2.18'>
                      <path
                        d='M489.87 1.17L5.98 1'
                        fill='none'
                        stroke='#231f20'
                        strokeLinecap='round'
                        strokeMiterlimit='10'
                        strokeWidth='2px'
                        strokeDasharray='5'
                      />
                    </svg>
                    <div className='flex gap-2'>
                      <p className='text-cdark'>Starts Buy Ticket</p>
                      <UnderlineLink
                        href={TICKET_PAGE_AUTH}
                        className='font-fivo text-cblue mb-4'
                      >
                        here !
                      </UnderlineLink>
                    </div>
                  </div>
                  <img
                    src='/svg/ticket-bottom.svg'
                    alt=''
                    className='z-20 w-full'
                  />
                </div>
              </div>
              <div className='absolute inset-0 blur-sm md:blur-none'>
                <NextImage
                  src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-1_ggkhcm.png'
                  width={441}
                  height={220}
                  alt='Ticket'
                  className='absolute -left-16 top-1/2 -rotate-12'
                  imgClassName='drop-shadow-lg'
                />
                <NextImage
                  src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-2_oncgxj.png'
                  width={488}
                  height={259}
                  alt='Ticket'
                  className='absolute top-0 -right-16 rotate-6'
                  imgClassName='drop-shadow-lg'
                />
                <NextImage
                  src='https://res.cloudinary.com/tedxits/image/upload/v1650805425/images/ticket/sticker-ticket-3_t2a1la.png'
                  width={401}
                  height={189}
                  alt='Ticket'
                  className='absolute left-0 bottom-1/2 rotate-3'
                  imgClassName='drop-shadow-lg'
                />
              </div>
            </div>
          )}
        </section>
        <div className='layout text-cdark flex justify-between items-end mb-12 text-xs'>
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

  const response = await api.get<ApiResponse<TicketResponse[]>>(
    `/ticketing/booking`
  );
  return {
    props: { data: response.data.data },
  };
};

/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import toast from 'react-hot-toast';

import { baseURL, setApiContext } from '@/lib/axios';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import { DASHBOARD_PAGE } from '@/constant/links';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/auth';

const VerificationPage = ({
  success,
  message,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const login = useAuthStore.useLogin();

  React.useEffect(() => {
    console.log(token);
    if (success) {
      login({
        token: token,
      });
      setTimeout(() => {
        toast.success('Success! You have logged in to your account');
        router.push(DASHBOARD_PAGE);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout className='bg-[#EAEAE2]' showFooter={false}>
      <Seo templateTitle='Verification' />

      <main className='bg-blob-blue flex overflow-hidden relative flex-col bg-cover'>
        <section className='layout flex z-10 justify-center items-center min-h-screen'>
          <div className='w-full max-w-md drop-shadow-lg'>
            <div className='flex relative flex-col pb-2'>
              <img src='/svg/ticket-top.svg' alt='' className='z-20 w-full' />
              <div className='bg-cgray flex z-10 flex-col gap-4 items-center px-8 pt-8 pb-1 -mb-1'>
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

                {success ? (
                  <p className='font-fivo text-cdark font-medium text-center'>
                    Verification account Success!
                    <br />
                    <span className='text-cblue'>redirecting ...</span>
                  </p>
                ) : (
                  <p className='font-fivo text-cdark font-medium text-center'>
                    Verification account Failed!
                    <br />
                    <span className='text-cblue'>
                      {message.length > 0
                        ? message
                        : 'An error occurred, please try again later'}
                    </span>
                  </p>
                )}
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
              </div>
              <img
                src='/svg/ticket-bottom.svg'
                alt=''
                className='z-20 w-full'
              />
            </div>
          </div>
        </section>
        <div className='absolute inset-0 blur-sm md:blur-none'>
          <NextImage
            src='/images/checkout-page/sticker-ticket-1.png'
            width={441}
            height={220}
            alt='Ticket'
            className='absolute -left-16 top-1/2 -rotate-12'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='/images/checkout-page/sticker-ticket-2.png'
            width={488}
            height={259}
            alt='Ticket'
            className='absolute top-0 -right-16 rotate-6'
            imgClassName='drop-shadow-lg'
          />
          <NextImage
            src='/images/checkout-page/sticker-ticket-3.png'
            width={401}
            height={189}
            alt='Ticket'
            className='absolute left-0 bottom-1/2 rotate-3'
            imgClassName='drop-shadow-lg'
          />
        </div>
      </main>
    </Layout>
  );
};

export default VerificationPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const token = context.params?.token as string;
  setApiContext(context);

  try {
    const response = await axios.get<ApiResponse<User>>(
      `${baseURL}/auth/verification/${token}`
    );

    if (response.data.success) {
      return {
        props: {
          success: true,
          message: response.data.message,
          token: response.data.data.token,
        },
      };
    } else {
      return {
        props: {
          success: false,
          message: response.data.message,
          token: '',
        },
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        props: {
          success: false,
          message: error.response?.data.message as string,
          token: '',
        },
      };
    }
    return {
      props: {
        success: false,
        message: '',
        token: '',
      },
    };
  }
};

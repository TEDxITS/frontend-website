import axios from 'axios';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import * as React from 'react';

import api, { setApiContext } from '@/lib/axios';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import ProfileForm from '@/container/ticketing/profile/ProfileForm';

import { ApiResponse } from '@/types/api';
import { PageWithAuth } from '@/types/auth';

type Profile = {
  user_id: string;
  user_name: string;
  user_email: string;
  user_latest_activities: string;
  user_verification: boolean;
  user_token: string;
};

const ProfilePage: PageWithAuth = ({
  data,
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout
      showFooter={true}
      withDashboard={true}
      className='bg-clight z-20 min-h-screen'
    >
      <Seo templateTitle='Profile' />

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
        <section className='relative z-20 px-4 py-8'>
          {!message && data ? (
            <ProfileForm
              initialvalue={{
                user_name: data.user_name,
                user_email: data.user_email,
              }}
            />
          ) : (
            <p className='text-cdark'>Not Found</p>
          )}
        </section>
      </main>
    </Layout>
  );
};

ProfilePage.permission = 'auth';

export default ProfilePage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  setApiContext(context);
  try {
    const response = await api.get<ApiResponse<Profile>>(`/profile`);
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

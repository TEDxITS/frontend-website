/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Router from 'next/router';
import * as React from 'react';

import { getLink } from '@/lib/fetch';

import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import AboutCircle from '@/assets/svg/AboutCircle';
import DrawBottomRight from '@/assets/svg/DrawBottomRight';
import DrawTopLeft from '@/assets/svg/DrawTopLeft';
import LoaderIllustration from '@/assets/svg/LoaderIllustration';

export default function LinksPage({ url }: { url: string }) {
  const getRedirect = async () => {
    const resData = await getLink(url);
    if (resData.success) {
      location.replace(resData.url);
    } else {
      Router.push('/404');
    }
  };
  React.useEffect(() => {
    getRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Seo templateTitle='Link Shortener' />
      <main className='bg-cdark bg-newspaper bg-center bg-no-repeat bg-cover'>
        <section className='flex'>
          <div className='layout flex z-10 flex-col justify-center items-center min-h-screen'>
            <div className='flex relative flex-col items-center'>
              <div className='overflow-hidden absolute inset-0 z-10 w-full h-full'>
                <DrawBottomRight className='absolute right-0 bottom-0 w-8' />
                <DrawTopLeft className='absolute top-0 left-0 w-8' />
              </div>
              <NextImage
                src='/images/sticker/sticker-1.png'
                width={478}
                height={110}
                alt='Sticker TedxITS'
                className='ml-auto w-32 lg:w-56'
              />
              <div className='layout'>
                <h1 className='text-cdark relative z-10 mb-1'>
                  <AboutCircle className='z-[-1] absolute w-48 -translate-y-4' />
                  TED
                  <span className='ordinal'>x</span>
                  <span className='font-medium'>ITS</span>
                  <span className='font-normal'> Link Shortener</span>
                </h1>
                <p className='text-cdark mt-8'>
                  Sit tight, we are redirecting you to your desired URL
                </p>
              </div>
            </div>
            <LoaderIllustration className='mt-4 w-16' />
          </div>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { url } = context.params;
  return {
    props: {
      url,
    },
  };
};

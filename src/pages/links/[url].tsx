/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetServerSideProps } from 'next';
import Router from 'next/router';
import * as React from 'react';

import { getLink } from '@/lib/fetch';

import Seo from '@/components/Seo';

import AboutCircle from '@/assets/svg/AboutCircle';
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
      <main className='bg-cdark'>
        <section className=''>
          <div className='layout flex flex-col justify-center items-center py-20 max-w-sm min-h-screen'>
            <div className='flex flex-col'>
              <h2 className='relative z-10 mb-1 font-extrabold'>
                <AboutCircle className='absolute w-48 -translate-y-4' />
                TED
                <span className='ordinal'>x</span>
                <span className='font-normal'>ITS</span>
                <span className='font-normal'> Link Shortener</span>
              </h2>
              <p className='mt-8 text-justify'>
                Redirecting to your desired URL
              </p>
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

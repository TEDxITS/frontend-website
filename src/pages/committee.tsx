import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout showFooter={false}>
      <Seo templateTitle='Our Committee' />
      <main className='bg-cdark bg-committee text-clight flex relative flex-col py-8 bg-no-repeat bg-cover md:py-16'>
        <Header />
        <section className='layout min-h-[calc(100vh-64px-64px)] flex relative z-10 flex-col justify-center items-center lg:min-h-[calc(100vh-64px-128px)]'>
          <div className='flex flex-col gap-4 justify-center items-center w-full'>
            <NextImage
              src='/svg/coming-soon.svg'
              width={663}
              height={140.29}
              alt='Committee Illustration'
              priority={true}
              className='w-full max-w-2xl drop-shadow-md'
            />
            <h2 className='font-fivo mt-8 text-3xl font-bold md:text-4xl'>
              C<span className='font-sympath font-normal'>O</span>MI
              <span className='font-sympath font-normal'>N</span>G SO
              <span className='font-sympath font-normal'>O</span>N...
            </h2>
            <p className='font-fivo max-w-md text-center'>
              Ready to actualize your vision?
              <br />
              Stay tuned because we&apos;re recruiting soon.
            </p>
          </div>
          <small className='font-fivo absolute bottom-0 left-0 text-sm'>
            <span className='font-black'>TED</span>
            <span className='font-extrabold'>x</span>
            <span className='font-bold'>ITS</span>
          </small>
          <small className='font-fivo absolute right-0 bottom-0 text-sm font-normal'>
            © 2022
          </small>
        </section>
      </main>
    </Layout>
  );
}

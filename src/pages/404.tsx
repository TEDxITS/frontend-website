import * as React from 'react';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import LeftLine from '@/assets/svg/LeftLine';
import RightLine from '@/assets/svg/RightLine';
import TopLine from '@/assets/svg/TopLine';

export default function NotFoundPage() {
  return (
    <Layout showFooter={false}>
      <Seo templateTitle='404' />
      <main className='bg-cdark text-clight flex relative flex-col pt-8 md:pt-16'>
        <Header />
        <section className='min-h-[calc(100vh-64px-32px)] flex relative z-10 flex-col justify-center items-center lg:min-h-[calc(100vh-64px-64px)]'>
          <div className='layout flex flex-col justify-center items-center'>
            <h1 className='font-fivo shadow-lg'>Oops!</h1>
            <NextImage
              src='/svg/404.svg'
              width={895.59}
              height={339.3}
              alt='404 illustration'
              priority={true}
              className='w-full max-w-lg drop-shadow-md'
            />
            <p className='font-fivo mt-2'>This page doesn&apos;t exist.</p>

            <ArrowLink href='/' className='mt-4 text-xl'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
        <div className='bg-cdark overflow-hidden absolute inset-0 w-full h-full'>
          <TopLine className='absolute -top-4 left-1/2 w-1/2 -translate-x-1/2 lg:-top-16 lg:w-1/3' />
          <LeftLine className='absolute bottom-0 left-0 z-10 h-1/4 lg:h-1/2' />
          <RightLine className='absolute bottom-0 -right-4 h-1/5 lg:h-1/3' />
          <NextImage
            src='/svg/letter/t-letter.png'
            width={547}
            height={602}
            alt='t letter'
            className='animate-[pulse_8s__ease_infinite] max-w-[50vw] absolute left-0 -top-16 w-full -translate-x-1/2'
          />
          <NextImage
            src='/svg/letter/e-letter.png'
            width={543}
            height={576}
            alt='e letter'
            className='max-w-[50vw] absolute bottom-0 left-1/4 w-full -translate-x-1/3 translate-y-1/2'
          />
          <NextImage
            src='/svg/letter/d-letter.png'
            width={495}
            height={468}
            alt='d letter'
            className='max-w-[30vw] absolute top-0 right-1/4 w-full blur-xl -translate-y-1/2'
          />
          <NextImage
            src='/svg/letter/x-letter.png'
            width={400}
            height={415}
            alt='x letter'
            className='animate-[pulse_15s__ease_infinite] max-w-[40vw] absolute right-0 bottom-0 w-full translate-x-1/4 translate-y-1/4'
          />
        </div>
      </main>
    </Layout>
  );
}

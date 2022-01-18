import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { googleFormUrl } from '@/data/url';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import CoverSection from '@/container/positionOpen/CoverSection';
import PositionsSection from '@/container/positionOpen/PositionsSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Open Volunteer!' />
      <main className='bg-cgray flex flex-col'>
        <section className='bg-cdark bg-home text-clight relative z-20 pt-8 h-full bg-bottom bg-no-repeat bg-cover md:pt-16'>
          <Header />
          <CoverSection />
          <NextImage
            src='/images/bg-positionOpen-bottom.png'
            width={6003}
            height={756}
            alt='bottom'
            className='translate-y-[99%] absolute bottom-0 w-full drop-shadow-md'
          />
        </section>
        <section className={clsxm('flex relative z-10 flex-col')} id='position'>
          <PositionsSection />
          {/* Only show on Mobile and Tablet */}
          <div className='block fixed bottom-4 left-1/2 z-40 animate-bounce lg:hidden'>
            <ButtonLink
              className='z-20 whitespace-nowrap shadow-2xl -translate-x-1/2'
              href={googleFormUrl}
            >
              Register Now
            </ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}

// eslint-disable-next-line unused-imports/no-unused-vars
const LoadingPositionPage = () => {
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
};

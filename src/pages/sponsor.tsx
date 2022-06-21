/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Logo from '@/components/tabs/Logo';

const big_sponsor_logo = [
  'https://res.cloudinary.com/tedxits/image/upload/v1655782600/merch/sponsor/bni_tslxcg.png',
  'https://res.cloudinary.com/tedxits/image/upload/v1655782600/merch/sponsor/pamapersada_uoen3f.png',
];

const small_sponsor_logo = [
  'https://res.cloudinary.com/tedxits/image/upload/v1655782600/merch/sponsor/skk-migas_fua17w.png',
  'https://res.cloudinary.com/tedxits/image/upload/v1655782599/merch/sponsor/kei-removebg-preview_ew7izq.png',
  'https://res.cloudinary.com/tedxits/image/upload/v1655782600/merch/sponsor/pupuk-indonesia_oi8mdp.png',
  'https://res.cloudinary.com/tedxits/image/upload/v1655782600/merch/sponsor/linus-trans_h5w6xm.png',
  'https://res.cloudinary.com/tedxits/image/upload/v1655782600/merch/sponsor/paragon_jyiqnd.png',
  'https://res.cloudinary.com/tedxits/image/upload/v1655782599/merch/sponsor/print-and-print_haojw3.png',
  'https://res.cloudinary.com/tedxits/image/upload/v1655782600/merch/sponsor/periksain_f8ydg6.png',
];

export default function SponsorPage() {
  return (
    <Layout className='bg-[#EAEAE2]'>
      <Seo templateTitle='Our Sponsor' />

      <main className='bg-cover bg-no-repeat bg-paper'>
        <section className='flex flex-col gap-8 pt-8 relative z-10 md:pt-16'>
          <Header isDark={true} />

          <div className='flex flex-col gap-16 items-center justify-center layout min-h-[calc(100vh-64px-64px)] py-8 text-cdark z-30 md:py-20 lg:min-h-[calc(100vh-64px-96px)]'>
            <div className='flex flex-col items-start justify-between w-full md:flex-row'>
              <div className='flex flex-col relative'>
                <h1 className='-rotate-3 font-normal font-sympath origin-bottomn text-cred'>
                  here are
                </h1>
                <h1 className='font-bold text-cdark'>Our</h1>
                <h1 className='font-bold text-cdark'>
                  Sponsorsh<span className='font-pilow'>i</span>
                  ps
                </h1>
              </div>
              <div className='max-w-sm'>
                <p className='text-justify w-full'>
                  Thankyou, it&apos;s been a roller coaster journey to host 3
                  Pre-Events and a Main Event in ± 4 months
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-y-8 items-center justify-center w-4/5 md:gap-y-2'>
              <div className='gap-x-4 gap-y-8 grid place-items-center md:grid-cols-2'>
                {big_sponsor_logo.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt='logo sponsor'
                    className={clsxm(i == 1 && 'w-1/3')}
                  />
                ))}
              </div>
              <div className='gap-x-8 grid grid-cols-3 place-items-center md:grid-cols-5'>
                {small_sponsor_logo.map((image, i) => (
                  <img key={i} src={image} alt='logo sponsor' />
                ))}
              </div>
            </div>

            <div className='flex items-start justify-between w-full'>
              <Logo isDark className='w-20' />
              <p className='text-cdark text-sm'>@2022</p>
            </div>
          </div>
          <div className='absolute inset-0 overflow-hidden pointer-events-none'>
            <NextImage
              src='/images/forgot-password/float.png'
              width={365}
              height={402}
              alt='float'
              className='absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-full md:w-1/2'
            />
            <NextImage
              src='/images/forgot-password/float.png'
              width={365}
              height={402}
              alt='float'
              className='-translate-x-1/3 -translate-y-1/4 absolute left-0 top-0 w-full md:-translate-x-1/2 md:w-1/2'
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}

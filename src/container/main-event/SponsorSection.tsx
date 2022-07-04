/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import clsxm from '@/lib/clsxm';

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

export default function SponsorSection() {
  return (
    <div className='layout text-cdark flex flex-col gap-8 justify-center items-center py-8 md:py-16'>
      <div className='flex flex-col justify-between items-start w-full md:flex-row'>
        <div className='flex relative flex-col'>
          <h1 className='font-sympath origin-bottomn text-cred font-normal -rotate-3'>
            here are
          </h1>
          <h1 className='text-cdark font-bold'>Our Sponsor</h1>
        </div>
      </div>

      <div className='flex flex-col gap-y-8 justify-center items-center w-4/5 md:gap-y-2'>
        <div className='grid gap-x-4 gap-y-8 place-items-center md:grid-cols-2'>
          {big_sponsor_logo.map((image, i) => (
            <img
              key={i}
              src={image}
              alt='logo sponsor'
              className={clsxm(i == 1 && 'w-1/3')}
            />
          ))}
        </div>
        <div className='grid grid-cols-3 gap-x-8 place-items-center md:grid-cols-5'>
          {small_sponsor_logo.map((image, i) => (
            <img key={i} src={image} alt='logo sponsor' />
          ))}
        </div>
      </div>

      <div className='flex justify-end w-full'>
        <div className='max-w-sm'>
          <p className='w-full text-xs text-justify 2xl:text-sm'>
            Thankyou, it&apos;s been a roller coaster journey to host 3
            Pre-Events and a Main Event in ± 4 months
          </p>
        </div>
      </div>
    </div>
  );
}

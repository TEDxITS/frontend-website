/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Reveal, Tween } from 'react-gsap';

import clsxm from '@/lib/clsxm';

import { big_sponsor_logo, small_sponsor_logo } from '@/data/sponsor';

export default function SponsorSection() {
  return (
    <Reveal
      trigger={
        <div className='layout text-cdark flex flex-col gap-8 justify-center items-center py-8 md:py-16 md:mt-16' />
      }
    >
      <div className='w-full text-center'>
        <p className='text-cdark font-bold'>Supported By</p>
      </div>

      <div className='flex flex-col gap-y-8 justify-center items-center w-4/5 md:gap-y-2'>
        <div className='grid gap-x-4 gap-y-8 place-items-center md:grid-cols-2'>
          <Tween
            from={{
              y: '50px',
              opacity: 0,
            }}
            to={{
              y: 0,
              opacity: 1,
            }}
            duration={1}
            stagger={0.2}
            ease='power2.out'
          >
            {big_sponsor_logo.map((image, i) => (
              <div key={i}>
                <img
                  src={image}
                  alt='logo sponsor'
                  className={clsxm(i == 1 && 'w-1/3', 'mx-auto')}
                />
              </div>
            ))}
          </Tween>
        </div>
        <div className='grid grid-cols-3 gap-x-8 place-items-center md:grid-cols-5'>
          <Tween
            from={{
              y: '50px',
              opacity: 0,
            }}
            to={{
              y: 0,
              opacity: 1,
            }}
            duration={1}
            stagger={0.2}
            ease='power2.out'
          >
            {small_sponsor_logo.map((image, i) => (
              <div key={i}>
                <img src={image} alt='logo sponsor' />
              </div>
            ))}
          </Tween>
        </div>
      </div>
    </Reveal>
  );
}

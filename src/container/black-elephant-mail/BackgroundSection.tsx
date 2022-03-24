/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function BackgroundSection() {
  return (
    <div className='overflow-hidden absolute inset-0'>
      <img
        src='/images/black-elephant-mail/mail-1.png'
        alt=''
        className='animate-[float_4s_ease-in-out_infinite] absolute top-16 -left-16 max-h-screen md:-left-40'
      />
      <img
        src='/images/black-elephant-mail/mail-2.png'
        alt=''
        className='animate-[float_2s_ease-in-out_infinite] hidden absolute bottom-0 -right-16 max-h-screen md:block md:top-16 md:-right-40'
      />
      <img
        src='/images/black-elephant-mail/mail-3.png'
        alt=''
        className='animate-[float_5s_ease-in-out_infinite] absolute bottom-0 -right-16 max-h-screen md:top-16 md:-right-40'
      />
    </div>
  );
}

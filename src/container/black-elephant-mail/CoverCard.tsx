import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

import { CardState } from '@/pages/black-elephant-mail';

export default function CoverCard({
  setState,
}: {
  setState: React.Dispatch<keyof typeof CardState>;
}) {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2 items-center'>
        <NextImage
          width={287.63}
          height={275.9}
          src='/svg/elephant-black.svg'
          alt={`Black elephant logo`}
          className='max-w-[128px] w-full'
        />
        <h2 className='font text-cdark text-lg font-bold xl:text-xl 2xl:text-3xl'>
          B<span className='font-sympath'>L</span>ack Ele
          <span className='font-sympath'>p</span>han
          <span className='font-sympath'>t</span> Mai
          <span className='font-sympath'>L</span>
        </h2>
        <p className='font-medium'>The Unspoken Taboo Words</p>
      </div>
      <p className='text-justify'>
        This campaign is executed as a response towards the Pre Event of TEDxITS
        in which brought up Sex Education as an implementation of one of our
        sub-theme “Black Elephant: The Unspoken Taboo Words”. This campaign aims
        to voice the audience&apos;s experience as a result of sex education
        being underestimated in our surrounding. We will voice the
        audience&apos;s experience anonymously through a publication that will
        be conducted this month.{' '}
        <span className='font-medium'>
          Thus, you are free to share your story and perspective regarding
          sexual assault, KBGO (Kekerasan Berbasis Gender Online), grooming, RUU
          PKS, and more.
        </span>
      </p>
      <div className='flex flex-col gap-2 items-center'>
        <p className='font-bold'>Ready to share your story ?</p>
        <ButtonLink
          type='button'
          href='#form'
          onClick={() => setState('FILL')}
          className='p-0 bg-none hover:bg-none'
        >
          <NextImage
            width={476}
            height={156}
            priority={true}
            src='/images/black-elephant-mail/button-click.png'
            alt='Click Buttons'
            className='w-40'
          />
        </ButtonLink>
      </div>
    </div>
  );
}

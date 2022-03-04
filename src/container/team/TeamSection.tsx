import React from 'react';

import NextImage from '@/components/NextImage';

import Managers from './Managers';

function TeamSection() {
  return (
    <>
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='bottom-[71rem] absolute right-0 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='-left-30 absolute bottom-96 brightness-0 rotate-180 translate-y-36'
      />
      <Managers />
      <Managers />
    </>
  );
}

export default TeamSection;

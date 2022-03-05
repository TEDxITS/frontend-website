import React from 'react';

import { finance, mnb } from '@/data/team';

import NextImage from '@/components/NextImage';

import ManagersBoardFive from './ManagersBoardFive';
import ManagersBoardThree from './ManagersBoardThree';

const ManagersSection = () => {
  return (
    <>
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='bottom-[79rem] absolute right-0 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='-left-30 bottom-[34rem] absolute brightness-0 rotate-180'
      />
      <ManagersBoardFive data={mnb} />
      <ManagersBoardThree data={finance} />
    </>
  );
};

export default ManagersSection;

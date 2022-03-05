import React from 'react';

import { directors, event, finance, mnb } from '@/data/team';

import NextImage from '@/components/NextImage';

import DirectorsBoardFive from './DirectorsBoard';
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
        className='-rotate-[150deg] bottom-[170rem] absolute left-24 z-0 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='-rotate-[150deg] bottom-[125rem] absolute right-48 z-0 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='bottom-[79rem] absolute right-0 z-0 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='-left-30 bottom-[34rem] absolute z-0 brightness-0 rotate-180'
      />
      <DirectorsBoardFive data={directors} />
      <ManagersBoardThree data={event} />
      <ManagersBoardFive data={mnb} />
      <ManagersBoardThree data={finance} />
    </>
  );
};

export default ManagersSection;

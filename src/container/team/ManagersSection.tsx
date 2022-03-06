import React from 'react';

import { finance, mnb } from '@/data/team';

import NextImage from '@/components/NextImage';

import ManagersBoardFour from './ManagersBoardFour';
import ManagersBoardThreeOrFive from './ManagersBoardThreeOrFive';

const mnbdata = {
  name: 'Marketing & Branding',
  description:
    'Elephant flocks inside this room is working on TEDxITS 2022 publication, campaign, design, video, and website to introduce everything about TEDxITS 2022',
  isManager: true,
};

const financedata = {
  name: 'Finance',
  description:
    'Elephant flocks that responsible on TEDxITS funding, money management, and partnership',
  isManager: true,
};

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
      <ManagersBoardFour data={mnb} {...mnbdata} />
      <ManagersBoardThreeOrFive data={finance} {...financedata} />
    </>
  );
};

export default ManagersSection;

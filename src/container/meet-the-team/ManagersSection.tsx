import React from 'react';

import { directors, event, finance, mnb } from '@/data/team';

import NextImage from '@/components/NextImage';

import YellowLine from '@/assets/svg/YellowLine';
import YellowLine3 from '@/assets/svg/YellowLine3';

import ManagersBoardFour from './ManagersBoardFour';
import ManagersBoardThreeOrFive from './ManagersBoardThreeOrFive';

const directorsdata = {
  name: '',
  description: '',
  isManager: false,
};

const eventdata = {
  name: 'Event',
  description:
    'Elephant Flocks that working on TEDxITS 2022 program execution including pre event and main event to making the greatest TEDx event.',
  isManager: true,
};

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
        className='-rotate-[130deg] bottom-[185rem] absolute right-0 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        className='-rotate-[130deg] bottom-[125rem] absolute left-0 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='bottom-[79rem] absolute right-48 brightness-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        className='-left-30 bottom-[34rem] absolute brightness-0 rotate-180'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        className='-bottom-[12rem] absolute right-0 brightness-0'
      />
      <YellowLine className='-scale-50 bottom-[90rem] absolute -right-56 z-0 brightness-95 sm:-right-24 sm:scale-75 lg:-scale-100 lg:-right-4' />
      <YellowLine3 className='absolute -bottom-36 -right-96 z-0 brightness-95' />
      <ManagersBoardThreeOrFive data={directors} {...directorsdata} />
      <ManagersBoardThreeOrFive data={event} {...eventdata} />
      <ManagersBoardFour data={mnb} {...mnbdata} />
      <ManagersBoardThreeOrFive data={finance} {...financedata} />
    </>
  );
};

export default ManagersSection;

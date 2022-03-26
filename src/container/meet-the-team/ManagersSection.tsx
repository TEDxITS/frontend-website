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
        className='-rotate-[130deg] absolute bottom-[185rem] brightness-0 right-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        className='-rotate-[130deg] absolute bottom-[125rem] brightness-0 left-0'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        priority={true}
        className='absolute bottom-[79rem] brightness-0 right-48'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        className='-left-30 absolute bottom-[34rem] brightness-0 rotate-180'
      />
      <NextImage
        src='/images/background/bg-blob-fill.png'
        width={589}
        height={589}
        alt='bg'
        className='-bottom-[12rem] absolute brightness-0 right-0'
      />
      <YellowLine className='-right-56 -scale-50 absolute bottom-[90rem] brightness-95 z-0 sm:-right-24 sm:scale-75 lg:-right-4 lg:-scale-100' />
      <YellowLine3 className='-bottom-36 -right-96 absolute brightness-95 z-0' />
      <ManagersBoardThreeOrFive data={directors} {...directorsdata} />
      <ManagersBoardThreeOrFive data={event} {...eventdata} />
      <ManagersBoardFour data={mnb} {...mnbdata} />
      <ManagersBoardThreeOrFive data={finance} {...financedata} />
    </>
  );
};

export default ManagersSection;

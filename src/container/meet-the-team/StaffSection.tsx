import React from 'react';

import { staffProps } from '@/data/team';

import Staff from './Staff';

const staffData: staffProps[] = [
  { name: 'Program', description: '' },
  { name: 'Exp. Design', description: '' },
  { name: 'Logistics & Acco.', description: '' },
  { name: 'Curating', description: '' },
  { name: 'HRA', description: '' },
  { name: 'Fundraising', description: '' },
  { name: 'Partnership', description: '' },
  { name: 'Ticketing', description: '' },
  { name: 'Marketing Strategist', description: '' },
  { name: 'Graphic Design', description: '' },
  { name: 'Media Production', description: '' },
  { name: 'Website', description: '' },
];

function StaffSection() {
  return (
    <>
      {staffData.map(({ name, description }, i) => {
        return <Staff key={i} name={name} description={description} />;
      })}
    </>
  );
}

export default StaffSection;

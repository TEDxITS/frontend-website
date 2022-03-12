import React from 'react';

import { staffData } from '@/data/team';

import Staff from './Staff';

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

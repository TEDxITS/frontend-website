import React, { Dispatch, useEffect, useState } from 'react';

import clsxm from '@/lib/clsxm';

import { memberType } from '@/data/team';
import { staffProps } from '@/data/team';

import NextImage from '@/components/NextImage';

type dimensions = {
  expertstaff: number;
  staff: number;
};

function Staff({ name, description }: staffProps) {
  const [active, setActive] = React.useState<number>(0);
  const [hidden, setHidden] = React.useState<boolean>(true);
  const [circleDimensions, setCircleDimensions] = React.useState<dimensions>({
    expertstaff: 320,
    staff: 180,
  });
  const [volunteer, setVolunteer] = useState<memberType[] | []>([]);
  const [expertStaff, setExpertStaff] = useState<memberType[] | []>([]);

  const getTeam = async (
    jabatan: string,
    divisi: string,
    setMember: Dispatch<memberType[]>
  ) => {
    try {
      const res = await fetch('api/getTeamData', {
        method: 'POST',
        body: JSON.stringify({
          jabatan: jabatan,
          divisi: divisi,
        }),
      });
      const data = await res.json();
      setMember(data.content);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const newDimensions = () => {
      if (window.innerWidth < 640)
        setCircleDimensions({ expertstaff: 180, staff: 80 });
      else setCircleDimensions({ expertstaff: 320, staff: 180 });
    };
    window.addEventListener('resize', newDimensions);
    return () => window.removeEventListener('resize', newDimensions);
  }, []);

  useEffect(() => {
    getTeam('Expert Staff', name, setExpertStaff);
    getTeam('Volunteer', name, setVolunteer);
  }, [name]);

  return (
    <div className='bg-cdark layout my-16'>
      <div className='grid grid-cols-3'>
        <div className='col-span-1 mr-10'>
          <h3 className='font-fivo mb-5 font-medium'>{name}</h3>
        </div>
        <div className='col-span-2 text-justify'>
          <p className='font-fivo text-sm leading-tight'>
            {description}Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Pariatur, eaque. Amet dolor officia laboriosam labore. Ducimus
            debitis ut praesentium minus facilis illum, laborum accusamus illo
            magnam mollitia, libero vero adipisci? Amet dolor officia laboriosam
            labore.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-10 py-10'>
        <div className='hidden justify-end items-center sm:flex sm:col-span-1'>
          <p className='font-fivo whitespace-nowrap -rotate-90'>
            General Team Member
          </p>
        </div>
        <div className='col-span-10 sm:col-span-8'>
          <div
            className={clsxm(
              'flex flex-wrap justify-center items-center py-8 sm:py-16',
              [hidden ? '' : 'hidden']
            )}
          >
            {expertStaff.map(({ nama, foto, jabatan, divisi }, i) => {
              return (
                <div key={i} className='flex flex-col items-center mx-16 my-2'>
                  <div className='overflow-hidden rounded-full border-2'>
                    <NextImage
                      src={foto}
                      width={circleDimensions.expertstaff}
                      height={circleDimensions.expertstaff}
                      layout='responsive'
                      objectFit='cover'
                      alt='bg'
                      priority={true}
                    />
                  </div>
                  <h4 className='font-fivo mt-7 mb-4 font-medium'>{nama}</h4>
                  <p className='text-xs text-center'>
                    {jabatan} of <br /> {divisi}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className={clsxm(
              'grid flex-wrap grid-cols-2 justify-center items-center py-6 sm:flex',
              [hidden ? 'hidden sm:hidden' : '']
            )}
          >
            {volunteer.map(({ nama, foto, jabatan, divisi }, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-col items-center m-2 sm:mx-0 sm:my-2'
                >
                  <div className='overflow-hidden mx-5 rounded-full border-2'>
                    <NextImage
                      src={foto}
                      width={circleDimensions.staff}
                      height={circleDimensions.staff}
                      layout='responsive'
                      objectFit='cover'
                      alt='bg'
                      priority={true}
                    />
                  </div>

                  <h4 className='font-fivo mt-4 mb-2 text-sm font-medium text-center sm:text-base'>
                    {nama}
                  </h4>
                  <p className='text-xs text-center sm:text-xs'>
                    {jabatan} of {divisi}
                  </p>
                </div>
              );
            })}
          </div>
          <div className='flex justify-center'>
            {[0, 1].map((_, idx) => (
              <button
                onClick={() => {
                  setActive(idx);
                  setHidden(!hidden);
                }}
                key={idx}
                className={clsxm(
                  'flex justify-center items-center w-7 h-7 rounded-full border',
                  [idx === active ? 'border-cgray' : 'border-transparent']
                )}
              >
                <span
                  className={clsxm(
                    'h-[14px] w-[14px]',
                    'border-cgray flex-shrink-0 rounded-full border ',

                    'transition-all duration-100 ease-in-out',
                    [
                      idx === active
                        ? 'bg-cgray'
                        : 'hover:bg-cgray hover:shadow-md hover:shadow-white/20',
                    ]
                  )}
                >
                  &nbsp;
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className='hidden justify-start items-center sm:flex sm:col-span-1'>
          <p className='font-fivo whitespace-nowrap -rotate-90'>
            General Team Member
          </p>
        </div>
      </div>
    </div>
  );
}

export default Staff;

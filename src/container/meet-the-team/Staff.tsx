import React from 'react';

import clsxm from '@/lib/clsxm';

import { memberType, staffProps } from '@/data/team';

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
  const [volunteer, setVolunteer] = React.useState<memberType[] | []>([]);
  const [expertStaff, setExpertStaff] = React.useState<memberType[] | []>([]);

  const getTeam = async (
    jabatan: string,
    divisi: string,
    setMember: React.Dispatch<memberType[]>
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

  React.useEffect(() => {
    const newDimensions = () => {
      if (window.innerWidth < 640)
        setCircleDimensions({ expertstaff: 180, staff: 80 });
      else setCircleDimensions({ expertstaff: 320, staff: 180 });
    };
    window.addEventListener('resize', newDimensions);
    return () => window.removeEventListener('resize', newDimensions);
  }, []);

  React.useEffect(() => {
    getTeam('Expert Staff', name, setExpertStaff).then(() => {
      if (expertStaff.length === 3) {
        setCircleDimensions({ expertstaff: 230, staff: 180 });
      }
    });
    getTeam('Volunteer', name, setVolunteer);
  }, [name, expertStaff.length]);

  return (
    <div className='bg-cdark layout my-16'>
      <div className='grid relative z-10 grid-cols-3'>
        <div className='col-span-1 mr-10'>
          <h3 className='font-fivo mb-5 font-medium'>{name}</h3>
        </div>
        <div className='col-span-2 text-justify'>
          <p className='font-fivo text-sm leading-tight'>{description}</p>
        </div>
      </div>
      <div className='grid relative z-10 grid-cols-10 py-10'>
        <div className='hidden justify-end items-center sm:flex sm:col-span-1'>
          <p className='cursor-vertical-text font-fivo whitespace-nowrap -rotate-90'>
            General Team Member
          </p>
        </div>
        <div className='relative z-10 col-span-10 sm:col-span-8'>
          <div
            className={clsxm(
              'min-h-[41rem] flex flex-wrap justify-center items-center',
              [hidden && expertStaff.length !== 0 ? '' : 'hidden']
            )}
          >
            {expertStaff.map(({ nama, foto, jabatan, divisi }, i) => {
              return (
                <div key={i} className='flex flex-col items-center mx-5 my-2'>
                  <div className='overflow-hidden rounded-full border-0'>
                    <NextImage
                      src={foto || '/images/merch/cap.png'}
                      width={circleDimensions.expertstaff}
                      height={circleDimensions.expertstaff}
                      layout='responsive'
                      objectFit='cover'
                      alt='bg'
                      quality={50}
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
              'min-h-[41rem] grid flex-wrap grid-cols-2 justify-center items-center py-6 sm:flex',
              [hidden && expertStaff.length !== 0 ? 'hidden sm:hidden' : '']
            )}
          >
            {volunteer.map(({ nama, foto, jabatan, divisi }, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-col items-center m-2 sm:h-[16rem] sm:w-[14rem] sm:mx-0 sm:my-2'
                >
                  <div className='overflow-hidden rounded-full border-0'>
                    <NextImage
                      src={foto || '/images/merch/cap.png'}
                      width={circleDimensions.staff}
                      height={circleDimensions.staff}
                      layout='responsive'
                      objectFit='cover'
                      alt='bg'
                      quality={50}
                    />
                  </div>
                  <div className='h-1/5'>
                    <h4 className='font-fivo mt-4 mb-2 text-sm font-medium text-center sm:text-base'>
                      {nama}
                    </h4>
                    <p className='text-xs text-center sm:text-xs'>
                      {jabatan} of {divisi}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={clsxm('flex justify-center', [
              expertStaff.length === 0 ? 'hidden' : '',
            ])}
          >
            {[...Array(2)].map((_, idx) => (
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
          <p className='cursor-vertical-text font-fivo whitespace-nowrap -rotate-90'>
            General Team Member
          </p>
        </div>
      </div>
    </div>
  );
}

export default Staff;

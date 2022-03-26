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
      <div className='grid grid-cols-3 relative z-10'>
        <div className='col-span-1 mr-10'>
          <h3 className='font-fivo font-medium mb-5'>{name}</h3>
        </div>
        <div className='col-span-2 text-justify'>
          <p className='font-fivo leading-tight text-sm'>{description}</p>
        </div>
      </div>
      <div className='grid grid-cols-10 py-10 relative z-10'>
        <div className='hidden items-center justify-end sm:col-span-1 sm:flex'>
          <p className='-rotate-90 cursor-vertical-text font-fivo whitespace-nowrap'>
            General Team Member
          </p>
        </div>
        <div className='col-span-10 relative z-10 sm:col-span-8'>
          <div
            className={clsxm(
              'flex flex-wrap items-center justify-center min-h-[41rem]',
              [hidden && expertStaff.length !== 0 ? '' : 'hidden']
            )}
          >
            {expertStaff.map(({ nama, foto, jabatan, divisi }, i) => {
              return (
                <div key={i} className='flex flex-col items-center mx-5 my-2'>
                  <div className='border-0 overflow-hidden rounded-full'>
                    <NextImage
                      src={foto}
                      width={circleDimensions.expertstaff}
                      height={circleDimensions.expertstaff}
                      layout='responsive'
                      objectFit='cover'
                      alt='bg'
                      quality={50}
                      useSkeleton={true}
                    />
                  </div>
                  <h4 className='font-fivo font-medium mb-4 mt-7'>{nama}</h4>
                  <p className='text-center text-xs'>
                    {jabatan} of <br /> {divisi}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className={clsxm(
              'flex-wrap grid grid-cols-2 items-center justify-center min-h-[41rem] py-6 sm:flex',
              [hidden && expertStaff.length !== 0 ? 'hidden sm:hidden' : '']
            )}
          >
            {volunteer.map(({ nama, foto, jabatan, divisi }, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-col items-center m-2 sm:h-[16rem] sm:mx-0 sm:my-2 sm:w-[14rem]'
                >
                  <div className='border-0 overflow-hidden rounded-full'>
                    <NextImage
                      src={foto || '/images/merch/cap.png'}
                      width={circleDimensions.staff}
                      height={circleDimensions.staff}
                      layout='responsive'
                      objectFit='cover'
                      alt='bg'
                      quality={50}
                      useSkeleton={true}
                    />
                  </div>
                  <div className='h-1/5'>
                    <h4 className='font-fivo font-medium mb-2 mt-4 text-center text-sm sm:text-base'>
                      {nama}
                    </h4>
                    <p className='text-center text-xs sm:text-xs'>
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
                  'border flex h-7 items-center justify-center rounded-full w-7',
                  [idx === active ? 'border-cgray' : 'border-transparent']
                )}
              >
                <span
                  className={clsxm(
                    'h-[14px] w-[14px]',
                    'border border-cgray flex-shrink-0 rounded-full ',

                    'duration-100 ease-in-out transition-all',
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
        <div className='hidden items-center justify-start sm:col-span-1 sm:flex'>
          <p className='-rotate-90 cursor-vertical-text font-fivo whitespace-nowrap'>
            General Team Member
          </p>
        </div>
      </div>
    </div>
  );
}

export default Staff;

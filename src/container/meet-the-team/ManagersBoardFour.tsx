import React, { useEffect } from 'react';

import clsxm from '@/lib/clsxm';

import { BoardProps, memberType } from '@/data/team';

import NextImage from '@/components/NextImage';

const teamStyle = [
  `translate-x-[calc(-1.75rem-25rem)]`,
  `translate-x-[calc(-2.25rem+0rem)] sm:translate-x-[calc(-1.75rem+0rem)]`,
  `translate-x-[calc(-1.75rem+25rem)]`,
  `translate-x-[calc(-1.75rem+50rem)]`,
  `translate-x-[calc(-1.75rem+75rem)]`,
];

function ManagersBoardFive({ data, name, description, isManager }: BoardProps) {
  const [active, setActive] = React.useState<number>(0);
  const [order, setOrder] = React.useState<memberType[]>([...data, data[0]]);
  let num: number;

  function managersBoardLogic(index: number) {
    if (active >= 4) {
      setActive(0);
    } else if (active <= -4) {
      setActive(0);
    }
    num = index + active;
    if (num < 0) {
      num += 5;
    } else if (num > 4) {
      num -= 5;
    }
  }

  useEffect(() => {
    if (active === 0) {
      setOrder([data[0], data[1], data[2], data[3], data[0]]);
    } else if (active === -1) {
      setOrder([data[1], data[1], data[2], data[3], data[0]]);
    } else if (active === -2) {
      setOrder([data[1], data[2], data[2], data[3], data[0]]);
    } else if (active === -3) {
      setOrder([data[1], data[2], data[3], data[3], data[0]]);
    } else if (active === 1) {
      setOrder([data[0], data[1], data[2], data[3], data[3]]);
    } else if (active === 2) {
      setOrder([data[0], data[1], data[2], data[2], data[3]]);
    } else if (active === 3) {
      setOrder([data[0], data[1], data[1], data[2], data[3]]);
    }
  }, [active, data]);

  return (
    <div className='bg-cblue bg-repeat bg-texture layout my-6 sm:my-16'>
      <div className='flex flex-wrap-reverse gap-6 justify-between mb-2 mt-3 sm:flex-nowrap sm:mb-9'>
        <div className='w-full z-10 sm:w-1/3'>
          <h3 className='font-fivo font-medium mb-5'>{name} Departement</h3>
          <p className='font-fivo leading-tight text-xs'>{description}</p>
        </div>
        <div className='flex justify-center mx-16 w-full sm:w-1/3'>
          <NextImage
            src='/images/meet-the-team/circle-1.png'
            width={285.5}
            height={100}
            layout='responsive'
            objectFit='cover'
            alt='circle'
            className='-translate-y-6 absolute sm:-translate-y-4 md:-translate-y-2'
          />
          <h2 className='font-fivo font-medium text-center text-white z-10'>
            BO<span className='font-normal font-pilow'>A</span>RD OF<> </>
            {isManager ? (
              <>
                MANA<span className='font-normal font-pilow'>G</span>ERS
              </>
            ) : (
              <>
                D<span className='font-normal font-pilow'>I</span>RECTORS
              </>
            )}
          </h2>
        </div>
        <div className='flex justify-end w-full sm:w-1/3'>
          <NextImage
            src='/images/meet-the-team/arrow-1.png'
            width={60}
            height={64}
            layout='responsive'
            objectFit='cover'
            alt='arrow'
          />
        </div>
      </div>
      <div className='h-[39rem] py-10 space-x-4'>
        <div className='flex'>
          <button
            onClick={() => setActive(active + 1)}
            className='absolute bg-clight h-16 right-1 rounded-full shdaow-lg translate-y-52 w-16 z-10 sm:right-16'
          >
            <h2 className='mb-2 text-5xl text-black'>&rarr;</h2>
          </button>
          <button
            onClick={() => setActive(active - 1)}
            className='absolute bg-clight h-16 left-1 rounded-full shdaow-lg translate-y-52 w-16 z-10 sm:left-16'
          >
            <h2 className='mb-2 text-5xl text-black'>&larr;</h2>
          </button>
        </div>
        {order.map(({ nama, foto, jabatan, divisi }, index) => {
          managersBoardLogic(index);
          return (
            <div
              key={index}
              className={clsxm(
                'absolute ease-in-out rounded-lg transition-all',
                [teamStyle[num]]
              )}
            >
              <div className='border-0 overflow-hidden rounded-lg shadow-lg'>
                <NextImage
                  src={foto}
                  width={366}
                  height={440}
                  layout='responsive'
                  objectFit='cover'
                  alt='Manager Photo'
                  useSkeleton={true}
                />
              </div>
              <h3 className='drop-shadow-lg font-bold font-fivo mb-4 mt-5'>
                {nama}
              </h3>
              <h4 className='drop-shadow-lg font-fivo text-md'>
                {jabatan} of <br />
                {divisi}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManagersBoardFive;

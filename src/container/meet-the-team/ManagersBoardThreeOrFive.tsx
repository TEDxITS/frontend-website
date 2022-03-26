import React from 'react';

import clsxm from '@/lib/clsxm';

import { BoardProps } from '@/data/team';

import NextImage from '@/components/NextImage';

const teamStyleFive = [
  `translate-x-[calc(-1.75rem-25rem)]`,
  `translate-x-[calc(-2.25rem+0rem)] sm:translate-x-[calc(-1.75rem+0rem)]`,
  `translate-x-[calc(-1.75rem+25rem)]`,
  `translate-x-[calc(-1.75rem+50rem)]`,
  `translate-x-[calc(-1.75rem+75rem)]`,
];

const teamStyleThree = [
  `translate-x-[calc(-2.25rem+0rem)] sm:translate-x-[calc(-1.75rem+0rem)]`,
  `translate-x-[calc(-1.75rem+25rem)]`,
  `translate-x-[calc(-1.75rem+50rem)]`,
];

function Managers({ data, name, description, isManager }: BoardProps) {
  const [active, setActive] = React.useState<number>(0);
  const datalength = data.length;
  const teamStyle = datalength === 3 ? teamStyleThree : teamStyleFive;
  let num: number;

  function managersBoardLogic(index: number) {
    if (active >= datalength) {
      setActive(0);
    } else if (active <= -datalength) {
      setActive(0);
    }
    num = index + active;
    if (num < 0) {
      num += datalength;
    } else if (num > datalength - 1) {
      num -= datalength;
    }
  }

  return (
    <div className='bg-cblue bg-repeat bg-texture layout my-6 sm:my-16'>
      <div className='flex flex-wrap-reverse gap-6 justify-between mb-9 mt-3 sm:flex-nowrap'>
        <div className='w-full z-10 sm:w-1/3'>
          <h3 className='font-fivo font-medium mb-5'>
            {name ? name + ' Department' : ''}
          </h3>
          <p className='font-fivo leading-tight text-xs'>{description}</p>
        </div>
        <div className='flex justify-center mb-8 w-full sm:mb-0 sm:w-1/3'>
          <NextImage
            src='/images/meet-the-team/circle-1.png'
            width={285.5}
            height={100}
            layout='responsive'
            objectFit='cover'
            alt='circle'
            className='-translate-y-8 absolute sm:-translate-y-4 md:-translate-y-2'
          />
          <h2 className='font-fivo font-medium mx-0 text-center text-white z-10 md:mx-16'>
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
            className='--translate-y-4 relative z-0 sm:-translate-y-2'
          />
        </div>
      </div>
      <div className='h-[39rem] py-10 space-x-4'>
        <div
          className={clsxm(
            [datalength === 5 && 'flex'],
            [datalength === 3 && 'flex md:hidden']
          )}
        >
          <button
            onClick={() => setActive(active + 1)}
            className='absolute bg-clight h-16 right-1 rounded-full shadow-lg translate-y-52 w-16 z-10 sm:right-16'
          >
            <h2 className='mb-2 text-5xl text-black'>&rarr;</h2>
          </button>
          <button
            onClick={() => setActive(active - 1)}
            className='absolute bg-clight h-16 left-1 rounded-full shadow-lg translate-y-52 w-16 z-10 sm:left-16'
          >
            <h2 className='mb-2 text-5xl text-black'>&larr;</h2>
          </button>
        </div>

        {data.map(({ nama, foto, jabatan, divisi }, index) => {
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
              <h3 className='drop-shadow-lg font-bold font-fivo mb-4 mt-5 w-[366px]'>
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

export default Managers;

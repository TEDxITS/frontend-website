import React from 'react';

import clsxm from '@/lib/clsxm';

import { exeProps } from '@/data/team';

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

function Managers({ data }: exeProps) {
  const [active, setActive] = React.useState<number>(0);
  const datalength = data.length;
  const teamStyle = datalength === 3 ? teamStyleThree : teamStyleFive;
  let num: number;

  function executivesBoardLogic(index: number) {
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
    <div className='layout'>
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

        {data.map(({ nama, foto, jabatan }, index) => {
          executivesBoardLogic(index);
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
                  alt='Executive Photo'
                  useSkeleton={true}
                />
              </div>
              <h3 className='drop-shadow-lg font-bold font-fivo mb-4 mt-5 w-[366px]'>
                {nama}
              </h3>
              <h4 className='drop-shadow-lg font-fivo text-md'>{jabatan}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Managers;

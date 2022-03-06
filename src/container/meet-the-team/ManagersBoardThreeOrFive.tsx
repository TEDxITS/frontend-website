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

  return (
    <div className='bg-cblue bg-texture layout my-6 bg-repeat sm:my-16'>
      <div className='flex flex-wrap-reverse gap-6 justify-between mt-3 mb-9 sm:flex-nowrap'>
        <div className='z-10 w-full sm:w-1/3'>
          <h3 className='font-fivo mb-5 font-medium'>
            {name ? name + ' Department' : ''}
          </h3>
          <p className='font-fivo text-xs leading-tight'>{description}</p>
        </div>
        <div className='flex justify-center mb-8 w-full sm:mb-0 sm:w-1/3'>
          <NextImage
            src='/images/meet-the-team/circle-1.png'
            width={285.5}
            height={100}
            layout='responsive'
            objectFit='cover'
            alt='circle'
            priority={true}
            className='absolute -translate-y-8 sm:-translate-y-4 md:-translate-y-2'
          />
          <h2 className='font-fivo z-10 mx-0 font-medium text-center text-white md:mx-16'>
            BO<span className='font-pilow font-normal'>A</span>RD OF<> </>
            {isManager ? (
              <>
                MANA<span className='font-pilow font-normal'>G</span>ERS
              </>
            ) : (
              <>
                D<span className='font-pilow font-normal'>I</span>RECTORS
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
            priority={true}
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
            className='bg-clight shdaow-lg absolute right-1 z-10 w-16 h-16 rounded-full translate-y-52 sm:right-16'
          >
            <h2 className='mb-2 text-5xl text-black'>&rarr;</h2>
          </button>
          <button
            onClick={() => setActive(active - 1)}
            className='bg-clight shdaow-lg absolute left-1 z-10 w-16 h-16 rounded-full translate-y-52 sm:left-16'
          >
            <h2 className='mb-2 text-5xl text-black'>&larr;</h2>
          </button>
        </div>

        {data.map(({ nama, foto, jabatan, divisi }, index) => {
          if (active >= datalength) {
            setActive(0);
          } else if (active <= -datalength) {
            setActive(0);
          }
          let num = index + active;
          if (num < 0) {
            num += datalength;
          } else if (num > datalength - 1) {
            num -= datalength;
          }
          return (
            <div
              key={index}
              className={clsxm(
                'absolute rounded-lg transition-all ease-in-out',
                [teamStyle[num]]
              )}
            >
              <div className='rounded-md border-2 shadow-lg'>
                <NextImage
                  src={foto}
                  width={366}
                  height={440}
                  layout='responsive'
                  objectFit='cover'
                  alt='bg'
                  priority={true}
                />
              </div>
              <h3 className='font-fivo w-[366px] mt-5 mb-4 font-bold drop-shadow-lg'>
                {nama}
              </h3>
              <h4 className='font-fivo text-md drop-shadow-lg'>
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

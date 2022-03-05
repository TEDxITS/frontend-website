import React from 'react';

import clsxm from '@/lib/clsxm';

import { memberType } from '@/data/team';

import NextImage from '@/components/NextImage';

interface MemberProps {
  data: memberType[];
}

const teamStyle = [
  `translate-x-[calc(-1.75rem+0rem)]`,
  `translate-x-[calc(-1.75rem+25rem)]`,
  `translate-x-[calc(-1.75rem+50rem)]`,
];

function Managers({ data }: MemberProps) {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className='bg-cblue bg-texture layout my-16 bg-repeat'>
      <div className='grid grid-cols-3 mt-3 mb-9'>
        <div className='col-span-1 mr-10'>
          <h3 className='font-fivo mb-5 font-medium'>
            Marketing &amp; Branding Departement
          </h3>
          <p className='font-fivo text-xs leading-tight'>
            Elephant flocks inside this room is working on TEDxITS 2022
            publication, campaign, design, video, and website to introduce
            everything about TEDxITS 2022.
          </p>
        </div>
        <div className='col-span-1 mx-10'>
          <NextImage
            src='/images/meet-the-team/circle-1.png'
            width={286}
            height={100}
            layout='responsive'
            objectFit='cover'
            alt='circle'
            priority={true}
            className='left-[50%] absolute -translate-x-1/2 -translate-y-2'
          />
          <h2 className='font-fivo font-medium text-center text-white'>
            BO<span className='font-pilow font-normal'>A</span>RD OF MANA
            <span className='font-pilow font-normal'>G</span>ERS
          </h2>
        </div>
        <div className='flex col-span-1 justify-end'>
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
        <div className='flex md:hidden'>
          <button
            onClick={() => setActive(active + 1)}
            className='bg-clight shdaow-lg absolute right-16 z-10 w-16 h-16 rounded-full translate-y-52'
          >
            <h2 className='mb-2 text-5xl text-black'>&rarr;</h2>
          </button>
          <button
            onClick={() => setActive(active - 1)}
            className='bg-clight shdaow-lg absolute left-16 z-10 w-16 h-16 rounded-full translate-y-52'
          >
            <h2 className='mb-2 text-5xl text-black'>&larr;</h2>
          </button>
        </div>

        {data.map(({ nama, foto, jabatan, divisi }, index) => {
          let num = index + active;
          if (num < 0) {
            num += 3;
          } else if (num > 2) {
            num -= 3;
          }
          if (active >= 3) {
            setActive(0);
          } else if (active <= -3) {
            setActive(0);
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
                />
              </div>
              <h3 className='font-fivo mt-5 mb-4 font-bold drop-shadow-lg'>
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

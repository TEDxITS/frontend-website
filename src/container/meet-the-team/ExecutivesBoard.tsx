import React from 'react';

import clsxm from '@/lib/clsxm';

import { memberType } from '@/data/team';

import NextImage from '@/components/NextImage';

interface MemberProps {
  data: memberType[];
}

const teamStyle = [
  `translate-x-[calc(-2.25rem+0rem)] sm:translate-x-[calc(-1.75rem+0rem)]`,
  `translate-x-[calc(-1.75rem+25rem)]`,
  `translate-x-[calc(-1.75rem+50rem)]`,
];

function Executives({ data }: MemberProps) {
  const [active, setActive] = React.useState<number>(0);

  return (
    <div className='layout relative z-10 mb-6 sm:mb-16'>
      <div className='flex flex-wrap-reverse gap-6 justify-between mb-9 sm:flex-nowrap'>
        <div className='h-[39rem] py-10 space-x-4'>
          <div className={clsxm('flex md:hidden')}>
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
            if (active >= 3) {
              setActive(0);
            } else if (active <= -3) {
              setActive(0);
            }
            let num = index + active;
            if (num < 0) {
              num += 3;
            } else if (num > 3 - 1) {
              num -= 3;
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
    </div>
  );
}

export default Executives;

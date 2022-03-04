import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

function StaffSection() {
  const [active, setActive] = React.useState<number>(0);
  const [hidden, setHidden] = React.useState<boolean>(true);
  return (
    <div className='bg-cdark layout my-16'>
      <div className='grid grid-cols-3'>
        <div className='col-span-1 mr-10'>
          <h3 className='font-fivo mb-5 font-medium'>Program</h3>
        </div>
        <div className='col-span-2 text-justify'>
          <p className='font-fivo text-sm leading-tight'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur,
            eaque. Amet dolor officia laboriosam labore. Ducimus debitis ut
            praesentium minus facilis illum, laborum accusamus illo magnam
            mollitia, libero vero adipisci? Amet dolor officia laboriosam
            labore.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-10 py-10'>
        <div className='flex col-span-1 justify-end items-center'>
          <p className='font-fivo whitespace-nowrap -rotate-90'>
            General Team Member
          </p>
        </div>
        <div className='col-span-8'>
          <div
            className={clsxm(
              'flex justify-center items-center py-16 space-x-20',
              [hidden ? '' : 'hidden']
            )}
          >
            {[0, 1].map((i) => {
              return (
                <div key={i} className='flex flex-col items-center'>
                  <NextImage
                    src='/images/merch/cap.png'
                    width={320}
                    height={320}
                    layout='responsive'
                    objectFit='cover'
                    alt='bg'
                    priority={true}
                    className='rounded-full border-2'
                  />
                  <h4 className='font-fivo mt-7 mb-4 font-medium'>
                    Azeva Haqqi Pradiar
                  </h4>
                  <p className='text-xs text-center'>
                    Expert Staff of <br /> Program
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className={clsxm(
              'flex flex-wrap justify-center items-center py-3',
              [hidden ? 'hidden' : '']
            )}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              return (
                <div key={i} className='flex flex-col items-center my-2'>
                  <NextImage
                    src='/images/merch/cap.png'
                    width={180}
                    height={180}
                    layout='responsive'
                    objectFit='cover'
                    alt='bg'
                    priority={true}
                    className='mx-5 rounded-full border-2'
                  />
                  <h4 className='font-fivo mt-4 mb-2 font-medium'>
                    Azeva Haqqi Pradiar
                  </h4>
                  <p className='text-xs text-center'>Staff of Program</p>
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
        <div className='flex col-span-1 justify-start items-center'>
          <p className='font-fivo whitespace-nowrap -rotate-90'>
            General Team Member
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaffSection;

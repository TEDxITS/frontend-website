import React from 'react';

import NextImage from '@/components/NextImage';

function Managers() {
  return (
    <div className='bg-cblue layout my-16'>
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
          <h2 className='font-fivo font-medium text-center text-white'>
            BO<span className='font-pilow font-normal'>A</span>RD OF MANA
            <span className='font-pilow font-normal'>G</span>ERS
          </h2>
        </div>
        <div className='col-span-1 text-right'>Tes</div>
      </div>
      <div className='flex justify-center space-x-4'>
        <button className='bg-clight shdaow-lg absolute right-16 z-10 w-16 h-16 rounded-full translate-y-52'>
          <h2 className='mb-2 text-5xl text-black'>&rarr;</h2>
        </button>
        <button className='bg-clight shdaow-lg absolute left-16 z-10 w-16 h-16 rounded-full translate-y-52'>
          <h2 className='mb-2 text-5xl text-black'>&larr;</h2>
        </button>
        {[0, 1, 2, 3, 4].map((i) => {
          return (
            <div key={i}>
              <div className='rounded-md border-2 shadow-lg'>
                <NextImage
                  src='/images/merch/cap.png'
                  width={366}
                  height={440}
                  layout='responsive'
                  objectFit='cover'
                  alt='bg'
                  priority={true}
                  className=''
                />
              </div>
              <h3 className='font-fivo mt-5 mb-4 font-bold drop-shadow-lg'>
                Wina Tungmiharja
              </h3>
              <h4 className='font-fivo text-md drop-shadow-lg'>
                Manager of <br />
                Website
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Managers;

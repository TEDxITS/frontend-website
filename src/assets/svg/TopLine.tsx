import React from 'react';

export default function TopLine({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 554.93 218.27'
      {...rest}
    >
      <path
        d='M29.64 293.57c14.89-9.8 36.36-.43 45.33 15s8.66 34.34 7.17 52.1-3.86 36.11 1.71 53c11.26 34.19 51.11 50.68 87.09 51.58a175.94 175.94 0 0 0 104.84-31.76c9.31-6.56 18.25-14.38 22.85-24.79 7.63-17.23-1.45-41.13-19.82-45.35S241.15 382 251.11 398c5.65 9.09 16.91 12.54 27.1 15.79a351.22 351.22 0 0 1 106.3 55.38c7.43 5.67 15.23 12.78 15.68 22.11s-12.15 18-18.43 11.05c-2-10.1 4.3-19.9 11.17-27.57 30.31-33.8 75-49.9 114.25-72.78s77-60.12 75-105.48'
        transform='translate(-28.82 -288.06)'
        fill='none'
        stroke='#f3f1ee'
        strokeMiterlimit='10'
        clipPath='url(#clip-path)'
        strokeWidth='2'
        strokeDasharray='1000'
        strokeDashoffset='1000'
        className='animate-draw'
        opacity={0.5}
      />
    </svg>
  );
}

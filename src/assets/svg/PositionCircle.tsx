import React from 'react';

export default function PositionCircle({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 606.12 160.55'
      {...rest}
    >
      <g data-name='Layer 2'>
        <path
          fill='none'
          stroke='#fff'
          strokeLinecap='round'
          strokeWidth='0.5'
          strokeDasharray='5000'
          className='animate-[draw-reverse_60s_linear_infinite]'
          d='M358.16 28.47c-56.51-3.61-113.66-7.22-170.58-3.63S73.12 40 33.39 62.39c-21.07 11.88-37 28-31.93 43.76 7.54 23.48 55.86 35.43 99.14 41.51 135.22 19 282.18 16.09 416.81-8.19 39.18-7.07 83.29-19.88 87.84-41.59 1.53-7.31-1.93-14.58-6.72-21.38C567.88 33 482.39 5.26 394.61 1.13S218.1 13.46 141.36 38c-27.31 8.72-54.19 18.85-71.71 33s-23.94 33.13-8.83 47.53c20.26 19.31 68.37 23.5 110.33 25.11 127 4.86 254.94 4.71 382.45-.46'
          data-name='Layer 1'
        />
      </g>
    </svg>
  );
}

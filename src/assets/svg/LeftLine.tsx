import React from 'react';

export default function LeftLine({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 472.31 746.45'
      {...rest}
    >
      <path
        fill='none'
        stroke='#f3f1ee'
        strokeMiterlimit='10'
        clipPath='url(#clip-path)'
        strokeWidth='3'
        strokeDasharray='1000'
        strokeDashoffset='1000'
        className='animate-draw'
        opacity={0.8}
        d='M70.44 24.77c44.67 2.7 80.66 41.25 94.67 83.75s10.62 88.53 7.08 133.14l-13.77 173.55c-1.93 24.27-3.66 49.74 6.29 72 10.35 23.13 32.38 39.52 56.27 48s49.66 9.83 75 9.65a657.72 657.72 0 0 0 97.79-8c15.5-2.44 34.84-10 34.26-25.69-.22-6-3.75-11.53-8.43-15.3-14-11.26-36.69-6.14-47.75 8s-11.84 34.36-6 51.35 17.39 31.37 29.45 44.69c50.24 55.54 114.32 101.35 146 169.22'
        transform='translate(-70.35 -23.28)'
      />
    </svg>
  );
}

import React from 'react';

export default function DrawTopLeft({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 45.21 37.58'
      {...rest}
    >
      <path
        d='M145 315.3c4.34-8.19 7.81-14 8.72-13.65 1.58.67-5.34 19.74-4 20.28 1.19.46 5.16-14.55 17.38-25.35a52 52 0 0 1 22.09-11.23'
        transform='translate(-144.53 -284.85)'
        fill='none'
        stroke='#212121'
        strokeMiterlimit='10'
        strokeWidth='1'
        strokeDasharray='1000'
        strokeDashoffset='10'
        className='animate-draw'
      />
    </svg>
  );
}

import React from 'react';

export default function RightLine({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 603.61 471.68'
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
        d='M11.81 633C3.15 595.49 9 555.62 22.91 519.7s35.67-68.31 59.26-98.77c21.68-28 45.29-54.83 73.39-76.38 54.52-41.81 123.52-61.54 192.06-66.19 22.72-1.54 45.67-1.55 67.93-6.34s44.27-15 58.07-33.14 17.31-45.11 4.11-63.65c-6.43-9-19.05-15.61-28.56-9.88-7.7 4.63-9.6 15.54-6.59 24s9.72 15 16.35 21.11c29 26.56 60.88 50.06 88.69 77.91s51.92 61.08 60.77 99.44'
        transform='translate(-6.24 -161.7)'
      />
    </svg>
  );
}

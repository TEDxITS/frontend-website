import React from 'react';

export default function DrawTopRight({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 21.4 19.22'
      {...rest}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:none;stroke:#212121;stroke-linecap:round;stroke-linejoin:round}'
          }
        </style>
      </defs>
      <path
        className='cls-1'
        d='M434.85 300.42c.81.14 1.67.27 2.6.35a28.55 28.55 0 0 0 5.91-.08M435.08 293.32a37.48 37.48 0 0 0 6.05-2.72 36.76 36.76 0 0 0 9.19-7.34M429.92 287.88a12.53 12.53 0 0 0 1.24-2.42 12.67 12.67 0 0 0 .71-2.79'
        transform='translate(-429.42 -282.17)'
      />
    </svg>
  );
}

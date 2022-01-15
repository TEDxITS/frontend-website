import React from 'react';

export default function DrawBottomLeft({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 40.33 37.84'
      {...rest}
    >
      <path
        fill='none'
        stroke='#212121'
        strokeMiterlimit='10'
        strokeWidth='1'
        transform='translate(-144.28 -457.08)'
        d='M144.78 464.14a33.87 33.87 0 0 0 28.71-6.56 85.05 85.05 0 0 0-5.3 9.37c-2.37 4.86-2.08 5.44-1.88 5.62 1 .89 6-3.1 8.74-5.62a41.4 41.4 0 0 0 4.06-4.37 123 123 0 0 0-3.43 16.23c-1.26 8.93-.59 11.45.93 13.11 2.13 2.31 5.54 2.54 7.5 2.49'
      />
    </svg>
  );
}

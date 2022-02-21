import React from 'react';

export default function CampaignArrow({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 102.96 252.84'
      {...rest}
    >
      <defs>
        <style>
          {
            '.campaignarrow-cls-1{fill:none;stroke:#de4b44;stroke-miterlimit:10;stroke-width:2px}'
          }
        </style>
      </defs>
      <path
        className='campaignarrow-cls-1'
        d='M252.94 546.76c64.07-53.11 88.89-128.3 64.91-183-5-11.37-17.73-34.81-50.37-54'
        transform='translate(-245.37 -308.83)'
      />
      <path
        className='campaignarrow-cls-1'
        d='M264.9 452.9c1.56 36.25-5 72.68-17.7 106.69a491.48 491.48 0 0 1 100.87-38.47'
        transform='translate(-245.37 -308.83)'
      />
    </svg>
  );
}

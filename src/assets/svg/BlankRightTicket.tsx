import React from 'react';

export default function BlankRightTicket({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 170.25 298.42'
      {...rest}
    >
      <g data-name='Layer 2'>
        <path
          d='m170.25 20.1-.48 258.53a20.65 20.65 0 0 0-20.68 19.79l-129.34-.24A20.62 20.62 0 0 0 0 278.35h3.45v-10.34H0v-21.63h3.51v-21.63H.1v-21.63h3.49v-21.64H.18v-21.63h3.49v-21.61H.26v-21.63h3.49L3.79 95H.34V73.37h3.49V51.74H.42V30.11h3.49V19.77H.48A20.62 20.62 0 0 0 20.31 0l129.33.24a20.65 20.65 0 0 0 20.61 19.86Z'
          style={{
            fill: '#2F65E7',
          }}
          data-name='Layer 3'
        />
      </g>
    </svg>
  );
}

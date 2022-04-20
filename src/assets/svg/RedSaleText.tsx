import * as React from 'react';

export default function RedSaleText({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 177 70'
      {...rest}
    >
      <text
        transform='translate(-.06 60.2)'
        style={{
          fontSize: '70.59px',
          fill: '#fd4100',
          fontFamily: 'FivoSansModern-Regular,Fivo Sans Modern',
          letterSpacing: '-.1em',
        }}
      >
        {'S'}
        <tspan
          x={38.47}
          y={0}
          style={{
            fontFamily: 'Pilowlava-Regular,Pilowlava',
          }}
        >
          {'A'}
        </tspan>
        <tspan
          x={87.89}
          y={0}
          style={{
            letterSpacing: '-.1em',
          }}
        >
          {'LE!'}
        </tspan>
      </text>
    </svg>
  );
}

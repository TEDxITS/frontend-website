import * as React from 'react';

export default function TicketText({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      id='Layer_1'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 612.74 237.07'
      {...rest}
    >
      <defs>
        <style>{'.cls-2{font-family:Pilowlava-Regular,Pilowlava}'}</style>
      </defs>
      <text
        transform='translate(178.99 68.32)'
        style={{
          fontFamily: 'LuckiestGuy-Regular,Luckiest Guy',
          fontSize: '77.07px',
          fill: '#2561e7',
          stroke: '#212121',
          strokeMiterlimit: 10,
        }}
      >
        {'LOR'}
        <tspan className='cls-2' x={130.7} y={0}>
          {'E'}
        </tspan>
        <tspan x={193.82} y={0}>
          {'M '}
        </tspan>
        <tspan className='cls-2'>
          <tspan x={-47.41} y={70.65}>
            {'I'}
          </tspan>
          <tspan
            x={-14.34}
            y={70.65}
            style={{
              fontFamily: 'LuckiestGuy-Regular,Luckiest Guy',
            }}
          >
            {'PSUM SIT '}
          </tspan>
        </tspan>
        <tspan x={9.69} y={141.3}>
          {'DO'}
        </tspan>
        <tspan className='cls-2' x={103.74} y={141.3}>
          {'L'}
        </tspan>
        <tspan x={149.21} y={141.3}>
          {'OR'}
        </tspan>
      </text>
    </svg>
  );
}

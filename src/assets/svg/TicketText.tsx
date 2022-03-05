import * as React from 'react';

export default function TicketText({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 477 186.78' {...rest}>
      <defs>
        <style>{'.b{font-family:Pilowlava-Regular,Pilowlava}'}</style>
      </defs>
      <text
        transform='translate(108.52 53.3)'
        style={{
          fill: '#185def',
          stroke: '#212121',
          strokeMiterlimit: 10,
          fontFamily: 'LuckiestGuy-Regular,Luckiest Guy',
          fontSize: 60,
        }}
      >
        {'c'}
        <tspan className='b' x={30.76} y={0}>
          {'a'}
        </tspan>
        <tspan x={78.76} y={0}>
          {'ll F'}
        </tspan>
        <tspan className='b' x={173.86} y={0}>
          {'O'}
        </tspan>
        <tspan x={223.6} y={0} xmlSpace='preserve'>
          {'r  '}
        </tspan>
        <tspan
          style={{
            fontSize: 65,
          }}
        >
          <tspan x={33.02} y={57}>
            {'L'}
          </tspan>
          <tspan className='b' x={62.41} y={57}>
            {'o'}
          </tspan>
          <tspan x={116.29} y={57}>
            {'c'}
          </tspan>
          <tspan
            x={149.62}
            y={57}
            style={{
              fontFamily: 'Pilowlava-Regular,Pilowlava',
              fontSize: 60,
            }}
          >
            {'a'}
          </tspan>
          <tspan x={197.61} y={57}>
            {'l'}
          </tspan>
          <tspan
            x={226.94}
            y={57}
            style={{
              fontSize: 60,
            }}
          />
        </tspan>
        <tspan x={-35.46} y={112}>
          {'sp'}
        </tspan>
        <tspan className='b' x={32.25} y={112}>
          {'e'}
        </tspan>
        <tspan x={81.39} y={112}>
          {'a'}
        </tspan>
        <tspan
          x={118.95}
          y={112}
          style={{
            letterSpacing: '-.04em',
          }}
        >
          {'k'}
        </tspan>
        <tspan x={152.76} y={112}>
          {'eR'}
        </tspan>
        <tspan className='b' x={223.71} y={112}>
          {'s!'}
        </tspan>
      </text>
    </svg>
  );
}

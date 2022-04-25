import React from 'react';

export default function BlankLeftTicket({
  ...rest
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1029.88 299.96'
      {...rest}
    >
      <g data-name='Layer 2'>
        <path
          d='M1023.64 53.6v21.63h6.2v21.64h-6.2v21.63h6.2v21.63h-6.2l-.05 21.62h6.21v21.63h-6.21v21.63h6.21v21.63h-6.2v21.63h6.2v21.63h-6.2v10.34h2.42c-19 .58-34.18 9.1-35 19.72l-955.46-1.79c-.73-10.73-16.24-19.4-35.56-19.85L.48 21.44C20.32 21.05 36.16 12 36.18.86a4.15 4.15 0 0 0-.06-.86l955.12 1.78c.72 10.62 15.87 19.2 34.88 19.86h-2.42v10.34h6.2v21.63Z'
          data-name='Layer 3'
          style={{ fill: '#fff' }}
        />
      </g>
    </svg>
  );
}

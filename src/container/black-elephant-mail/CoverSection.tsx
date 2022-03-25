import React from 'react';

import clsxm from '@/lib/clsxm';

import { CardState } from '@/pages/black-elephant-mail';

import CoverCard from './CoverCard';
import FormCard from './FormCard';

export default function CoverSection({
  state,
  setState,
}: {
  state: keyof typeof CardState;
  setState: React.Dispatch<keyof typeof CardState>;
}) {
  return (
    <div style={{ perspective: '1800px' }} className='layout z-10'>
      <div
        className={clsxm(
          'text-cdark flex relative z-10',
          'bg-paper bg-cover transition-transform duration-700',
          'p-8 rounded-3xl shadow-2xl md:p-16'
        )}
        style={{
          transformStyle: 'preserve-3d',
          transform:
            state === 'BEFORE'
              ? 'rotate3d(0, 0, 0, 0deg)'
              : 'rotate3d(0, 1, 0, 180deg)',
        }}
      >
        <div
          className={clsxm('block relative z-20 w-full', {
            'hidden pointer-events-none z-10': state === 'FILL',
          })}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <CoverCard setState={setState} />
        </div>
        <div
          className={clsxm('block relative z-20 w-full', {
            'hidden pointer-events-none z-10 ': state === 'BEFORE',
          })}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotate3d(0, 1, 0, 180deg) translateZ(1px)',
          }}
        >
          <FormCard setState={setState} />
        </div>
      </div>
      <div
        className={clsxm(
          'bg-clight absolute inset-0 z-0',
          'transition-transform duration-700',
          'rounded-3xl'
        )}
        style={{
          transformStyle: 'preserve-3d',
          transform: state === 'BEFORE' ? 'rotateY(0deg)' : 'rotateY(180deg)',
        }}
      ></div>
    </div>
  );
}

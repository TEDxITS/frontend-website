import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '../NextImage';

export default function Logo({
  isDark = false,
  className,
}: { isDark?: boolean } & React.ComponentPropsWithoutRef<'figure'>) {
  if (isDark) {
    return (
      <NextImage
        width={835}
        height={346}
        src='/images/logo/tedxits-black.png'
        alt='TedxITS logo'
        className={clsxm('h-12', className)}
      />
    );
  } else {
    return (
      <NextImage
        width={417}
        height={173}
        src='/images/logo/tedxits-white.png'
        alt='TedxITS logo'
        className={clsxm('h-12', className)}
      />
    );
  }
}

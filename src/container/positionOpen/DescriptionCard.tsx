import React from 'react';

import clsxm from '@/lib/clsxm';

type DescriptionCardProps = {
  header: React.ReactNode;
  description: React.ReactNode;
} & React.ComponentPropsWithoutRef<'div'>;

export default function DescriptionCard({
  header,
  description,
  className,
}: DescriptionCardProps) {
  return (
    <div className={clsxm('bg-cdark p-8 rounded-3xl shadow-xl', className)}>
      <h1 className='pb-2 text-lg border-b-2'>{header}</h1>
      <p className='mt-2'>{description}</p>
    </div>
  );
}

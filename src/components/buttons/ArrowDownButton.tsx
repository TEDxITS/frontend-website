import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

type ArrowDownButtonProps = {
  href: string;
  iconClassName?: string;
} & React.ComponentPropsWithRef<'div'>;

export default function ArrowDownButton({
  className,
  iconClassName,
  href,
}: ArrowDownButtonProps) {
  return (
    <a className={clsxm(className)} href={href}>
      <AiOutlineArrowDown
        className={clsxm(
          'text-cgray rounded-full border border-transparent',
          'transition-all duration-75 animate-bounce hover:border-cgray',
          iconClassName
        )}
        size={32}
      />
    </a>
  );
}

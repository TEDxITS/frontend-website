import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  nextLinkProps?: Omit<LinkProps, 'href'>;
  className?: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function HeaderLink({
  children,
  href,
  className,
  nextLinkProps,
  ...rest
}: UnstyledLinkProps) {
  //#region  //*=========== Active Route ===========
  const { asPath } = useRouter();
  const [isActive, setIsActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    href === asPath ? setIsActive(true) : setIsActive(false);
  }, [asPath, href]);
  //#endregion  //*======== Active Route ===========

  return (
    <Link href={href} {...nextLinkProps}>
      <a
        {...rest}
        className={clsxm(
          'animated-underline custom-link font-fivo inline-flex items-center text-lg',
          'border-b border-transparent border-dotted hover:border-black/0',
          {
            'text-primary-500 pointer-events-none': isActive,
          },
          className
        )}
      >
        {children}
      </a>
    </Link>
  );
}

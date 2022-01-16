import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

import UnstyledLink from './UnstyledLink';

enum ButtonVariant {
  'primary',
  'secondary',
}

type ButtonLinkProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
  href: string;
} & React.ComponentPropsWithRef<'a'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  ({ children, className, isLoading, href, variant = 'primary', ...rest }) => {
    return (
      <UnstyledLink
        href={href}
        className={clsxm(
          'font-fivo text-xl font-extrabold',
          'inline-flex items-center px-8 py-3 rounded-full',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm',
          'transition-all duration-150 ease-in-out',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'text-white animate-gradient-x border border-transparent',
              'bg-gradient-to-r from-cgreen to-cblue',
              'hover:bg-gradient-to-r hover:from-cred hover:to-cgreen hover:shadow-primary-50/20 hover:scale-105 hover:shadow-md',
              'disabled:hover:bg-none disabled:bg-cgray/30 disabled:bg-none disabled:border-cgray',
              'disabled:hover:scale-100 disabled:text-gray-300 disabled:hover:shadow-none',
            ],
          ],
          [
            variant === 'secondary' && [
              'text-white animate-gradient-x border border-transparent',
              'bg-gradient-to-r from-cpurple to-cblue',
              'hover:bg-gradient-to-r hover:from-cpurple hover:to-cred hover:shadow-primary-50/20 hover:scale-105 hover:shadow-md',
              'disabled:hover:bg-none disabled:bg-cgray/30 disabled:bg-none disabled:border-cgray',
              'disabled:hover:scale-100 disabled:text-gray-300 disabled:hover:shadow-none',
            ],
          ],

          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent hover:text-transparent disabled:cursor-wait transition-none',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </UnstyledLink>
    );
  }
);

export default Button;

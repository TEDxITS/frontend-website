import clsx from 'clsx';
import * as React from 'react';
import { Tooltip as TippyTooltip, TooltipProps } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

type TooltipTextProps = {
  /** Elements to be shown in the tooltip */
  content?: React.ReactNode;
  /** Tooltip trigger */
  children?: React.ReactNode;
  /** Add underline to children, useful for texts */
  withUnderline?: boolean;
  /** If using underline, you can customize the CSS */
  spanClassName?: string;
} & TooltipProps;

/** Tooltip to show additional content or information */
export default function Tooltip({
  content,
  children,
  spanClassName,
  withUnderline = false,
  ...rest
}: TooltipTextProps) {
  return (
    <TippyTooltip
      trigger='mouseenter'
      interactive
      hideOnClick={false}
      html={<>{content}</>}
      {...rest}
    >
      {withUnderline ? (
        <span className={clsx(spanClassName, 'underline')}>{children}</span>
      ) : (
        <>{children}</>
      )}
    </TippyTooltip>
  );
}

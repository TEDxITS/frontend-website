import * as React from "react";

import clsxm from "@/lib/clsxm";
import { LogoType } from "@/lib/type/component";
export default function YoutubeLogoIllustration({
  pathClassName,
  ...rest
}: LogoType) {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  return (
    <svg
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 31.91 31.99"
      {...rest}
    >
      <g
        fill="#efedea"
        className={clsxm(pathClassName, {
          "fill-primary-500": isHover,
        })}
      >
        <path
          d="M612.59 524.13a16 16 0 1015.95 16 16 16 0 00-15.95-16zm8.07 20.07a2.1 2.1 0 01-1.48 1.49 60.22 60.22 0 01-13.15 0 2.13 2.13 0 01-1.49-1.49 24.07 24.07 0 010-8.18 2.15 2.15 0 011.49-1.5 61.93 61.93 0 0113.15 0 2.12 2.12 0 011.48 1.5 24.07 24.07 0 010 8.18z"
          transform="translate(-596.64 -524.13)"
        ></path>
        <path d="M18.64 15.98L14.24 18.49 14.24 13.47 18.64 15.98z"></path>
      </g>
    </svg>
  );
}

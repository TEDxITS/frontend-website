import React from "react";

export default function DrawBottomRight({
  ...rest
}: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39.01 56.56"
      {...rest}
    >
      <defs>
        <style>
          {
            ".cls-1{fill:none;stroke:#212121;stroke-linecap:round;stroke-linejoin:round}"
          }
        </style>
      </defs>
      <path
        fill="none"
        stroke="#212121"
        strokeMiterlimit="10"
        strokeWidth="1"
        strokeDasharray="1000"
        strokeDashoffset="10"
        className="animate-draw-fast cls-1"
        d="M433.49 445.7a69.16 69.16 0 0 1 14.23 11.45c3.12 3.28 6 7 7.22 11.34s.57 9.47-2.63 12.67c-4.1 4.11-11.61 3.66-15.63-.54s-4.37-11.2-1.31-16.14a3.61 3.61 0 0 1 2.52-2c1.63-.12 2.71 1.67 3.17 3.24 2.15 7.35-.55 15.46-5.32 21.45s-11.36 10.23-18 14.08"
        transform="translate(-417.02 -445.2)"
      />
      <path
        className="cls-1"
        d="M434.38 500.66a114.31 114.31 0 0 0-16.86.53 34.19 34.19 0 0 0 10.31-14.14"
        transform="translate(-417.02 -445.2)"
      />
    </svg>
  );
}

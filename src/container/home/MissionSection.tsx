/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Parallax } from "react-scroll-parallax";

import StoryBlobIllustration from "@/assets/svg/StoryBlobIllustration";

export default function MissionSection() {
  return (
    <Parallax y={[-20, 20]} tagOuter="figure">
      <div className="flex w-full">
        <img
          src="/images/story-bg-plain.png"
          alt=""
          className="absolute inset-0 drop-shadow-md"
        />
        <StoryBlobIllustration className="z-10 w-full" />
        <div className="absolute inset-0">
          <div className="layout / flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl font-bold text-black" id="about">
              O<span className="font-sympath / font-normal">U</span>R MISSI
              <span className="font-sympath / font-normal">O</span>N
            </h1>
            <p className="px-[15vw] text-cdark / mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor i odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis Lorem ipsum
              dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat Ut iam quis.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}

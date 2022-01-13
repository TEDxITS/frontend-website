import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import Button from "@/components/buttons/Button";

import HomePageCarousel from "../HomePageCarousel";

export default function CoverSection() {
  return (
    <div className="min-h-main / overflow-hidden relative">
      <div className="layout min-h-main / grid relative grid-cols-2">
        <div className="flex flex-col gap-8 justify-center">
          <h1 className="leading-tight">LOREM IPSUM DOLOR SIT AMET</h1>
          <h2 className="text-cgray/80 / text-xl font-normal leading-none">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volut.
          </h2>
          <div className="mt-2">
            <Button variant="primary">Past Events</Button>
          </div>
        </div>
        <HomePageCarousel />
        <small className="font-fivo / absolute bottom-0 left-0 text-sm">
          <span className="font-black">TED</span>
          <span className="font-extrabold">x</span>
          <span className="font-bold">ITS</span>
        </small>
        <small className="font-fivo / absolute right-0 bottom-0 text-sm font-normal">
          © 2022
        </small>
        <a
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          href="#about"
        >
          <AiOutlineArrowDown
            className="hover:border-cgray text-cgray / rounded-full border border-transparent transition-all duration-75 animate-bounce"
            size={32}
          />
        </a>
      </div>
    </div>
  );
}

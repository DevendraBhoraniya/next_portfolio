"use client";
import { Down } from "@/assets";
import React from "react";

const Hero = () => {


  const ScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex flex-col gap-11 justify-evenly items-center h-[80vh] w-full ">
        <div></div>
        <h1 className="font-extrabold text-4xl lg:text-6xl md:text-5xl  text-center leading-normal break-words w-2/3">
          Hello, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-300 text-transparent bg-clip-text">
            Devendra
          </span>{" "}
          specialising in Frontend Development
        </h1>
        <button onClick={ScrollDown} className="animate-bounce" >
          <Down className="text-xl cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default Hero;

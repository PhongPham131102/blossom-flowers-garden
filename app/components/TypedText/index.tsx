import React from "react";
import { ReactTyped } from "react-typed";
import { FaHeart } from "react-icons/fa";
export default function TypedText() {
  return (
    <div className="flex flex-col justify-center items-center w-full  text-center max-md:!px-5 max-md:!pt-36 px-80 pt-48">
      <div className="">
        <span className="mr-[4px] font-medium text-lg">
          <ReactTyped
            showCursor={false}
            strings={[""]}
            typeSpeed={120}
            backSpeed={30}
          />
        </span>
        <span className="mr-[4px] font-medium text-lg">
          <ReactTyped
            showCursor={false}
            startDelay={960}
            strings={["", ""]}
            typeSpeed={80}
            backSpeed={30}
          />
        </span>
        <span className="mr-1 font-bold  uppercase text-2xl text-pink-500 text-shadow">
          <ReactTyped
            showCursor={false}
            startDelay={8330}
            strings={[""]}
            typeSpeed={80}
            backSpeed={30}
          />
        </span>
        <span className="mr-2 font-medium  ont-bold  uppercase text-2xl text-white-500 text-shadow">
          <ReactTyped
            showCursor={false}
            startDelay={9030}
            strings={[""]}
            typeSpeed={80}
            backSpeed={30}
          />
        </span>
        <span className="mr-[4px] font-medium text-lg">
          <ReactTyped
            showCursor={false}
            startDelay={9830}
            strings={[""]}
            typeSpeed={50}
            backSpeed={30}
          />
        </span>
      </div>
      <div className="flex gap-1">
        <span className="mr-[4px] text-red-500 text-shadow-red text-[48px] font-bold">
          <ReactTyped
            showCursor={false}
            startDelay={20780}
            strings={["Best For You !"]}
            typeSpeed={80}
            backSpeed={30}
          />
        </span>
        <div
          id="huhuhu"
          className="relative flex justify-center items-center hihihi"
        >
          <span className="text-red-500 text-xl animate-ping absolute left-0 top-1/4 bottom-0 right-0 ">
            <FaHeart />
          </span>
          <span className="text-red-500 text-2xl text-center z-20 ">
            <FaHeart className="filter drop-shadow-lg shadow-red-500" />
          </span>
        </div>
      </div>
    </div>
  );
}

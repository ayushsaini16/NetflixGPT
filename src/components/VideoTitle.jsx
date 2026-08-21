import React from "react";
import playIcon from "../assets/playIcon.jpg";
import InfoIcon from "../assets/InfoIcon.png";
const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div
        className=" absolute
        z-20
        left-8
        bottom-50
        w-[90%]
        sm:w-[75%]
        md:w-[65%]
        lg:w-[50%] "
      >
        <h1
          className="  text-white
          font-bold
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl
          leading-tight
          drop-shadow-lg"
        >
          {title}
        </h1>

        <p
          className="  text-white
          font-medium
          mt-3
          sm:mt-4
          md:mt-5
          text-sm
          sm:text-base
          md:text-lg
          lg:text-xl
          leading-relaxed
          line-clamp-3
          drop-shadow-md"
        >
          {overview}
        </p>
        <div
          className=" flex
          gap-3
          sm:gap-4
          md:gap-5
          mt-5
          sm:mt-7
          md:mt-9"
        >
          <button
            className="flex
            items-center
            justify-center
            gap-2
            sm:gap-3
            bg-white
            text-black
            px-4
            sm:px-6
            md:px-8
            py-2
            sm:py-3
            rounded-md
            font-bold
            text-sm
            sm:text-base
            md:text-lg
            hover:bg-gray-300
            transition
            duration-200
            cursor-pointer"
          >
            <img
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              src={playIcon}
            />
            <span className=""> Play</span>
          </button>
          <button
            className=" flex
            items-center
            justify-center
            gap-2
            sm:gap-3
            bg-gray-500/70
            text-white
            px-4
            sm:px-6
            md:px-8
            py-2
            sm:py-3
            rounded-md
            font-bold
            text-sm
            sm:text-base
            md:text-lg
            hover:bg-gray-500
            transition
            duration-200
            cursor-pointer"
          >
            <img
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              src={InfoIcon}
            />
            <span className=""> More info</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;

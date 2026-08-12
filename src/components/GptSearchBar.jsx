import React from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearchBar = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 hidden md:block">
        <img
          src={BACKGROUND_IMAGE}
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="mx-auto mt-40 w-[calc(100%-2rem)] max-w-4xl rounded-xl bg-black p-4 sm:mt-48 md:mt-60 ">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            className="w-full rounded-lg border-2 border-gray-500 p-4 text-white outline-none"
            placeholder="What would you like to watch today?"
          />
          <button className="bg-red-700 p-4 rounded-xl text-white cursor-pointer w-full sm:w-auto">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;

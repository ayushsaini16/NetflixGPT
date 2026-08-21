import React, { useState } from "react";
import { BACKGROUND_IMAGE } from "../utils/constants";
import ai from "../utils/geminiapi";
import { useDispatch } from "react-redux";
import { addSearchResult } from "../utils/geminiSearchSlice";
import SearchResultList from "./SearchResultList";
const GptSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const handleSearchClick = async () => {
    const prompt = `You are a movie recommendation assistant.Suggest 5 movies based on this query:"${searchText}"
                    Return only the movie names as a comma-separated list.Do not provide any explanation.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
      });

      console.log(response.text);
      const getMovies = response.text.split(",");
      dispatch(addSearchResult(getMovies));
    } catch (error) {
      if (error.status === 503) {
        console.log("Gemini is temporarily unavailable. Please try again.");
      } else {
        console.log("Something went wrong:", error);
      }
    }
  };

  return (
    <>
      <div className="inset-0 -z-10 fixed md:block">
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
            value={searchText}
            type="text"
            className="w-full rounded-lg border-2 border-gray-500 p-4 text-white outline-none"
            placeholder="What would you like to watch today?"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-red-700 p-4 rounded-xl text-white cursor-pointer w-full sm:w-auto"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
      <SearchResultList />
    </>
  );
};

export default GptSearchBar;

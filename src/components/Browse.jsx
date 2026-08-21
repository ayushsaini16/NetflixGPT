import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const toggleSearch = useSelector((store) => store.gemini);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <>
      <Header />
      {toggleSearch.showGeminiSearch ? (
        <GptSearch />
      ) : (
        <div className="bg-zinc-300 min-h-screen">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </>
  );
};

export default Browse;

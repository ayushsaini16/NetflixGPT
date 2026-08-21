import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovieData } from "../utils/geminiSearchSlice";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const SearchResultList = () => {
  const searchList = useSelector((store) => store.gemini?.searchResult);
  const dispatch = useDispatch();
  const movieData = useSelector((store) => store.gemini.searchMovieData);
  const searchMovie = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await response.json();

    return json.results;
  };

  const fetchResult = async () => {
    try {
      const data = await Promise.all(
        searchList.map((movieName) => searchMovie(movieName)),
      );
      dispatch(addSearchMovieData(data));
    } catch (error) {
      console.log("Error in API calling:", error);
    }
  };
  useEffect(() => {
    if (!searchList?.length) return;

    fetchResult();
  }, [searchList]);

  return (
    <>
      <div className="relative z-20 bg-black mt-20">
        {movieData?.map((movie) => {
          return (
            <span key={movie?.[0].id}>
              <MovieList title={movie?.[0]?.title} movies={movie} />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default SearchResultList;

import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className=" py-5 sm:py-6 md:py-8">
        <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
        <div className="flex overflow-x-auto scrollbar-thin gap-2">
          <div className="flex">
            {movies?.map((movie) => {
              return <MovieCard path={movie.poster_path} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;

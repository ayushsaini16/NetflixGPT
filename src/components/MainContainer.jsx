import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[0];

  const { id, original_title, overview, backdrop_path } = mainMovie;

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <VideoBackground movieId={id} />

        <VideoTitle title={original_title} overview={overview} />
      </div>
    </>
  );
};

export default MainContainer;

import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ path }) => {
  return (
    <div className="w-52 cursor-pointer">
      <img src={IMAGE_CDN_URL + path} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;

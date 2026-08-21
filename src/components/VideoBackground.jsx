import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className=" absolute
                top-1/2
                left-1/2
                w-[177.78vh]
                min-w-full
                min-h-full
                -translate-x-1/2
                -translate-y-1/2
                scale-[1.35]
                pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&showinfo=0&controls=0&auto-hide=1&loop=1&disablekb=1`}
          title="YouTube video player"
          allow=" autoplay;  encrypted-media;"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;

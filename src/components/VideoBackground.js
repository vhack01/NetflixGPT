import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";

const VideoBackground = ({ id }) => {
  const videoTrailer = useSelector((store) => store.movies.videoTrailer);
  useVideoTrailer(id);

  return (
    <div className="">
      <iframe
        src={`https://www.youtube.com/embed/${
          videoTrailer && videoTrailer.key
        }?si=L1XlyRDmM9UKWbQT&autoplay=1&loop=1`}
        title="YouTube video player"
        className="w-full aspect-video"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

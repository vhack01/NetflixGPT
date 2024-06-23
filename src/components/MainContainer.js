import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) {
    // add loader
    return;
  }

  const mainMovie = movies[3];

  return (
    <div className="relative">
      <VideoTitle
        id={mainMovie?.id}
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      <VideoBackground id={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;

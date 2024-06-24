import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieBand = () => {
  return (
    <div className="font-openSans border border-red-500">
      <h1 className="text-xl font-semibold">New on Netflix</h1>
      <div className="relative border border-orange-500">
        <div className="h-full absolute left-0 top-0 bg-transparentBlack-0 text-white flex items-center px-2 cursor-pointer">
          <ChevronLeft />
        </div>
        <div className="w-full flex gap-x-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
        <div className="h-full absolute top-0 right-0 bg-transparentBlack-0 text-white flex items-center px-2 cursor-pointer">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default MovieBand;

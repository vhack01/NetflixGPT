import { Info, PlayCircleIcon } from "lucide-react";

const VideoTitle = ({ id, title, overview }) => {
  return (
    <div className="absolute w-full aspect-video font-openSans border-red-400 bg-transparentBlack-0 flex">
      <div className="flex items-center">
        <div className="w-11/12 md:w-8/12 lg:w-5/12 pl-14">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-200">
            {title}
          </h1>
          <p className="text-xs md:text-base font-medium text-gray-200 mt-6 mb-9">
            {overview}
          </p>
          <div className="flex gap-x-4">
            <button className="bg-white text-black text-base flex gap-x-2 p-2 px-7 rounded items-center cursor-pointer hover:bg-gray-200">
              <span>
                <PlayCircleIcon size={18} />
              </span>
              <span>Play</span>
            </button>
            <button className="bg-transparentBlack-0 text-white text-base flex gap-x-2 p-2 px-7 rounded items-center cursor-pointer hover:bg-transparentBlack-1">
              <span>
                <Info size={18} />
              </span>
              <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

import axios from "axios";
import { useEffect } from "react";
import { API_OPTIONS, MOVIES_API } from "../utils/constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addVideoTrailer } from "../store/slice/movieSlice";

const useVideoTrailer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieTrailer();
  }, []);

  async function getMovieTrailer() {
    try {
      const res = await axios.get(`${MOVIES_API}/${id}/videos`, API_OPTIONS);
      if (res.status !== 200) {
        toast.error(res.statusText);
        return;
      }
      const videos = res?.data?.results;
      console.log("trailer:", res);
      const mainTrailer = videos.filter((video) => video.type === "Trailer");
      dispatch(addVideoTrailer(mainTrailer.length && mainTrailer[0]));
    } catch (err) {}
  }
};

export default useVideoTrailer;

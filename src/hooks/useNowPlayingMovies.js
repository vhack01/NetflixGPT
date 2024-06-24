import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { API_OPTIONS, MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slice/movieSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get(`${MOVIES_API}/now_playing`, API_OPTIONS);
      if (res.status !== 200) {
        toast.error(res.statusText);
        return;
      }
      console.log("Now playing:", res);
      dispatch(addNowPlayingMovies(res?.data?.results));
    } catch (err) {
      toast.error(err.message);
    }
  }
};

export default useNowPlayingMovies;

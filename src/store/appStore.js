import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slice/userSlice";
import moviesReducer from "../store/slice/movieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;

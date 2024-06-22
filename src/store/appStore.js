import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/slice/userSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;

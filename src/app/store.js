import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/loginSlice";
import theme from "../features/themeSlice"
export default configureStore({
  reducer: {
    user: userReducer,
    theme:theme
  },
});
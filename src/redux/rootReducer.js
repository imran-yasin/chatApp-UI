import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
const rootReducer = combineReducers({
  messages: userReducer,
});

export default rootReducer;

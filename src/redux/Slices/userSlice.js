import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export default userSlice.reducer;

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axios.get("https://dummyjson.com/carts");
    dispatch(userSlice.actions.getUser(response.data.carts));
    console.log("data in slice", response.data.carts);
  } catch (error) {
    console.log(`Could not fetch data because: ${error.message}`);
  }
};

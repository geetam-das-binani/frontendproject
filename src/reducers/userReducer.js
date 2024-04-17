import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      // console.log(action);
      state.userInfo = action.payload;
    },
  },
});

export default userReducer;
export const { setUserInfo } = userReducer.actions;
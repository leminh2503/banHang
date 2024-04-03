import {IInfo, IUserInfo} from "./type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const initUserInfo: IUserInfo = {
  credentials: "",
  access_token: "",
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState: initUserInfo,
  reducers: {
    setCredentials: (state, action: PayloadAction<string | undefined>) => {
      console.log(`___setCredentials: ${JSON.stringify(action.payload)}`);
      state.credentials = action.payload;
    }
  },
});

export const {
  setCredentials,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.userReducer;
export default userSlice.reducer;

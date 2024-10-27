import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../core/store";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    switchTheme: (state) => {
      state = state === "light" ? "dark" : "light";
    },
  },
});

export const { switchTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state;

export default themeSlice.reducer;

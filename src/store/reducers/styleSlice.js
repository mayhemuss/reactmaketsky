import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "settingSlice",
  initialState: {
    fontSize: 110,
    maxSize: 150,
  },
  reducers: {
    setAdressSize(state, { payload }) {
      state.adressSize = payload;
    },
    
  },
});

export default settingSlice.reducer;

export const { } = settingSlice.actions;

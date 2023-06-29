import { createSlice } from "@reduxjs/toolkit";

const tableSettingsSlice = createSlice({
  name: "tableSettingsSlice",
  initialState: {
    allTableSize: [
      { width: 148, height: 297, type:"sticker" },
      { width: 200, height: 400, type:"pvc" },
      { width: 250, height: 500, type:"pvc" },
      { width: 250, height: 600, type:"pvc" },
    ],
    currentTableSize: 1,
    currentType: "pvc"
  },
  reducers: {
    addTableSize(state, { payload }) {
      state.allTableSize = [...state.allTableSize, payload];
    },
    setCurrentTableSize(state, { payload }) {
      state.currentTableSize = payload;
    },
  },
});

export default tableSettingsSlice.reducer;

export const { addTableSize, setCurrentTableSize } =
  tableSettingsSlice.actions;

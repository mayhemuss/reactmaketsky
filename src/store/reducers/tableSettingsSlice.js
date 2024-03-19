import { createSlice } from "@reduxjs/toolkit";

const tableSettingsSlice = createSlice({
  name: "tableSettingsSlice",
  initialState: {
    allTableSize: [
      { width: 200, height: 400, type: "pvc" },
      { width: 250, height: 500, type: "pvc" },
      { width: 250, height: 600, type: "pvc" },
      { width: 148, height: 297, type: "sticker" },
    ],
    currentTableSize: 1,
    currentType: "pvc",
    bigNumberTableSize: [
      { width: 300, height: 400, type: "gray", name: "цдс большой" },
      { width: 210, height: 297, type: "blue", name: "а4 вертикал" },
      { width: 297, height: 210, type: "blue", name: "а4 горизонтал" },
    ],
    currentBigNumberTableSize: 0,
    currentBigNumberType: "gray",
  },
  reducers: {
    addTableSize(state, { payload }) {
      state.allTableSize = [...state.allTableSize, payload];
    },
    setCurrentTableSize(state, { payload }) {
      state.currentTableSize = payload;
    },
    /*addTableSize(state, { payload }) {
      state.allTableSize = [...state.allTableSize, payload];
    },*/
    setCurrentBigNumberTableSize(state, { payload }) {
      state.currentBigNumberTableSize = payload;
    },
  },
});

export default tableSettingsSlice.reducer;

export const {
  addTableSize,
  setCurrentTableSize,
  setCurrentBigNumberTableSize,
} = tableSettingsSlice.actions;

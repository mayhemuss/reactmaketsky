import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "settingSlice",
  initialState: {
    adressSize: 52,
    haveAdress: true,
    haveLadderNum: true,
    haveTableTop: true,
    isReverseTable: false,
    currentEntarance: "1",
    headType: "Парадная №",
    fontSize: 110,
  },
  reducers: {
    setAdressSize(state, { payload }) {
      state.adressSize = payload;
    },
    AdressSizeDecriment(state) {
      state.adressSize = state.adressSize + 1;
    },
    AdressSizeIncriment(state) {
      state.adressSize = state.adressSize - 1;
    },
    setHaveAdress(state) {
      state.haveAdress = !state.haveAdress;
    },
    setHaveLadderNum(state) {
      state.haveLadderNum = !state.haveLadderNum;
    },
    setHaveTableTop(state) {
      state.haveTableTop = !state.haveTableTop;
    },
    setIsReverseTable(state) {
      state.isReverseTable = !state.isReverseTable;
    },
    setCurrentEntarance(state, action) {
      state.currentEntarance = action.payload;
    },
    setHeadType(state, { payload }) {
      state.headType = payload;
    },
    setFontSize(state, { payload }) {
      state.fontSize = payload;
    },
    changeFontSize(state, { payload }) {
      state.fontSize = state.fontSize + payload;
    },
  },
});

export default settingSlice.reducer;

export const {
  setAdressSize,
  setHaveAdress,
  setHaveLadderNum,
  AdressSizeIncriment,
  AdressSizeDecriment,
  setIsReverseTable,
  setCurrentEntarance,
  setHeadType,
  setHaveTableTop,
  setIdealSize,
  setFontSize,
  changeFontSize,
} = settingSlice.actions;

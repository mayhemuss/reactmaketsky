import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "settingSlice",
  initialState: {
    adressSize: 52,
    haveAdress: true,
    haveLadderNum: true,
    haveTableTop: true,
    fulltableSize: false,
    isReverseTable: false,
    currentEntarance: 1,
    headType: "Парадная №",
    idealFontSize: 90,
    fontSize: 90,
  },
  reducers: {
    setAdressSize(state, {payload}) {
      state.adressSize = payload;
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
    setFulltableSize(state) {
      state.fulltableSize = !state.fulltableSize;
    },
    setIsReverseTable(state) {
      state.isReverseTable = !state.isReverseTable;
    },
    setCurrentEntarance(state, action) {
      state.currentEntarance = action.payload;
    },
    setHeadType(state, {payload}) {
      state.headType = payload;
    },
    setIdealFontSize(state, action) {
      state.idealFontSize = action.payload;
    },
    setFontSize(state, action) {
      state.fontSize = action.payload;
    },
  },
});

export default settingSlice.reducer;

export const {
  setAdressSize,
  setHaveAdress,
  setHaveLadderNum,
  setFulltableSize,
  setIsReverseTable,
  setCurrentEntarance,
  setHeadType,
  setIdealFontSize,
  setFontSize,
  setHaveTableTop,
} = settingSlice.actions;

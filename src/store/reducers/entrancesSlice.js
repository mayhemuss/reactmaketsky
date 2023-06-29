import { createSlice } from "@reduxjs/toolkit";

const entriesSlice = createSlice({
  name: "entries",
  initialState: {
    adress: "ул. Репищева 20",
    streetName: "репищева",
    streetType: "улица",
    buildingNumber: "20",
    entrance: {
      1: {
        long: [
          { floor: 1, roomStart: 1, roomEnd: 2 },
          { floor: 2, roomStart: 3, roomEnd: 4 },
          { floor: 3, roomStart: 5, roomEnd: 6 },
          { floor: 4, roomStart: 7, roomEnd: 8 },
          { floor: 5, roomStart: 9, roomEnd: 10 },
          { floor: 6, roomStart: 11, roomEnd: 12 },
          { floor: 7, roomStart: 13, roomEnd: 14 },
          { floor: 8, roomStart: 15, roomEnd: 16 },
        ],
        short: { start: 1, end: 16 },
      },
      2: {
        long: [
          { floor: 1, roomStart: 17, roomEnd: 18 },
          { floor: 2, roomStart: 19, roomEnd: 20 },
          { floor: 3, roomStart: 21, roomEnd: 22 },
          { floor: 4, roomStart: 23, roomEnd: 24 },
          { floor: 5, roomStart: 25, roomEnd: 26 },
          { floor: 6, roomStart: 27, roomEnd: 28 },
          { floor: 7, roomStart: 29, roomEnd: 30 },
        ],
        short: { start: 17, end: 30 },
      },
    },
    allEntrances: ["1", "2"],
  },
  reducers: {
    setAdress(state, action) {
      state.adress = action.payload;
    },
    setEntarance(state, action) {
      state.entrance = action.payload;
    },
    setAllEntarence(state, action) {
      state.allEntrances = action.payload;
    },
    setBuildingNumber(state, { payload }) {
      state.buildingNumber = payload;
    },
    setStreetType(state, { payload }) {
      state.streetType = payload;
    },
    setStreetName(state, { payload }) {
      state.streetName = payload;
    },
  },
});

export default entriesSlice.reducer;

export const {
  setAdress,
  setEntarance,
  setAllEntarence,
  setStreetName,
  setStreetType,
  setBuildingNumber,
} = entriesSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const entriesSlice = createSlice({
  name: "entries",
  initialState: {
    adress: "Пример адреса",
    entrance: {
      1: [
        { floor: 1, roomStart: 1, roomEnd: 2 },
        { floor: 2, roomStart: 3, roomEnd: 4 },
        { floor: 3, roomStart: 5, roomEnd: 6 },
        { floor: 4, roomStart: 7, roomEnd: 8 },
      ],
      2: [
        { floor: 1, roomStart: 9, roomEnd: 10 },
        { floor: 2, roomStart: 11, roomEnd: 12 },
        { floor: 3, roomStart: 13, roomEnd: 14 },
        { floor: 4, roomStart: 15, roomEnd: 16 },
      ],
    },
    allEntrances: [1, 2],
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
  },
});

export default entriesSlice.reducer;

export const { setAdress, setEntarance, setAllEntarence } =
  entriesSlice.actions;

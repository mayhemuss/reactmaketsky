import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import entrancesSlice from "./reducers/entrancesSlice";
import settingSlice from "./reducers/settingSlice";

const rootReducer = combineReducers({
  entrances: entrancesSlice,
  settings: settingSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

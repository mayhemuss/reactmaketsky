import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import entrancesSlice from "./reducers/entrancesSlice";
import settingSlice from "./reducers/settingSlice";
import tableSettingsSlice from "./reducers/tableSettingsSlice";

const rootReducer = combineReducers({
  entrances: entrancesSlice,
  settings: settingSlice,
  table: tableSettingsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

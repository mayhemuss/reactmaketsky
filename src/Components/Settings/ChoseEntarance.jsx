import React from "react";
import MyRadio from "../Table/MyRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentEntarance,
  setFontSize,
  
} from "../../store/reducers/settingSlice";

import { entrancesSelector, settingsSelector } from "../../store/selectors";

function ChoseEntarance() {
  const dispatch = useDispatch();
  const currentEntaranceHandler = (e) => {
    dispatch(setCurrentEntarance(e.target.value));
    dispatch(setFontSize(110));
    
  };
  const { currentEntarance } = useSelector(settingsSelector);
  const {allEntrances} = useSelector(entrancesSelector);

  return (
    <div>
      <div>...................</div>
      Выбор парадной:
      {allEntrances.map((elem) => {
        return (
          <MyRadio
            callBack={currentEntaranceHandler}
            current={currentEntarance}
            val={elem}
            key={elem}
          >
            парадная № <strong>{elem}</strong>
          </MyRadio>
        );
      })}
    </div>
  );
}

export default ChoseEntarance;

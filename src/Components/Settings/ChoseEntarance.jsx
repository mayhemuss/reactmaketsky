import React from "react";
import MyRadio from "../Table/MyRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentEntarance, setCurrentFloor,
  setFontSize,
} from "../../store/reducers/settingSlice";

import { entrancesSelector, settingsSelector } from "../../store/selectors";

function ChoseEntarance() {
  const { currentEntarance, currentFloor } = useSelector(settingsSelector);
  const { allEntrances , entrance} = useSelector(entrancesSelector);
  const dispatch = useDispatch();
  const currentEntaranceHandler = (e) => {
    dispatch(setCurrentEntarance(e.target.value));
    dispatch(setFontSize(150));
    dispatch(setCurrentFloor(0))

  };


  return (
    <div>
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

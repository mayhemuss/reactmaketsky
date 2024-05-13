import React from "react";
import MyRadio from "../ui/MyRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentEntarance, setCurrentFloor,
  setFontSize,
} from "../../store/reducers/settingSlice";
import style from "./style.module.css"
import { entrancesSelector, settingsSelector } from "../../store/selectors";

function ChoseEntarance() {
  const { currentEntarance,  maxSize} = useSelector(settingsSelector);
  const { allEntrances , } = useSelector(entrancesSelector);
  const dispatch = useDispatch();
  const currentEntaranceHandler = (e) => {
    dispatch(setCurrentEntarance(e.target.value));
    dispatch(setFontSize(maxSize));
    dispatch(setCurrentFloor(0))

  };


  return (
    <div className={style.container_vertical}>
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

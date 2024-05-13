import React from "react";
import MyRadio from "../ui/MyRadio";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentFloor} from "../../store/reducers/settingSlice";

import {entrancesSelector, settingsSelector} from "../../store/selectors";

function ChoseFloor() {
  const {currentEntarance, currentFloor} = useSelector(settingsSelector);
  const {entrance} = useSelector(entrancesSelector);
  const dispatch = useDispatch();
  const currentFloorHandler = (e) => {
    dispatch(setCurrentFloor(+e.target.value))
  };


  return (
    <div>
      Выбор парадной:
      {entrance[currentEntarance].long.map((elem, index) => {
        const floor = elem.floor
        return (
          <MyRadio
            callBack={currentFloorHandler}
            current={currentFloor}
            val={index}
            key={index}
          >
            этаж № <strong>{floor}</strong>
          </MyRadio>
        );
      })}
    </div>
  );
}

export default ChoseFloor;

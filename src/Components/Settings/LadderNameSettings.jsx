import React, { useState } from "react";
import MyRadio from "../Table/MyRadio";
import { setHeadType } from "../../store/reducers/settingSlice";

import { settingsSelector } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";

function LadderNameSettings(props) {
  const dispatch = useDispatch();
  const { headType } = useSelector(settingsSelector);

  const [typesEnt, setTypesEnt] = useState([
    "Парадная №",
    "Лестница №",
    "Подъезд №",
    "Секция ",
  ]);
  const typesHandler = () => {
    setTypesEnt((prev) => [...prev, prompt()]);
  };

  const headTypeHandler = (e) => {
    dispatch(setHeadType(e.target.value));
  };
  return (
    <div>
      <div>..............</div>
      Выбери тип названия парадной:
      {typesEnt.map((elem) => {
        return (
          <MyRadio
            key={elem}
            callBack={headTypeHandler}
            current={headType}
            val={elem}
          >
            {elem}
          </MyRadio>
        );
      })}
      <button onClick={typesHandler}>добавить свое</button>
      <div>...................</div>
    </div>
  );
}

export default LadderNameSettings;

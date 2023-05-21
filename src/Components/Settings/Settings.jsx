import React, { useState } from "react";
import MyInput from "./MyInput";
import MyCheckBox from "../MyCheckBox";
import MyRadio from "../Table/MyRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdress,
  setAllEntarence,
  setEntarance,
} from "../../store/reducers/entrancesSlice";
import {
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
} from "../../store/reducers/settingSlice";

function Settings() {
  const allEntrances = useSelector((state) => state.entrances.allEntrances);

  const currentEntarance = useSelector(
    (state) => state.settings.currentEntarance
  );

  const { haveAdress, haveLadderNum, haveTableTop, isReverseTable, headType } =
    useSelector((state) => state.settings);

  const dispatch = useDispatch();

  const headTypeHandler = (e) => {
    dispatch(setHeadType(e.target.value));
  };
  const currentEntaranceHandler = (e) => {
    dispatch(setCurrentEntarance(e.target.value));
  };

  const fontSizeHandler = (e) => {
    dispatch(setFontSize(e.target.value));
  };

  const changeInput = ({ target: { value } }) => {
    try {
      const parse = JSON.parse(value);
      dispatch(setAdress(parse.adress));
      dispatch(setEntarance(parse.entrance));
      dispatch(setAllEntarence(Object.keys(parse.entrance)));
      dispatch(setCurrentEntarance(Object.keys(parse.entrance)[0]));
    } catch (error) {
      alert(error);
    }
  };

  const haveAdressToggle = () => {
    dispatch(setHaveAdress());
  };
  const setHaveLadderNumToggle = () => {
    dispatch(setHaveLadderNum());
  };
  const setHaveTableTopToggle = () => {
    dispatch(setHaveTableTop());
  };
  const setIsReverseTableToggle = () => {
    dispatch(setIsReverseTable());
  };

  const [typesEnt, setTypesEnt] = useState([
    "Парадная №",
    "Лестница №",
    "Подъезд №",
    "Секция ",
  ]);
  const typesHandler = () => {
    setTypesEnt((prev) => [...prev, prompt()]);
  };

  return (
    <div className="settings">
      Введи данные из экселя:
      <MyInput callBack={changeInput} place={"данные из exel"} />
      <div>...................</div>
      Настройки:
      {/* <button onClick={haveAdressToggle}>adress</button> */}
      <MyCheckBox value={haveAdress} callBack={haveAdressToggle}>
        Нужен адресс?
      </MyCheckBox>
      <MyCheckBox value={haveLadderNum} callBack={setHaveLadderNumToggle}>
        Нужна парадная?
      </MyCheckBox>
      <MyCheckBox callBack={setHaveTableTopToggle} value={haveTableTop}>
        Нужен заголовок этаж квартира?
      </MyCheckBox>
      <MyCheckBox callBack={setIsReverseTableToggle} value={isReverseTable}>
        Перевернуть таблицу
      </MyCheckBox>
      <div>..............</div>
      {/* <MyCheckBox callBack={setFullSize} value={fullSize}>
        полный размер
      </MyCheckBox>
      <MyInput place={"шрифт"} val={fontSiz} callBack={fontSizeHandler} />
      <button
        onClick={() => {
          setFontSize((prev) => prev + 1);
        }}
      >
        ++
      </button>
      <button onClick={decrimentSize}>--</button> */}
      <div>...................</div>
      Выбери тип названия парадной:
      <button onClick={typesHandler}>добавить свое</button>
      {typesEnt.map((elem) => {
        return (
          <MyRadio callBack={headTypeHandler} current={headType} val={elem}>
            {elem}
          </MyRadio>
        );
      })}
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

export default Settings;

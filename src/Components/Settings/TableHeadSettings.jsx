import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHaveAdress, setHaveLadderNum, setHaveTableTop, setHeadType, setIsReverseTable } from "../../store/reducers/settingSlice";
import MyCheckBox from "../MyCheckBox";
import MyRadio from "../Table/MyRadio";

function TableHeadSettings() {
  const dispatch = useDispatch();
  const { haveAdress, haveLadderNum, haveTableTop, isReverseTable, headType } =
    useSelector((state) => state.settings);

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

  return (
    <>
      Настройки:
      <MyCheckBox value={haveAdress} callBack={haveAdressToggle}>
        Нужен адресс?
      </MyCheckBox>
      <MyCheckBox value={haveLadderNum} callBack={setHaveLadderNumToggle}>
        Нужна парадная?
      </MyCheckBox>
      <MyCheckBox value={haveTableTop} callBack={setHaveTableTopToggle}>
        Нужен заголовок этаж квартира?
      </MyCheckBox>
      <MyCheckBox value={isReverseTable} callBack={setIsReverseTableToggle}>
        Перевернуть таблицу
      </MyCheckBox>
      <div>..............</div>
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
    </>
  );
}

export default TableHeadSettings;

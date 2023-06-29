import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHaveAdress,
  setHaveLadderNum,
  setHaveTableTop,
  setHeadType,
  setIsReverseTable,
  setFontSize,
} from "../../store/reducers/settingSlice";
import MyCheckBox from "../MyCheckBox";
import MyRadio from "../Table/MyRadio";

import { settingsSelector } from "../../store/selectors";

function TableHeadSettings() {
  const dispatch = useDispatch();
  const { haveAdress, haveLadderNum, haveTableTop, isReverseTable, headType } =
    useSelector(settingsSelector);


  const haveAdressToggle = () => {
    dispatch(setHaveAdress());
    dispatch(setFontSize(110));
  };
  const setHaveLadderNumToggle = () => {
    dispatch(setHaveLadderNum());
    dispatch(setFontSize(110));
  };
  const setHaveTableTopToggle = () => {
    dispatch(setHaveTableTop());
    dispatch(setFontSize(110));
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
      
    </>
  );
}

export default TableHeadSettings;

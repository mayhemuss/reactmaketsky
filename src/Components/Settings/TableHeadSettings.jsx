import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHaveAdress,
  setHaveLadderNum,
  setHaveTableTop,
  setIsReverseTable,
  setFontSize,
} from "../../store/reducers/settingSlice";
import MyCheckBox from "../MyCheckBox";

import { settingsSelector } from "../../store/selectors";

function TableHeadSettings() {
  const dispatch = useDispatch();
  const { haveAdress, haveLadderNum, haveTableTop, isReverseTable } =
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
    <div>
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
    </div>
  );
}

export default TableHeadSettings;

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

  const onclickHandler = (func) => {
    dispatch(func());
    dispatch(setFontSize(150));
  };

  return (
    <div>
      Настройки:
      <MyCheckBox
        value={haveAdress}
        callBack={() => onclickHandler(setHaveAdress)}
      >
        Нужен адресс?
      </MyCheckBox>
      <MyCheckBox
        value={haveLadderNum}
        callBack={() => onclickHandler(setHaveLadderNum)}
      >
        Нужна парадная?
      </MyCheckBox>
      <MyCheckBox
        value={haveTableTop}
        callBack={() => onclickHandler(setHaveTableTop)}
      >
        Нужен заголовок этаж квартира?
      </MyCheckBox>
      <MyCheckBox
        value={isReverseTable}
        callBack={() => onclickHandler(setIsReverseTable)}
      >
        Перевернуть таблицу
      </MyCheckBox>
    </div>
  );
}

export default TableHeadSettings;

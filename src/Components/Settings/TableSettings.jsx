import React from "react";
import MyRadio from "../Table/MyRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  addTableSize,
  setCurrentTableSize,
} from "../../store/reducers/tableSettingsSlice";
import { setFontSize } from "../../store/reducers/settingSlice";
import { tableSelector } from "../../store/selectors";

function TableSettings() {
  const dispatch = useDispatch();

  const { currentTableSize, allTableSize } = useSelector(tableSelector);

  function setTablewidthHandler(e) {
    dispatch(setCurrentTableSize(+e.target.value));
    dispatch(setFontSize(110));
  }
  function addTableSizeHandler() {
    const width = prompt("Ширина");
    const height = prompt("Высота");
    dispatch(addTableSize({ width: width, height: height }));
  }

  return (
    <>
      <div>выбор таблички</div>
      {allTableSize.map((elem, index) => {
        return (
          <MyRadio
            key={elem.width + "" + elem.height + index}
            val={index}
            callBack={setTablewidthHandler}
            current={currentTableSize}
          >
            ширина {elem.width} высота {elem.height}
          </MyRadio>
        );
      })}
      <div>свой вариант:</div>
      <button onClick={addTableSizeHandler}>добавить</button>
      <div>................</div>
    </>
  );
}

export default TableSettings;

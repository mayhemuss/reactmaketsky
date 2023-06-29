import React, { useState } from "react";
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

  const [addButton, setAddButton] = useState(true);
  const [tableType, setTableType] = useState("pvc");

  const { currentTableSize, allTableSize } = useSelector(tableSelector);

  function setTablewidthHandler(e) {
    dispatch(setCurrentTableSize(+e.target.value));
    dispatch(setFontSize(110));
  }

  function addTogle() {
    setAddButton((prev) => !prev);
  }

  function addHandler(event) {
    const target = event.target;
    event.preventDefault();
    const width = target.width.value;
    const height = target.height.value;
    const type = target.type.value;
    dispatch(addTableSize({ width: width, height: height, type: type }));
    addTogle();
  }

  function inputHandler(event) {
    const target = event.target;
    setTableType(target.value);
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

      {addButton ? <button onClick={addTogle}>добавить</button> : <></>}
      {addButton ? (
        <></>
      ) : (
        <form onSubmit={addHandler}>
          <input name="width" type="text" placeholder="ширина"></input>
          <input name="height" type="text" placeholder="высота"></input>
          <div>
            <input
              name="type"
              type="radio"
              onChange={inputHandler}
              value="pvc"
              checked={"pvc" === tableType ? true : false}
            ></input>
            пвх
            <input
              name="type"
              type="radio"
              onChange={inputHandler}
              value="sticker"
              checked={"sticker" === tableType ? true : false}
            ></input>
            наклейка
          </div>

          <button>ddtcnb</button>
        </form>
      )}
      <div>................</div>
    </>
  );
}

export default TableSettings;

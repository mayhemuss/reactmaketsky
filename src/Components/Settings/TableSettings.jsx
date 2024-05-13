import React, {useState} from "react";
import MyRadio from "../ui/MyRadio";
import {useDispatch, useSelector} from "react-redux";
import {
  addTableSize,
  setCurrentTableSize,
} from "../../store/reducers/tableSettingsSlice";
import {setFontSize} from "../../store/reducers/settingSlice";
import {settingsSelector, tableSelector} from "../../store/selectors";
import style from "./style.module.css"

function TableSettings() {
  const dispatch = useDispatch();

  const [addButton, setAddButton] = useState(true);
  const [tableType, setTableType] = useState("pvc");

  const {currentTableSize, allTableSize} = useSelector(tableSelector);
  const {maxSize} = useSelector(settingsSelector)

  function setTablewidthHandler(e) {
    dispatch(setCurrentTableSize(+e.target.value));
    dispatch(setFontSize(maxSize));
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
    dispatch(addTableSize({width: width, height: height, type: type}));
    addTogle();
  }

  function inputHandler(event) {
    const target = event.target;
    setTableType(target.value);
  }

  return (
    <div className={style.container_vertical}>
      <div>выбор таблички</div>
      {allTableSize.map((elem, index) => {
        const {type, width, height} = elem
        return (
          <MyRadio
            key={width  + height + index}
            val={index}
            callBack={setTablewidthHandler}
            current={currentTableSize}
          >
            шир: {width} выс: {height} тип:
            {type === "sticker" ? " наклейка" : " табличка"}
          </MyRadio>
        );
      })}
      <div>свой вариант:</div>

      {addButton ? <button onClick={addTogle}>создать</button> : (
        <form onSubmit={addHandler}>
          <input name="width" type="text" placeholder="ширина"></input>
          <input name="height" type="text" placeholder="высота"></input>
          <div>
            <MyRadio val={"pvc"} callBack={inputHandler} name={"type"} current={tableType}/>пвх
            <MyRadio val={"sticker"} callBack={inputHandler} name={"type"} current={tableType}/>наклейка
          </div>
          <button>Добавить</button>
        </form>
      )}

    </div>
  );
}

export default TableSettings;

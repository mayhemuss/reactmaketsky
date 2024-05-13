import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { settingsSelector } from "../../store/selectors";
import style from "./style.module.css";
import { setMaxSize } from "../../store/reducers/settingSlice";

function MaxSizeSettings(props) {
  const dispatch= useDispatch()
  const { maxSize } = useSelector(settingsSelector);
  const [max, setMax] = useState(maxSize);
  const changeHandler = (e)=>{
    setMax(e.target.value)
  }

  const submitHandler = ()=>{
    dispatch(setMaxSize(+max));
  }

  return (
    <div className={style.container_vertical}>
      <div>максимальный шрифт таблицы </div>
      <input type="number" onChange={changeHandler} value={max}></input>
      <button onClick={submitHandler}> выбрать</button>
    </div>
  );
}

export default MaxSizeSettings;

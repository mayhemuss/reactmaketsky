import React, { useState } from "react";
import MyRadio from "../Table/MyRadio";
import { addHeadTypes, setHeadType } from "../../store/reducers/settingSlice";
import { settingsSelector } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import styles from "./laddernamesettings.module.css";

function LadderNameSettings(props) {
  const dispatch = useDispatch();
  const { headType, headTypes } = useSelector(settingsSelector);
  const [newType, setNewType] = useState("");

  const typesHandler = (e) => {
    e.preventDefault();
    dispatch(addHeadTypes(e.target.types.value));
    setNewType("");
  };

  const headTypeHandler = (e) => {
    dispatch(setHeadType(e.target.value));
  };

  return (
    <div>
      Выбери тип названия парадной:
      {headTypes.map((elem) => {
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
      <form className={styles.form} onSubmit={typesHandler}>
        <input
          name="types"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
          placeholder="добавить свое"
        ></input>
        <button type="submit">добавить</button>
      </form>
    </div>
  );
}

export default LadderNameSettings;

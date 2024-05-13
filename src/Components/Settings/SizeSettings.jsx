import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AdressSizeDecriment,
  AdressSizeIncriment,
  setAdressSize,
} from "../../store/reducers/settingSlice";
import styles from  "./sizesettings.module.css"
import style from "./style.module.css"
import { settingsSelector } from "../../store/selectors";

function SizeSettings() {
  const dispatch = useDispatch();
  const { adressSize } = useSelector(settingsSelector);
  const [inputData, setInputData] = useState(adressSize);

  function inputDataHandler({ target: { value } }) {
    setInputData(value);
  }

  const submitInput = (event) => {
    event.preventDefault();
    dispatch(setAdressSize(Number(inputData)));
  };

  return (
    <div className={styles.container +" "+ style.container_vertical}>
      размер адреса:
      <form onSubmit={submitInput}>
        <input
          placeholder="шрифт адреса"
          type="number"
          value={inputData}
          onChange={inputDataHandler}
        />
        <button type="submit">ввести</button>
      </form>
      <div style={{ width: "100%" }}>
        <button
          style={{ width: "50%" }}
          onClick={() => {
            dispatch(AdressSizeIncriment());
            setInputData((prev) => +prev - 1);
          }}
        >
          - -
        </button>
        <button
          style={{ width: "50%" }}
          onClick={() => {
            dispatch(AdressSizeDecriment());
            setInputData((prev) => +prev + 1);
          }}
        >
          + +
        </button>
      </div>
    </div>
  );
}

export default SizeSettings;

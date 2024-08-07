import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
  setAdress,
  setAllEntarence,
  setBuildingNumber,
  setEntarance,
  setStreetName,
  setStreetType,
} from "../../store/reducers/entrancesSlice";
import {
  setCurrentEntarance, setCurrentFloor,
  setFontSize,
} from "../../store/reducers/settingSlice";
import styles from "./laddernamesettings.module.css"

function EntaranceInput() {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");

  function inputDataHandler(e) {
    setInputData(e.target.value);
  }

  const changeInput = (event) => {
    event.preventDefault();
    try {
      const parse = JSON.parse(inputData);
      const firstLadder = Object.keys(parse.entrance)[0];
      const firstFloor = 0
      const entranceCount = Object.keys(parse.entrance);
      if (parse.entrance[entranceCount[0]].long[0] === undefined) {
        delete parse.entrance[entranceCount[0]];
      }
      dispatch(setBuildingNumber(parse.buildingNumber));
      dispatch(setStreetType(parse.streetType.toLowerCase()));
      dispatch(setStreetName(parse.streetName));
      dispatch(setAdress(parse.adress));
      dispatch(setEntarance(parse.entrance));
      dispatch(setAllEntarence(Object.keys(parse.entrance)));
      dispatch(setCurrentEntarance(firstLadder));
      dispatch(setFontSize(150));
      dispatch(setCurrentFloor(firstFloor))
      setInputData("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Введи данные из экселя:
      <form
        className={styles.form} onSubmit={changeInput}>
        <input
          placeholder="данные из exel"
          type="text"
          value={inputData}
          onChange={inputDataHandler}
        />
        <button type="submit">ввести</button>
      </form>
    </div>
  );
}

export default EntaranceInput;

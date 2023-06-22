import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAdress,
  setAllEntarence,
  setEntarance,
} from "../../store/reducers/entrancesSlice";
import {
  setCurrentEntarance,
  setFontSize,
  
} from "../../store/reducers/settingSlice";

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
      const entranceCount = Object.keys(parse.entrance);
      if (parse.entrance[entranceCount[0]].long[0] === undefined) {
        delete parse.entrance[entranceCount[0]];
      }
      dispatch(setAdress(parse.adress));
      dispatch(setEntarance(parse.entrance));
      dispatch(setAllEntarence(Object.keys(parse.entrance)));
      dispatch(setCurrentEntarance(Object.keys(parse.entrance)[0]));
      dispatch(setFontSize(110));
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      Введи данные из экселя:
      <form onSubmit={changeInput}>
        <input placeholder="данные из exel" type="text" value={inputData} onChange={inputDataHandler} />
        <button type="submit">ввести</button>
      </form>
      <div>...................</div>
    </>
  );
}

export default EntaranceInput;

import React, { useState } from "react";
import { randomcounter } from "../function/randomrooms";
import { createDownloadFile } from "../function/createDownloadFile";

function RoomsCounterRandom() {
  const [inputValue, setInputValue] = useState("");
  const [complite, setComplite] = useState("");
  const [partCount, setPartCount] = useState(3);
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const countHandler = (e) => {
    setPartCount(e.target.value);
  };
  const submitHandler = () => {
    try {
      const value = JSON.parse(inputValue);
      const b = value.map((elem) => {
        return {
          ...elem,
          parts: randomcounter(elem.apartmentsCount, +partCount),
        };
      });
      const jsonString = JSON.stringify(b);
      createDownloadFile(jsonString)

      setComplite(jsonString);

      console.log(jsonString);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div style={{ fontSize: "24px" }}>
      <input
        placeholder="count"
        value={partCount}
        onChange={countHandler}
      ></input>
      <input
        onChange={inputHandler}
        value={inputValue}
        placeholder="введи данные"
      ></input>
      <button onClick={submitHandler}>посчитать</button>
      <div>{complite}</div>
    </div>
  );
}

export default RoomsCounterRandom;

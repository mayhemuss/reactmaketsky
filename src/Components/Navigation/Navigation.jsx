import React, { useEffect, useState } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";

function Navigation({
  setIsReverseTable, changeInput, ladderCount, setСurrentLadder, setHaveTableHead, setHaveAddAdress, setHeadType, setHaveLadderNum
  
}) {
 

 


  const headTypeHandler = (e) => {
    setHeadType(e.target.value);
  };

 
  return (
    <div className="navigation">
      <MyInput changeInput={changeInput} />
      <button onClick={setHaveAddAdress}>Нужен адресс?</button>
      <button onClick={setHaveLadderNum}>Нужна парадная?</button>
      <button onClick={setHaveTableHead}>Нужен заголовок этаж квартира?</button>
      <button onClick={setIsReverseTable}>Перевернуть таблицу</button>
      <button onClick={headTypeHandler} value={"Парадная"}>
        Парадная
      </button>
      <button onClick={headTypeHandler} value={"Лестница"}>
        Лестница
      </button>
      <button onClick={headTypeHandler} value={"Подъезд"}>
        Подъезд
      </button>
      выбор парадной:
      {ladderCount.map((elem) => {
        return (
          <MyButton
            key={elem}
            ladderr={elem}
            setСurrentLadder={setСurrentLadder}
          />
        );
      })}
    </div>
  );
}

export default Navigation;

import React, { useEffect, useState } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";

function Navigation({
  setIsReverseTable, changeInput, ladderCount, setСurrentLadder, setHaveTableHead, setHaveAddAdress, setHeadType, setHaveLadderNum
  
}) {
  const [state, setState] = useState(ladderCount);

  const revesTableHandler = () => {
    setIsReverseTable((prev) => !prev);
  };

  const haveTableHeadHandler = () => {
    setHaveTableHead((prev) => !prev);
  };

  const haveAddAdressHandler = () => {
    setHaveAddAdress((prev) => !prev);
  };
  const HaveLadderNumHandler = () => {
    setHaveLadderNum((prev) => !prev);
  };
  const headTypeHandler = (e) => {
    setHeadType(e.target.value);
  };

  useEffect(() => {
    setState(ladderCount);
  }, [ladderCount]);
  return (
    <div className="navigation">
      <MyInput changeInput={changeInput} />
      <button onClick={haveAddAdressHandler}>Нужен адресс?</button>
      <button onClick={HaveLadderNumHandler}>Нужна парадная?</button>
      <button onClick={haveTableHeadHandler}>Нужен заголовок этаж квартира?</button>
      <button onClick={revesTableHandler}>Перевернуть таблицу</button>
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
      {state.map((elem) => {
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

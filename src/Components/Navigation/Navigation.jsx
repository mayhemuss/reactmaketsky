import React, { useEffect, useState } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";

function Navigation({
  changeInput,
  setСurrentLadder,
  ladderCount,
  setReverseTable,
  setTableHead,
  setAddAdress,
  setHeadType,
  setAddLadderNum,
}) {
  const [state, setState] = useState(ladderCount);

  const revesTableHandler = () => {
    setReverseTable((prev) => !prev);
  };

  const tableHeadHandler = () => {
    setTableHead((prev) => !prev);
  };

  const addAdressHandler = () => {
    setAddAdress((prev) => !prev);
  };
  const addLadderNumHandler = () => {
    setAddLadderNum((prev) => !prev);
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
      <button onClick={addAdressHandler}>Нужен адресс?</button>
      <button onClick={addLadderNumHandler}>Нужна парадная?</button>
      <button onClick={tableHeadHandler}>Нужен заголовок этаж квартира?</button>
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

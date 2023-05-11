import { useEffect, useState } from "react";
import FullTable from "./Components/Table/FullTable";
import Navigation from "./Components/Navigation/Navigation";
import Instruction from "./Components/Instruction/Instruction";
import sampleLadder from "./sampleLadder";

function App() {
  const changeInput = (event) => {
    const inputValue = event.target.value;
    const value = inputValue.substring(0, inputValue.length - 2);
    try {
      setInputData(JSON.parse(value + "]}"));
    } catch (error) {
      alert("Формат файла не правильный");
      alert(error);
    }
  };

  const [inputData, setInputData] = useState(sampleLadder);
  const [ladderCount, setLadderCount] = useState([]);
  const [currentLadder, setСurrentLadder] = useState(1);
  const [isReverseTable, setIsReverseTable] = useState(false);
  const [haveLadderNum, setHaveLadderNum] = useState(true);
  const [haveTableHead, setHaveTableHead] = useState(true);  //этаж квартира?
  const [haveAddAdress, setHaveAddAdress] = useState(true);  //указывать адресс?
  const [headType, setHeadType] = useState("Парадная");  //тип подписи в заголовке

  useEffect(() => {    //при изменении инпута получаем массив с номерами парадных
    const arr = [];
    inputData.ladders.forEach((elem) => {
      arr.push(elem.ladderNum);
      setLadderCount(arr);
    });
  }, [inputData]);

  return (
    <div className="App">
      <FullTable
        inputData={inputData}
        currentLadder={currentLadder}
        isReverseTable={isReverseTable}
        haveTableHead={haveTableHead}
        haveAddAdress={haveAddAdress}
        headType={headType}
        haveLadderNum={haveLadderNum}
      />
      <Navigation
        setIsReverseTable={setIsReverseTable}
        changeInput={changeInput}
        ladderCount={ladderCount}
        setСurrentLadder={setСurrentLadder}
        setHaveTableHead={setHaveTableHead}
        setHaveAddAdress={setHaveAddAdress}
        setHeadType={setHeadType}
        setHaveLadderNum={setHaveLadderNum}
      />
      <Instruction />
    </div>
  );
}
export default App;

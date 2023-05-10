import { useEffect, useState } from "react";
import FullTable from "./Components/Table/FullTable";
import Navigation from "./Components/Navigation/Navigation";
import Instruction from "./Components/Instruction/Instruction";

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

  const sampleLadder = {
    Adress: "Какойто адресс",
    ladders: [
      {
        ladderNum: 1,
        arr: [
          { floor: 1, roomStart: "кв", roomEnd: "кв" },
          { floor: 2, roomStart: "кв", roomEnd: "кв" },
          { floor: 3, roomStart: "кв", roomEnd: "кв" },
          { floor: 4, roomStart: "кв", roomEnd: "кв" },
          { floor: 5, roomStart: "кв", roomEnd: "кв" },
          { floor: 6, roomStart: "кв", roomEnd: "кв" },
          { floor: 7, roomStart: "кв", roomEnd: "кв" },
          { floor: 8, roomStart: "кв", roomEnd: "кв" },
          { floor: 9, roomStart: "кв", roomEnd: "кв" },
          { floor: 10, roomStart: "кв", roomEnd: "кв" },
        ],
      },
    ],
  };

  const standartSettings = {};

  const [inputData, setInputData] = useState(sampleLadder);
  const [ladderCount, setLadderCount] = useState([]);

  const [settings, setSettings] = useState();

  const [currentLadder, setСurrentLadder] = useState(1);
  const [reverseTable, setReverseTable] = useState(false);
  const [addLadderNum, setAddLadderNum] = useState(true);
  const [tableHead, setTableHead] = useState(true);
  const [addAdress, setAddAdress] = useState(true);
  const [headType, setHeadType] = useState("Парадная");

  useEffect(() => {
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
        reverseTable={reverseTable}
        tableHead={tableHead}
        addAdress={addAdress}
        headType={headType}
        addLadderNum={addLadderNum}
      />
      <Navigation
        setReverseTable={setReverseTable}
        changeInput={changeInput}
        ladderCount={ladderCount}
        setСurrentLadder={setСurrentLadder}
        setTableHead={setTableHead}
        setAddAdress={setAddAdress}
        setHeadType={setHeadType}
        setAddLadderNum={setAddLadderNum}
      />
      <Instruction />
    </div>
  );
}
export default App;

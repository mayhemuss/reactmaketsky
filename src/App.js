import { useState } from "react";
import FullTable from "./Components/Table/FullTable";
import Navigation from "./Components/Navigation/Navigation";
import Instruction from "./Components/Instruction/Instruction";
import sampleLadder from "./sampleLadder";
import { useToggle } from "./useToggle";

function App() {
  const changeInput = ({ target: { value } }) => {
    const val = value.substring(0, value.length - 2);
    try {
      setInputData(JSON.parse(val + "]}"));
    } catch (error) {
      alert("Формат файла не правильный");
      alert(error);
    }
  };

  const [inputData, setInputData] = useState(sampleLadder);

  const [currentLadder, setСurrentLadder] = useState(1);
  const [isReverseTable, toggleIsReverseTable] = useToggle(false);
  const [haveLadderNum, toggleHaveLadderNum] = useToggle(true);
  const [haveTableHead, toggleHaveTableHead] = useToggle(true); //этаж квартира?
  const [haveAddAdress, toggleHaveAddAdress] = useToggle(true); //указывать адресс?
  const [headType, setHeadType] = useState("Парадная"); //тип подписи в заголовке

  //при изменении инпута получаем массив с номерами парадных
  const ladderCount = inputData.ladders.map((elem) => elem.ladderNum);

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
        setIsReverseTable={toggleIsReverseTable}
        changeInput={changeInput}
        ladderCount={ladderCount}
        setСurrentLadder={setСurrentLadder}
        setHaveTableHead={toggleHaveTableHead}
        setHaveAddAdress={toggleHaveAddAdress}
        setHeadType={setHeadType}
        setHaveLadderNum={toggleHaveLadderNum}
      />
      <Instruction />
    </div>
  );
}
export default App;

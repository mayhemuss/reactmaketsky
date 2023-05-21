import { useState } from "react";
import React from "react";
import FullTable from "./Components/Table/FullTable";
import Settings from "./Components/Settings/Settings";
import Instruction from "./Components/Instruction/Instruction";
import sampleLadder from "./sampleLadder";
import { useToggle } from "./useToggle";

function App() {
  const changeInput = ({ target: { value } }) => {
    try {
      const parse = JSON.parse(value);
      setLadderCount(Object.keys(parse.ladders));
      setInputData(parse);
      setСurrentLadder(Object.keys(parse.ladders)[0])
    } catch (error) {
      alert("Формат файла не правильный");
      alert(error);
    }
  };
  
  const [inputData, setInputData] = useState(sampleLadder);
  const [currentLadder, setСurrentLadder] = useState(1);

  const [fullSize,setFullSize] = useToggle(false);
  const [fontSiz,setFontSize] = useState(90);
  const [idealSize,setIdealSize] = useState(0);

  const [isReverseTable, toggleIsReverseTable] = useToggle(false);
  const [haveLadderNum, toggleHaveLadderNum] = useToggle(true);
  const [haveTableHead, toggleHaveTableHead] = useToggle(true); //этаж квартира?
  const [haveAddAdress, toggleHaveAddAdress] = useToggle(true); //указывать адресс?
  const [headType, setHeadType] = useState("Парадная №"); //тип подписи в заголовке

  //при изменении инпута получаем массив с номерами парадных
  const [ladderCount, setLadderCount] = useState([1,2]);

  return (
    <div className="App">
      <FullTable
        
      />
      <Settings
     
      />
      <Instruction />
    </div>
  );
}
export default App;

import React from "react";
import FullSettings from "../Components/Settings/FullSettings";
import Instruction from "../Components/Instruction/Instruction";
import FullTable from "../Components/Table/FullTable";
import { useSelector } from "react-redux";
import { tableSelector } from "../store/selectors";

function EnteranceTablePage() {
  const { allTableSize, currentTableSize } = useSelector(tableSelector);

  const height = allTableSize[currentTableSize].height;
  const width = allTableSize[currentTableSize].width;
  
  return (
    <div className="enterance_table flex row">
      <FullTable />
      <FullSettings />
      <Instruction height={height} width={width} />
    </div>
  );
}

export default EnteranceTablePage;

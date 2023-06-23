import React from "react";
import FullSettings from "../Components/Settings/FullSettings";
import Instruction from "../Components/Instruction/Instruction";
import FullTable from "../Components/Table/FullTable";

function EnteranceTablePage(props) {
  return (
    <div className="enterance_table">
      <FullTable />
      <FullSettings />
      <Instruction />
    </div>
  );
}

export default EnteranceTablePage;

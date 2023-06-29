import React from "react";
import Instruction from "../Components/Instruction/Instruction";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import SmallTable from "../Components/SmallTable/SmallTable";
import AdressSizeSettings from "../Components/Settings/AdressSizeSettings";
import SizeSettings from "../Components/Settings/SizeSettings";
import ChoseEntarance from "../Components/Settings/ChoseEntarance";
import TableHeadSettings from "../Components/Settings/TableHeadSettings";
import LadderNameSettings from "../Components/Settings/LadderNameSettings";

function SmallTablePage(props) {
  return (
    <div style={{display:"flex", flexDirection:"row", gap:"10mm"}}>
      <SmallTable />
      <div style={{width:"50mm"}}>
        <EntaranceInput />
        <LadderNameSettings/>
        <SizeSettings/>
        <ChoseEntarance/>
      </div>
      <Instruction />
    </div>
  );
}

export default SmallTablePage;

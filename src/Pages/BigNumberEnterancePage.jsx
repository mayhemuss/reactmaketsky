import React from "react";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import LadderNameSettings from "../Components/Settings/LadderNameSettings";
import ChoseEntarance from "../Components/Settings/ChoseEntarance";
import Instruction from "../Components/Instruction/Instruction";
import BigNumber from "../Components/SmallTable/BigNumber";

function BigNumberEnterancePage(props) {
  return (
    <div className="flex row" style={{ gap: "10mm" }}>
      <BigNumber />
      <div style={{ width: "50mm" }}>
        <EntaranceInput />
        <div>...................</div>
        <LadderNameSettings />
        <div>...................</div>
        <ChoseEntarance />
      </div>
      <Instruction width={210} height={297} />
    </div>
  );
}

export default BigNumberEnterancePage;

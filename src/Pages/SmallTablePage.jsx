import React, { useEffect } from "react";
import Instruction from "../Components/Instruction/Instruction";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import SmallTable from "../Components/SmallTable/SmallTable";

import SizeSettings from "../Components/Settings/SizeSettings";
import ChoseEntarance from "../Components/Settings/ChoseEntarance";

import LadderNameSettings from "../Components/Settings/LadderNameSettings";
import { useSelector } from "react-redux";
import { entrancesSelector, settingsSelector } from "../store/selectors";

function SmallTablePage() {
  const { adress } = useSelector(entrancesSelector);
  const { currentEntarance } = useSelector(settingsSelector);

  useEffect(() => {
    document.title = `${adress}_п№${currentEntarance}_210_148`;
  }, [currentEntarance, adress]);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10mm" }}>
      <SmallTable />
      <div style={{ width: "50mm" }}>
        <EntaranceInput />
        <LadderNameSettings />
        <SizeSettings />
        <ChoseEntarance />
      </div>
      <Instruction width={210} height={148} />
    </div>
  );
}

export default SmallTablePage;

import React, { useEffect } from "react";
import Instruction from "../Components/Instruction/Instruction";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import SmallTable from "../Components/SmallTable/SmallTable";

import SizeSettings from "../Components/Settings/SizeSettings";
import ChoseEntarance from "../Components/Settings/ChoseEntarance";

import LadderNameSettings from "../Components/Settings/LadderNameSettings";
import { useSelector } from "react-redux";
import { entrancesSelector, settingsSelector } from "../store/selectors";
import print from "./printhide.module.css";
import styles from "./style.module.css"

function SmallTablePage() {
  const { adress } = useSelector(entrancesSelector);
  const { currentEntarance } = useSelector(settingsSelector);

  useEffect(() => {
    document.title = `${adress}_п№${currentEntarance}_210_148`;
  }, [currentEntarance, adress]);

  return (
    <div className="flex row" style={{ gap: "10mm" }}>
      <SmallTable />
      <div className={(print.print_hide+" "+ styles.settings)}>
        <EntaranceInput />
        <div>...................</div>
        <LadderNameSettings />
        <div>...................</div>
        <SizeSettings />
        <div>...................</div>
        <ChoseEntarance />
      </div>
      
      <Instruction orientering="vertical" width={210} height={148} />
    </div>
  );
}

export default SmallTablePage;

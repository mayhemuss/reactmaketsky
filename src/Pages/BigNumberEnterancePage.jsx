import React from "react";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import LadderNameSettings from "../Components/Settings/LadderNameSettings";
import ChoseEntarance from "../Components/Settings/ChoseEntarance";
import Instruction from "../Components/Instruction/Instruction";
import BigNumber from "../Components/SmallTable/BigNumber";
import print from "./printhide.module.css";
import styles from "./style.module.css"

function BigNumberEnterancePage(props) {
  return (
    <div className={styles.container_horizontal}>
      <BigNumber />
      <div className={(print.print_hide+" "+ styles.settings)}>
        <EntaranceInput />
        <div>...................</div>
        <LadderNameSettings />
        <div>...................</div>
        <ChoseEntarance />
      </div>
      <Instruction orientering="vertical" width={210} height={297} />
    </div>
  );
}

export default BigNumberEnterancePage;

import React from "react";
import styles from "./style.module.css";
import print from "./printhide.module.css";
import EntaranceInput from "../Components/Settings/EntaranceInput";

import ChoseEntarance from "../Components/Settings/ChoseEntarance";
import Instruction from "../Components/Instruction/Instruction";
import BigFloorTable from "../Components/BigFloorTable/BigFloorTable";
import ChoseFloor from "../Components/Settings/ChoseFloor";
import ChoseDesign from "../Components/Settings/ChoseDesign";
import { useSelector } from "react-redux";
import { tableSelector } from "../store/selectors";

function BigFloorPage(props) {
  const {bigNumberTableSize, currentBigNumberTableSize} = useSelector(tableSelector);

  const height = bigNumberTableSize[currentBigNumberTableSize].height;
  const width = bigNumberTableSize[currentBigNumberTableSize].width;

  return (
    <div className={styles.container_horizontal}>
      <div>
        <BigFloorTable />
      </div>
      <div className={print.print_hide + " " + styles.settings}>
        <EntaranceInput />
        <div>...................</div>
        <ChoseDesign />
        <div>...................</div>
        <ChoseEntarance />
        <div>...................</div>
        <ChoseFloor />
      </div>
      <Instruction orientering="vertical" width={width} height={height} />
    </div>
  );
}

export default BigFloorPage;

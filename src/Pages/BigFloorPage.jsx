import React from 'react';
import styles from "./style.module.css"
import print from "./printhide.module.css";
import EntaranceInput from "../Components/Settings/EntaranceInput";

import ChoseEntarance from "../Components/Settings/ChoseEntarance";
import Instruction from "../Components/Instruction/Instruction";
import BigFloorTable from "../Components/BigFloorTable/BigFloorTable";
import ChoseFloor from "../Components/Settings/ChoseFloor";

function BigFloorPage(props) {
  return (
    <div className={styles.container_horizontal}>
      <div>
        <BigFloorTable/>
      </div>
      <div className={(print.print_hide + " " + styles.settings)}>
        <EntaranceInput/>
        <div>...................</div>
        <ChoseEntarance/>
        <div>...................</div>
        <ChoseFloor/>
      </div>
      <Instruction orientering="vertical" width={300} height={400}/>
    </div>
  );
}

export default BigFloorPage;
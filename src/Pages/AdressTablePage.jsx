import React from "react";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import Instruction from "../Components/Instruction/Instruction";
import FullAdressTable from "../Components/AdressTable/FullAdressTable";
import AdressSizeSettings from "../Components/Settings/AdressSizeSettings";
import styles from "./style.module.css";
import print from "./printhide.module.css";

function AdressTablePage(props) {
  return (
    <div className={styles.container_vertical}>
      <FullAdressTable />
      <div className={styles.container_horizontal}>
        <div className={(print.print_hide+" "+ styles.settings)}>
          <EntaranceInput />
          <div>...................</div>
          <AdressSizeSettings />
        </div>
        
          <Instruction orientering="horizontal" height={250} width={600} />
        
      </div>
    </div>
  );
}

export default AdressTablePage;

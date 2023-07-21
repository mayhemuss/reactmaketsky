import React from "react";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import Instruction from "../Components/Instruction/Instruction";
import FullAdressTable from "../Components/AdressTable/FullAdressTable";
import AdressSizeSettings from "../Components/Settings/AdressSizeSettings";
import style from "./adresstable.module.css"

function AdressTablePage(props) {
  return (
    <div className="flex collumn gap15">
      <FullAdressTable />
      <div className="flex row">
        <div className={style.settings}>
          <EntaranceInput />
          <div>...................</div>
          <AdressSizeSettings />
        </div><div className={style.instruction}>
        <Instruction height={250} width={600} /></div>
      </div>
    </div>
  );
}

export default AdressTablePage;

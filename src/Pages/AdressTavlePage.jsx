import React from "react";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import Instruction from "../Components/Instruction/Instruction";
import FullAdressTable from "../Components/AdressTable/FullAdressTable";
import AdressSizeSettings from "../Components/Settings/AdressSizeSettings";

function AdressTavlePage(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap:"15mm" }}>
      <FullAdressTable />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <EntaranceInput />
          <AdressSizeSettings />
        </div>
        <Instruction />
      </div>
    </div>
  );
}

export default AdressTavlePage;

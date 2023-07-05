import React, { useEffect } from "react";
import EntaranceInput from "../Components/Settings/EntaranceInput";
import Instruction from "../Components/Instruction/Instruction";
import FullAdressTable from "../Components/AdressTable/FullAdressTable";
import AdressSizeSettings from "../Components/Settings/AdressSizeSettings";

function AdressTablePage(props) {
  return (
    <div className="flex collumn gap15" >
      <FullAdressTable />
      <div className="flex row">
        <div>
          <EntaranceInput />
          <AdressSizeSettings />
        </div>
        <Instruction height={250} width={600} />
      </div>
    </div>
  );
}

export default AdressTablePage;

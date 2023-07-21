import React  from "react";
import AddLogo from "../Table/AddLogo";
import Adress from "../Table/Adress";
import LadderNum from "../Table/LadderNum";
import ShortEnterance from "./ShortEnterance";

function SmallTable() {
  return (
    <div
      className="small_tab flex collumn standart_border"
      style={{
        width: "210mm",
        height: "148mm",
      }}
    >
      <div
        className="flex collumn h100 space_between"
        style={{
          marginRight: "8mm",
          marginLeft: "8mm",
          marginTop: "8mm",
        }}
      >
        <div className="flex collumn h100">
          <div
            className="base_blue_white flex w100 flex_centr align_center"
            style={{
              height: "40mm",
              fontSize: "40pt",
              marginBottom: "3mm",
            }}
          >
            <Adress haveAdress={true} />
          </div>
          <div className="flex collumn base_blue_white h100 w100 space_between align_center">
            <div className="numb flex collumn h100 flex_centr">
              <LadderNum haveLadderNum={true} width={189} />
            </div>
            <div
              className="room flex collumn h100 flex_start"
              style={{
                fontSize: "80pt",
              }}
            >
              <ShortEnterance />
            </div>
          </div>
        </div>
        <AddLogo width={210} />
      </div>
    </div>
  );
}

export default SmallTable;

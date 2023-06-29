import React, { useEffect } from "react";
import AddLogo from "../Table/AddLogo";
import Adress from "../Table/Adress";
import LadderNum from "../Table/LadderNum";
import ShortEnterance from "./ShortEnterance";

function SmallTable() {
  useEffect(() => {}, []);

  return (
    <div
      className="small_tab"
      style={{
        width: "210mm",
        height: "148mm",
        border: "1px dotted black",

        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginRight: "8mm",
          marginLeft: "8mm",
          marginTop: "8mm",
          // paddingBottom: "-18mm",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          alignContent: "stretch",
          justifyContent: "space-between",
          // gap: "2.5mm",
          height: "100%",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <div
            style={{
              backgroundColor: "rgb(49, 39, 131)",
              width: "100%",
              height: "40mm",
              display: "flex",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40pt",
              marginBottom: "3mm",
            }}
          >
            <Adress/>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgb(49, 39, 131)",
              color: "white",
              width: "100%",
              // height: "25mm",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              // height: "80mm",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
              className="numb"
            >
              <LadderNum width={189}/>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "flex-start",
                fontSize:"80pt"
              }}
              className="room"
            >
              <ShortEnterance/>
            </div>
          </div>
        </div>
        <AddLogo />
      </div>
    </div>
  );
}

export default SmallTable;

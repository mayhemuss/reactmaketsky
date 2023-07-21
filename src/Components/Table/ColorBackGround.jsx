import React from "react";

function ColorBackGround({ height, width }) {
  return (
    <>
      <div
        className="black absolute z3"
        style={{
          height: height / 7 + "mm",
          width: width + "mm",
        }}
      ></div>
      <div
        className=" zeroSize absolute z3"
        style={{
          borderTop: width * 0.6 + `mm solid rgb(51,51,50)`,
          borderRight: `${width}mm solid transparent`,
          top: height / 7 + 2 + "mm",
        }}
      ></div>

      <div
        className="green absolute z1"
        style={{
          height: height / 2 + "mm",
          width: width + "mm",
          top: "22mm",
        }}
      ></div>
      <div
        className=" zeroSize absolute z1"
        style={{
          borderTop: width * 0.6 + `mm solid rgb(94,176,50)`,
          borderRight: `${width}mm solid transparent`,
          top: height / 2 + 22 + "mm",
        }}
      ></div>
    </>
  );
}

export default ColorBackGround;

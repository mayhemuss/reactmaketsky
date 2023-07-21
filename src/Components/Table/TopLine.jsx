import React from "react";

function TopLine({ haveTableHead, type }) {
  const styleType = type === "sticker" ? "base_white_black " : "base_blue_white ";
  return (
    <>
      {haveTableHead && (
        <div className="flex row top line">
          <div className={styleType + "base flex collumn1"}>этаж</div>
          <div className={styleType + "base flex collumn2"}>квартиры</div>
        </div>
      )}
    </>
  );
}

export default TopLine;

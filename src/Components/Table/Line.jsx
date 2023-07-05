import React from "react";

function Line({ thisFloor, haveTableHead, style, refcomp, type }) {
  return (
    <>
      {haveTableHead && (
        <div className="flex row top line">
          <div
            className={
              (type === "sticker" ? "base_white_black " : "base_blue_white ") +
              "base flex collumn1"
            }
          >
            этаж
          </div>
          <div
            className={
              (type === "sticker" ? "base_white_black " : "base_blue_white ") +
              "base flex collumn2"
            }
          >
            квартиры
          </div>
        </div>
      )}

      {thisFloor === undefined ? null : (
        <div ref={refcomp} className="flex row line" style={style}>
          <div
            className={
              (type === "sticker" ? "base_white_black " : "base_blue_white ") +
              "base collumn1 flex row"
            }
          >
            {thisFloor.floor}
          </div>
          <div
            className={
              (type === "sticker" ? "base_white_black " : "base_blue_white ") +
              "base collumn2 flex row"
            }
          >
            {thisFloor.roomStart === "" ? (
              <>{thisFloor.roomEnd}</>
            ) : isNaN(thisFloor.roomEnd) ? (
              <>{thisFloor.roomStart + " – " + thisFloor.roomEnd}</>
            ) : (
              <>
                <div className="left flex">{thisFloor.roomStart}</div>
                <div className="center flex">–</div>
                <div className="right flex">{thisFloor.roomEnd}</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Line;

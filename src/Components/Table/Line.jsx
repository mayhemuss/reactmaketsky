import React from "react";

function Line({ thisFloor, style, type }) {
  const { roomStart, roomEnd, floor } = thisFloor;
  const styleType =
    type === "sticker" ? "base_white_black " : "base_blue_white ";
  return (
    <div className="flex row line" style={style}>
      <div className={"base collumn1 flex row " + styleType}>{floor}</div>
      <div className={"base collumn2 flex row " + styleType}>
        {roomStart === "" ? (
          <>{roomEnd}</>
        ) : isNaN(roomEnd) ? (
          <>{roomStart + " – " + roomEnd}</>
        ) : (
          <>
            <div className="left flex">{roomStart}</div>
            <div className="center flex">–</div>
            <div className="right flex">{roomEnd}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Line;

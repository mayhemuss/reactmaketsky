import React from "react";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../store/selectors";

function LadderNum({ width, type, haveLadderNum }) {
  const { currentEntarance, headType } = useSelector(settingsSelector);
  const styleType =
    type === "sticker" ? "base_white_black " : "base_blue_white ";
  const sizeStyle = width > 190 ? "big_ladderN" : "small_ladderN";
  return (
    <>
      {haveLadderNum && (
        <div style={{height:"60%"}}
         className={"base flex " + styleType + sizeStyle}>
          {headType.toUpperCase()}
          {currentEntarance}
        </div>
      )}
    </>
  );
}

export default LadderNum;

import React from "react";
import { useSelector } from "react-redux";
import { settingsSelector } from "../../store/selectors";

function LadderNum({ width, type }) {
  const { currentEntarance, headType } = useSelector(settingsSelector);
  return (
    <div
      className={
        "base flex " +
        (type === "sticker" ? "base_white_black " : "base_blue_white ") +
        (width > 190 ? "big_ladderN" : "small_ladderN")
      }
    >
      {headType.toUpperCase()}
      {currentEntarance}
    </div>
  );
}

export default LadderNum;

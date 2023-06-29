import React from "react";
import { useSelector } from "react-redux";
import { entrancesSelector, settingsSelector } from "../../store/selectors";

function LadderNum({ width }) {
  const { currentEntarance, headType } = useSelector(settingsSelector);
  return (
    <div className={"base " + (width > 190 ? "big_ladderN" : "small_ladderN")}>
      {headType.toUpperCase()}
      {currentEntarance}
    </div>
  );
}

export default LadderNum;

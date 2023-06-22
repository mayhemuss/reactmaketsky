import React from "react";

function LadderNum({ ladderN, headType, width }) {
  return (
    <div className={"base " + (width > 190 ? "big_ladderN" : "small_ladderN")}>
      {headType}
      {ladderN}
    </div>
  );
}

export default LadderNum;

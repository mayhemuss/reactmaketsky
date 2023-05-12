import React from "react";
import Line from "./Line";

function Table({ ladder, reverseTable }) {
  const reversedArr = reverseTable ? [...ladder.arr].reverse() : ladder.arr;

  return (
    <div className="tableBody">
      { reversedArr.map((elem) => <Line key={elem.floor} thisFloor={elem} />)}
    </div>
  );
}

export default Table;

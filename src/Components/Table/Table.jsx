import React from "react";
import Line from "./Line";

function Table({ ladder, reverseTable }) {
  const arr = ladder.arr;

  return (
    <div className="tableBody">
      {reverseTable
        ? Array.from(arr)
            .reverse()
            .map((elem) => <Line key={elem.floor} obj={elem} />)
        : arr.map((elem) => <Line key={elem.floor} obj={elem} />)}
    </div>
  );
}

export default Table;

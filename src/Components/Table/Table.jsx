import React from "react";
import Line from "./Line";

function Table({ ladder, isReverseTable }) {
  const allFloor = ladder.arr;

  return (
    <div className="tableBody">
      {isReverseTable
        ? Array.from(allFloor)
            .reverse()
            .map((elem) => <Line key={elem.floor} thisFloor={elem} />)
        : allFloor.map((elem) => <Line key={elem.floor} thisFloor={elem} />)}
    </div>
  );
}

export default Table;

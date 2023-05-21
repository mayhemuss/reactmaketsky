import React from "react";
import Line from "./Line";
import { useSelector } from "react-redux";

function Table() {

  const entrance = useSelector((state)=> state.entrances.entrance)
  const currentEntarance = useSelector((state)=> state.settings.currentEntarance)
  const isReverseTable = useSelector((state)=> state.settings.isReverseTable)
  const current = entrance[currentEntarance];

  const ladder = isReverseTable ? [...current].reverse() : current;

  return (
    <div >
      {ladder.map((elem) => (
        <Line key={elem.floor} thisFloor={elem} />
      ))}
    </div>
  );
}

export default Table;

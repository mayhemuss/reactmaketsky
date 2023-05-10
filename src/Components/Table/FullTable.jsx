import React from "react";
import Adress from "./Adress";
import LadderNum from "./LadderNum";
import Table from "./Table";
import AddLogo from "./AddLogo";
import Line from "./Line";

function FullTable({
  inputData,
  currentLadder,
  reverseTable,
  tableHead,
  addAdress,
  headType,
  addLadderNum,
}) {
  const ladder = inputData.ladders[currentLadder - 1];

  return (
    <div className="full__table">
      {addAdress ? <Adress adress={inputData.Adress} />:<></>}
      {addLadderNum ? (
        <LadderNum ladderN={ladder} headType={headType} />
      ) : (
        <></>
      )}
      <Line tableHaed={tableHead} />
      <Table ladder={ladder} reverseTable={reverseTable} />
      <AddLogo />
    </div>
  );
}

export default FullTable;

import React from "react";
import Adress from "./Adress";
import LadderNum from "./LadderNum";
import Table from "./Table";
import AddLogo from "./AddLogo";
import Line from "./Line";

function FullTable({
  inputData, currentLadder, isReverseTable, haveTableHead, haveAddAdress, headType, haveLadderNum
}) {
  const ladder = inputData.ladders[currentLadder - 1];

  return (
    <div className="full__table">
      {haveAddAdress ? <Adress adress={inputData.Adress} />:<></>}
      {haveLadderNum ? (
        <LadderNum ladderN={ladder} headType={headType} />
      ) : (
        <></>
      )}
      <Line haveTableHead={haveTableHead} />
      <Table ladder={ladder} isReverseTable={isReverseTable} />
      <AddLogo />
    </div>
  );
}

export default FullTable;

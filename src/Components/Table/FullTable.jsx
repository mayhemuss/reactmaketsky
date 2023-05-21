import React, { createRef, useEffect } from "react";
import Adress from "./Adress";
import LadderNum from "./LadderNum";
import Table from "./Table";
import AddLogo from "./AddLogo";
import Line from "./Line";
import { useSelector } from "react-redux";


function FullTable({
  
}) {



  // const refComponent = createRef();
  // useEffect(() => {
  //   const height = refComponent.current.getBoundingClientRect().height;
  //   console.log(height)
  //   if(fullSize){setIdealSize(height)}
  //   else{}
  // }, [refComponent]);

  const haveAdress = useSelector(
    (state) => state.settings.haveAdress
  );
  const currentEntarance = useSelector(
    (state) => state.settings.currentEntarance
  );
  const headType = useSelector(
    (state) => state.settings.headType
  );
  const haveTableTop = useSelector(
    (state) => state.settings.haveTableTop
  );
  const haveLadderNum = useSelector(
    (state) => state.settings.haveLadderNum
  );
  const adress = useSelector(
    (state) => state.entrances.adress
  );

  return (
    <div className="full__table" >
      <div
        
        
      >
        {haveAdress && <Adress adress={adress} />}
        {haveLadderNum && (
          <LadderNum ladderN={currentEntarance} headType={headType} />
        )}
        <Line haveTableHead={haveTableTop} />

        <Table
        
          // re={refComponent}
        />
        <AddLogo />
      </div>
    </div>
  );
}

export default FullTable;

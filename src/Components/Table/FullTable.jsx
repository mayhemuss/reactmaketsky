import React, { createRef, useEffect } from "react";
import Adress from "./Adress";
import LadderNum from "./LadderNum";
import Table from "./Table";
import AddLogo from "./AddLogo";
import Line from "./Line";
import { useDispatch, useSelector } from "react-redux";
import { changeFontSize } from "../../store/reducers/settingSlice";
import {
  settingsSelector,
  entrancesSelector,
  tableSelector,
} from "../../store/selectors";
import { tableSizeCorrector } from "../../function/tableSizeCorrector";
import { paddingCorrector } from "../../function/paddingCorrector";

function FullTable() {
  const dispatch = useDispatch();

  const {
    haveAdress,
    currentEntarance,
    headType,
    haveTableTop,
    haveLadderNum,
    adressSize,
    fontSize,
  } = useSelector(settingsSelector);
  const { adress, entrance } = useSelector(entrancesSelector);
  const { allTableSize, currentTableSize } = useSelector(tableSelector);

  const refComponent = createRef();
  const refComponent2 = createRef();

  const height = allTableSize[currentTableSize].height;
  const width = allTableSize[currentTableSize].width;

  useEffect(() => {
    const logoref = refComponent.current;
    const currentHigth = logoref.offsetTop + logoref.clientHeight; //высота контейнера
    document.title = `${adress}_п№_${currentEntarance}_${width}_${height}`;
    const fullRef = refComponent2.current;
    const fullHigth =
      fullRef.offsetTop + fullRef.getBoundingClientRect().height; //высота
    dispatch(
      changeFontSize(tableSizeCorrector(fullHigth, currentHigth, fontSize))
    );
  }, [fontSize, currentEntarance, currentTableSize, entrance, adressSize]);

  return (
    <div
      style={{ width: width + "mm", height: height + "mm", display: "flex" }}
    >
      <div
        ref={refComponent2}
        className={"full__table " + paddingCorrector(width)}
        style={{ width: "100%" }}
      >
        {haveAdress && <Adress adress={adress} />}
        {haveLadderNum && (
          <LadderNum
            width={width}
            ladderN={currentEntarance}
            headType={headType}
          />
        )}
        <Line haveTableHead={haveTableTop} />

        <Table />
        <AddLogo refcomp={refComponent} />
      </div>
    </div>
  );
}

export default FullTable;

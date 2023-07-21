import React, { createRef, useEffect } from "react";
import Adress from "./Adress";
import LadderNum from "./LadderNum";
import Table from "./Table";
import AddLogo from "./AddLogo";
import { useDispatch, useSelector } from "react-redux";
import { changeFontSize } from "../../store/reducers/settingSlice";
import {
  settingsSelector,
  entrancesSelector,
  tableSelector,
} from "../../store/selectors";
import { tableSizeCorrector } from "../../function/tableSizeCorrector";
import { paddingCorrector } from "../../function/paddingCorrector";
import ColorBackGround from "./ColorBackGround";
import TopLine from "./TopLine";

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

  const logoRef = createRef();
  const allTableRef = createRef();

  const height = allTableSize[currentTableSize].height;
  const width = allTableSize[currentTableSize].width;
  const type = allTableSize[currentTableSize].type;

  useEffect(() => {
    const logo = logoRef.current;
    const table = allTableRef.current;
    const correctHeight = logo.offsetTop + logo.clientHeight; //растояние до логотипа
    const tableHeight = table.offsetTop + table.getBoundingClientRect().height; //растояние до низа всей таблицы
    dispatch(
      changeFontSize(tableSizeCorrector(tableHeight, correctHeight, fontSize))
    );
  }, [fontSize, currentEntarance, currentTableSize, entrance, adressSize]);

  useEffect(() => {
    document.title = `${adress}_п№_${currentEntarance}_${width}_${height}`;
  }, [currentEntarance, width, height, adress]);

  return (
    <div
      className="flex"
      style={{
        width: width + "mm",
        height: height + "mm",
      }}
    >
      <ColorBackGround />
      <div
        ref={allTableRef}
        className={
          "full__table flex collumn w100 z5 " + paddingCorrector(width)
        }
      >
        <Adress type={type} adress={adress} haveAdress={haveAdress} />

        <LadderNum
          width={width}
          ladderN={currentEntarance}
          headType={headType}
          type={type}
          haveLadderNum={haveLadderNum}
        />
        <TopLine type={type} haveTableHead={haveTableTop} />
        <Table type={type} />
        <AddLogo width={width} logoRef={logoRef} />
      </div>
    </div>
  );
}
export default FullTable;

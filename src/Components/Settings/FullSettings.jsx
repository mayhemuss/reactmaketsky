import React, { useState } from "react";
import MyInput from "./MyInput";
import MyCheckBox from "../MyCheckBox";
import MyRadio from "../Table/MyRadio";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdress,
  setAllEntarence,
  setEntarance,
} from "../../store/reducers/entrancesSlice";
import {
  setAdressSize,
  setHaveAdress,
  setHaveLadderNum,
  setFulltableSize,
  setIsReverseTable,
  setCurrentEntarance,
  setHeadType,
  setIdealFontSize,
  setFontSize,
  setHaveTableTop,
} from "../../store/reducers/settingSlice";
import EntaranceInput from "./EntaranceInput";
import TableHeadSettings from "./TableHeadSettings";
import ChoseEntarance from "./ChoseEntarance";

function FullSettings() {
  

  

  // const { haveAdress, haveLadderNum, haveTableTop, isReverseTable, headType } =
  //   useSelector((state) => state.settings);

 

  
  
  // const fontSizeHandler = (e) => {
    //   dispatch(setFontSize(e.target.value));
    // };
    




  return (
    <div className="settings">
      <EntaranceInput />
      <TableHeadSettings />
      {/* <MyCheckBox callBack={setFullSize} value={fullSize}>
        полный размер
      </MyCheckBox>
      <MyInput place={"шрифт"} val={fontSiz} callBack={fontSizeHandler} />
      <button
        onClick={() => {
          setFontSize((prev) => prev + 1);
        }}
      >
        ++
      </button>
      <button onClick={decrimentSize}>--</button> */}
      <ChoseEntarance/>
    </div>
  );
}

export default FullSettings;

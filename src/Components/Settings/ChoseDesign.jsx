import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableSelector } from "../../store/selectors";
import MyRadio from "../ui/MyRadio";
import { setCurrentBigNumberTableSize } from "../../store/reducers/tableSettingsSlice";

function ChoseDesign() {
  const dispatch = useDispatch();
  const { bigNumberTableSize, currentBigNumberTableSize } =
    useSelector(tableSelector);
  const currentDisignHandler = (e) => {
    dispatch(setCurrentBigNumberTableSize(+e.target.value));
  };

  return (
    <div>
      {bigNumberTableSize.map((e, index) => {
        return (
          <MyRadio
            key={e.name + e.height + e.width}
            callBack={currentDisignHandler}
            current={currentBigNumberTableSize}
            val={index}
          >
            {e.name}
          </MyRadio>
        );
      })}
    </div>
  );
}

export default ChoseDesign;

import React from "react";
import Line from "./Line";
import { useSelector } from "react-redux";
import { entrancesSelector, settingsSelector } from "../../store/selectors";

function Table({ type }) {
  const { entrance } = useSelector(entrancesSelector);

  const { isReverseTable, fontSize, currentEntarance } =
    useSelector(settingsSelector);

  const current = entrance[currentEntarance].long;

  const ladder = isReverseTable ? [...current].reverse() : current;

  return (
    <>
      {ladder.map((elem) => {
        return (
          <Line
            style={{ fontSize: fontSize }}
            type={type}
            key={elem.floor+elem.roomEnd}
            thisFloor={elem}
          />
        );
      })}
    </>
  );
}

export default Table;

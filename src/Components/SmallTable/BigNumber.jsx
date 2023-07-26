import React from "react";
import AddLogo from "../Table/AddLogo";
import ShortEnterance from "./ShortEnterance";
import { settingsSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import style from "./bignumber.module.css";

function BigNumber() {
  const { currentEntarance, headType } = useSelector(settingsSelector);
  return (
    <div className={style.full_table}>
      <div className={style.table_container}>
        <div className={style.table}>
          <div className={style.top_table}>
            <div className={style.ladder_name}>{headType.toUpperCase()}</div>
            <div className={style.big_number}>
              {currentEntarance.toUpperCase()}
            </div>
          </div>

          <div className={style.short_enterance}>
            <ShortEnterance />
          </div>
        </div>

        <AddLogo width={210} />
      </div>
    </div>
  );
}

export default BigNumber;

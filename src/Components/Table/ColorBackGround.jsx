import React from "react";
import {tableSelector} from "../../store/selectors";
import {useSelector} from "react-redux";
import styles from "./ColorBackGround.module.css"

function ColorBackGround() {
  const {allTableSize, currentTableSize} = useSelector(tableSelector);
  const {height, width, type} = allTableSize[currentTableSize];

  return (
    <>
      {type === "sticker" ? (
        <>
          <div
            className={styles.black + " " + styles.absolute + " " + styles.z3}
            style={{
              height: `${height / 7}mm`,
              width: `${width}mm`,
            }}
          ></div>
          <div
            className={styles.zeroSize + " " + styles.absolute + " " + styles.z3}
            style={{
              borderTop: `${width * 0.6}mm solid rgb(51,51,50)`,
              borderRight: `${width}mm solid transparent`,
              top: `${height / 7 + 2}mm`,
            }}
          ></div>

          <div
            className={styles.green + " " + styles.absolute + " " + styles.z1}
            style={{
              height: `${height / 2}mm`,
              width: `${width}mm`,
              top: "22mm",
            }}
          ></div>
          <div
            className={styles.zeroSize + " " + styles.absolute + " " + styles.z3}
            style={{
              borderTop: `${width * 0.6}mm solid rgb(94,176,50)`,
              borderRight: `${width}mm solid transparent`,
              top: `${height / 2 + 22}mm`,
            }}
          ></div>
        </>
      ) : null}
    </>
  );
}

export default ColorBackGround;

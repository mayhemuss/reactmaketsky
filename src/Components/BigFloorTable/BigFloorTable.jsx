import React, { useEffect } from "react";
import styles from "./BigFloorTable.module.css";

import logo_img from "../../images/logo_img.svg";
import logo_text from "../../images/logo_text.svg";
import { useSelector } from "react-redux";
import {
  entrancesSelector,
  settingsSelector,
  tableSelector,
} from "../../store/selectors";
import AddLogo from "../Table/AddLogo";

function BigFloorTable() {
  const { bigNumberTableSize, currentBigNumberTableSize } =
    useSelector(tableSelector);
  const { currentEntarance, currentFloor } = useSelector(settingsSelector);
  const { adress, entrance } = useSelector(entrancesSelector);

  const { width, type, height } = bigNumberTableSize[currentBigNumberTableSize];
  const { roomStart, roomEnd, floor } =
    entrance[currentEntarance].long[currentFloor];

  useEffect(() => {
    document.title = `${adress}_п№${currentEntarance}_эт№_${floor}_${width}_${height}`;
  }, [currentEntarance, adress, currentFloor, currentBigNumberTableSize]);

  return (
    <div
      className={styles.full_table}
      style={{ width: `${width}mm`, height: `${height}mm` }}
    >
      <div
        className={
          type === "gray"
            ? styles.content_container_gray
            : styles.content_container
        }
      >
        <div
          className={type === "gray" ? styles.container_gray : styles.container}
        >
          <div
            style={{ fontSize: width !== 297 ? "" : 450 }}
            className={type === "gray" ? styles.bignumb_gray : styles.bignumb}
          >
            {floor}
            {type === "gray" ? (
              <></>
            ) : width === 297 ? (
              <></>
            ) : (
              <div className={styles.floorName}>этаж</div>
            )}
          </div>

          <div
            className={
              type === "gray"
                ? styles.short_enterance_gray
                : styles.short_enterance
            }
          >
            <div
              className={
                type === "gray" ? styles.roomsName_gray : styles.roomsName
              }
            >
              квартиры
            </div>
            <div className={type === "gray" ? styles.rooms_gray : styles.rooms}>
              {type === "gray" ? "" : "кв. "}
              {roomStart}
              {" — "}
              {roomEnd}
            </div>
          </div>
        </div>

        {type === "gray" ? (
          <div className={styles.adContainer_gray}>
            <img
              className={styles.adLogo_gray}
              alt="logo_img"
              src={logo_img}
            ></img>
            <img
              className={styles.adText_gray}
              alt="logo_text"
              src={logo_text}
            ></img>
          </div>
        ) : (
          // <div className={styles.logo_container}>
          <AddLogo logoRef={null} width={width} />
          //</div>
        )}
      </div>
    </div>
  );
}

export default BigFloorTable;

import React, {useEffect} from 'react';
import styles from "./BigFloorTable.module.css"

import logo_img from "../../images/logo_img.svg";
import logo_text from "../../images/logo_text.svg";
import {useSelector} from "react-redux";
import {entrancesSelector, settingsSelector} from "../../store/selectors";


function BigFloorTable() {
  const {currentEntarance, currentFloor} = useSelector(settingsSelector);
  const {adress, entrance} = useSelector(entrancesSelector);


  const start = entrance[currentEntarance].long[currentFloor].roomStart
  const end = entrance[currentEntarance].long[currentFloor].roomEnd
  const floor = entrance[currentEntarance].long[currentFloor].floor


  useEffect(() => {
    document.title = `${adress}_п№${currentEntarance}_эт№_${floor}_${300}_${400}`;
  }, [currentEntarance, adress, currentFloor]);

  return (
    <div className={styles.full_table}>
      <div style={{width: "100%", height: "345mm", backgroundColor: "#323337", color: "white"}}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "237mm",
          lineHeight: "0.9",
          fontFamily: "SFProDisplayBold",
          marginTop:"37mm",
          letterSpacing:"-20px",
          marginRight:"10px"
        }}>
          {floor}
        </div>
        <div style={{
          fontSize: "31mm",
          display: "flex",
          textAlign: "center",
          fontFamily: "SFProDisplayRegular",
          letterSpacing: "35px",
          marginBottom: "-10mm",
          width:"100%",
          paddingLeft:"17.5px",
          justifyContent:"center",
          marginTop: "-3mm"
        }}>
          квартиры
        </div>
        <div style={{
          letterSpacing: "18px",
          fontSize: "37mm",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontFamily: "SFProDisplayBold",
          paddingLeft:"9px",
          width:"100%",
          textAlign: "center",
          marginTop:"4mm"
        }}>
          {start}{" — "}{end}




        </div>
      </div>

      <div style={{
        height: "55mm",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }}>
        <img style={{height: "33mm", margin: "10mm"}} className="logo_img" alt="logo_img" src={logo_img}></img>
        <img style={{height: "29mm", margin: "10mm"}} className="logo_text" alt="logo_text" src={logo_text}></img>
      </div>
    </div>
  );
}

export default BigFloorTable;
import React, { useEffect } from "react";
import FullAdressName from "./FullAdressName";
import { entrancesSelector, settingsSelector } from "../../store/selectors";
import { useSelector } from "react-redux";
import logo_img from "../../images/logo_img.svg";
import logo_text from "../../images/logo_text.svg";
import AdressLetter from "./AdressLetter";
import style from "./Fulladress.module.css";

function FullAdressTable() {
  const { adress, streetName, streetType, buildingNumber } =
    useSelector(entrancesSelector);
  const {
    streetNameSize,
    streetTypeSize,
    buildingNumberSize,
    buildingNumberIndent,
    streetTypeGap,
  } = useSelector(settingsSelector);

  useEffect(() => {
    document.title = `${adress}_600_250`;
  }, [streetName, streetType, buildingNumber, adress]);

  return (
    <div className={style.full_table}>
      <div className={style.table_container}>
        <div className={style.adress_container}>
          <div
            className={style.adress_name}
            style={{
              fontSize: `${streetNameSize}pt`,
            }}
          >
            <FullAdressName />
          </div>
        </div>
        <div className={style.bottom}>
          <div className={style.typeAndLogo}>
            <div className={style.type}>
              <div
                style={{
                  fontSize: `${streetTypeSize}pt`,
                  letterSpacing: `${streetTypeGap}mm`,
                }}
                className={style.typeContent}
              >
                {streetType}
              </div>
            </div>
            <div className={style.logo}>
              <img className="logo_img" alt="logo_img" src={logo_img}></img>
              <img className="logo_text" alt="logo_text" src={logo_text}></img>
            </div>
          </div>
          <div
            className={style.number}
            style={{
              fontSize: `${buildingNumberSize}pt`,
              marginRight: buildingNumberIndent + 16 + "mm",
            }}
          >
            <div className={style.numberContent}>
              {buildingNumber
                .toLowerCase()
                .split("")
                .map((elem, index) => {
                  return <AdressLetter key={elem + index}>{elem}</AdressLetter>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullAdressTable;

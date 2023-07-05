import React, { useEffect } from "react";
import FullAdressName from "./FullAdressName";
import { entrancesSelector, settingsSelector, tableSelector } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";
import logo_img from "../../images/logo_img.svg";
import logo_text from "../../images/logo_text.svg";
import AdressLetter from "./AdressLetter";
import { addTableSize } from "../../store/reducers/tableSettingsSlice";

function FullAdressTable() {
  const dispatch = useDispatch();

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
    <div
      className="adress_table flex collumn"
      style={{
        width: "600mm",
        height: "250mm",
        
        border: "1px solid black",
        // padding: "20mm",
        
        color: "white",
      }}
    >
      <div className="flex collumn"
        style={{
          height: "100%",
          
          justifyContent: "space-between",
          margin: "20mm",
        }}
      >
        <div className="flex row full_adress base_blue_white"
          style={{
            // width: "100%",
            // height: "100%",
            
            
            height: "77mm",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "20mm",
            paddingRight: "20mm",
            fontSize: `${streetNameSize}pt`,
            // width: "100%",
          }}
          
        >
          <FullAdressName />
        </div>
        <div
          className="111 base_blue_white"
          style={{
            display: "flex",
            flexDirection: "row",
            
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "277mm",
              height: "100%",

              paddingRight: "20mm",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                paddingLeft: "22mm",
                fontSize: `${streetTypeSize}pt`,
                verticalAlign: "text-top",
                marginBottom: "20mm",
                display: "flex",
                marginTop: "-15mm",
                letterSpacing: `${streetTypeGap}mm`,
              }}
            >
              {streetType}
            </div>
            <div
              style={{
                paddingLeft: "13mm",
                paddingTop: "18mm",
                paddingRight: "18mm",
                height: "35mm",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexDirection: "row",
                width: "232mm",
                backgroundColor: "white",
              }}
            >
              <img className="logo_img" alt="logo_img" src={logo_img}></img>
              <img className="logo_text" alt="logo_text" src={logo_text}></img>
            </div>
          </div>
          <div
            style={{
              fontSize: `${buildingNumberSize}pt`,
              display: "flex",
              flexDirection: "row",
              gap: "3mm",
              marginRight: buildingNumberIndent + 18 + "mm",
              alignItems: "flex-end",
              marginBottom: "10mm",
            }}
          >
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
  );
}

export default FullAdressTable;

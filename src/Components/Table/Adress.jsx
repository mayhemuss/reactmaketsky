import React from "react";
import { useSelector } from "react-redux";

import { entrancesSelector, settingsSelector } from "../../store/selectors";

function Adress({ type, haveAdress }) {
  const { adressSize } = useSelector(settingsSelector);
  const { adress } = useSelector(entrancesSelector);

  return (
    <>
      {haveAdress && (
        <div
          style={{ fontSize: adressSize , height: "60%"}}
          className={
            "base flex adress " +
            (type === "sticker" ? "base_white_black" : "base_blue_white")
          }
        >
          {adress.toUpperCase()}
        </div>
      )}
    </>
  );
}

export default Adress;

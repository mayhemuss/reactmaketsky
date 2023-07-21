import React from "react";
import { useSelector } from "react-redux";

import { entrancesSelector, settingsSelector } from "../../store/selectors";

function Adress({type}) {
  const { adressSize } = useSelector(settingsSelector);
  const { adress } = useSelector(entrancesSelector);

  return (
    <div
      style={{ fontSize: adressSize }}
      className={
        "base flex adress " +
        (type === "sticker" ? "base_white_black" : "base_blue_white")
      }
    >
      {adress.toUpperCase()}
    </div>
  );
}

export default Adress;

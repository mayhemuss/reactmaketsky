import React from "react";
import { useSelector } from "react-redux";
import { entrancesSelector } from "../../store/selectors";
import AdressLetter from "./AdressLetter";

function FullAdressName() {
  const { streetName } = useSelector(entrancesSelector);

  return (
    <>
      {streetName
        .toUpperCase()
        .split("")
        .map((elem, index) => {
          return <AdressLetter key={elem + index}>{elem}</AdressLetter>;
        })}
    </>
  );
}

export default FullAdressName;

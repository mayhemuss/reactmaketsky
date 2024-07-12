import React from "react";

function AdressLetter({children}) {
  const letter = children === " " ? "_" : children
  const color = letter === "_" ? "#312783" : "white"
  return <div style={{color: color}}>{letter}</div>;
}

export default AdressLetter;

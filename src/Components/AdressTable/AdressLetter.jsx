import React from "react";

function AdressLetter({ children }) {
  const color = children ==="_"? "#312783" : "white"
  return <div style={{color: color}}>{children}</div>;
}

export default AdressLetter;

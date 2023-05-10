import React from "react";
import sky_logo from "../../images/sky_logo.svg";
import sky_text from "../../images/sky_text.svg";

function AddLogo(props) {
  return (
    <div className="logo">
      <img className="sky_logo" src={sky_logo}></img>
      <img className="sky_text" src={sky_text}></img>
    </div>
  );
}

export default AddLogo;

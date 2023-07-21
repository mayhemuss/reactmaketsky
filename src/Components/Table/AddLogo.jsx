import React from "react";
import logo_img from "../../images/logo_img.svg";
import logo_text from "../../images/logo_text.svg";

function AddLogo({ logoRef, width }) {
  function logoCorrector(size) {
    if (size < 180) return "small_logo";
    else if (size >= 180 && size < 245) return "medium_logo";
    else return "big_logo";
  }

  return (
    <div
      ref={logoRef}
      className={"standart_logo flex row " + logoCorrector(width)}
    >
      <img className="logo_img" alt="logo_img" src={logo_img}></img>
      <img className="logo_text" alt="logo_text" src={logo_text}></img>
    </div>
  );
}

export default AddLogo;

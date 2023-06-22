import React from "react";
import logo_img from "../../images/logo_img.svg";
import logo_text from "../../images/logo_text.svg";
import { tableSelector } from "../../store/selectors";
import { useSelector } from "react-redux";

function AddLogo({ refcomp }) {
  const { allTableSize, currentTableSize } = useSelector(tableSelector);
  const size = +allTableSize[currentTableSize].width;

  
  function logoCorrector(size) {
    if (size < 200) return "small_logo";
    else if (200 < size < 270) return "medium_logo";
    else return "big_logo";
  }

  return (
    <div
      ref={refcomp}
      className={"standart_logo " + logoCorrector(size)}
    >
      <img className="logo_img" alt="logo_img" src={logo_img}></img>
      <img className="logo_text" alt="logo_text" src={logo_text}></img>
    </div>
  );
}

export default AddLogo;

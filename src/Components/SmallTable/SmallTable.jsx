import React from "react";
import Adress from "../Table/Adress";
import LadderNum from "../Table/LadderNum";
import ShortEnterance from "./ShortEnterance";
import style from "./smalltable.module.css";
import logo_img from "../../images/logo_img.svg";
import logo_text from "../../images/logo_text.svg";

function SmallTable() {
  return (
    <div className={style.full_table}>
      <div className={style.container}>
        <div className={style.content_container}>
          <div className={style.adress}>
            <Adress haveAdress={true} />
          </div>
          <div className={style.bottom_container}>
            <div className={style.ladder_number}>
              <LadderNum haveLadderNum={true} width={210} />
            </div>
            <div className={style.rooms}>
              <ShortEnterance />
            </div>
          </div>
        </div>
        <div className={style.logo_container}>
          <img className={style.logo_img} alt="logo_img" src={logo_img}></img>
          <img
            className={style.logo_text}
            alt="logo_text"
            src={logo_text}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default SmallTable;

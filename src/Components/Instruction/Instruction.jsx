import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./instrutions.module.css";
import file from "./1exel.xlsx";

function Instruction({ height, width, orientering }) {
  const navigate = useNavigate();

  const LISTHEIGHT = 841;
  const LISTWIDTH = 594;
  const LEFTINDENT = 13;
  const TOPINDENT = 13;

  const currentHeight = height + 200 > width ? LISTHEIGHT : LISTWIDTH;
  const currentWidth = height + 200 > width ? LISTWIDTH : LISTHEIGHT;

  return (
    <div className={styles.container}>
      <button
        className={styles.print_hide}
        onClick={() => navigate("/", { replace: false })}
      >
        назад
      </button>
      <div className={styles.print_hide}>
        <a
         
          download="1!форма экселя для табличек.xlsx"
          href={file}
        >
          скачать форму экселя
        </a>
      </div>
      <div>
        размер таблички: {width}*{height}
      </div>
      <div className={styles.print_hide}>печать с размером листа А1</div>
      <div className={styles.print_hide}>
        в{" "}
        <b>
          {" "}
          {orientering === "horizontal"
            ? "Альбомном формате"
            : "Портретном формате"}
        </b>
      </div>
      <div className={styles.print_hide}>c полями по умолчанию</div>
      <div className={styles.print_hide}>с маштабом по умолчанию</div>
      <div className={styles.print_hide}>с отлюченными колонтикулами</div>
      <div className={styles.print_hide}>с включеным фоном</div>
      <div>отступы для Adobe Acrobat:</div>
      <div>сверху: {TOPINDENT}</div>
      <div>снизу: {currentHeight - TOPINDENT - height + 1}</div>
      <div>слева: {LEFTINDENT}</div>
      <div>справа: {currentWidth - LEFTINDENT - width + 1} </div>
    </div>
  );
}

export default Instruction;

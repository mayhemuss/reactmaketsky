import React from "react";
import { useNavigate } from "react-router-dom";

function Instruction({ height, width }) {
  const navigate = useNavigate();

  const listHeight = 841;
  const listWidth = 594;
  const leftIndent = 13;
  const topIndent = 13;

  const currentHeight = height + 200 > width ? listHeight : listWidth;
  const currentWidth = height + 200 > width ? listWidth : listHeight;

  return (
    <div
      className="instruction flex collumn"
      style={{ marginLeft: "20mm", width: "50mm" }}
    >
      <button onClick={() => navigate("/", { replace: false })}>назад</button>
      <h1>
        {width}*{height}
      </h1>
      <h2>сверху: {topIndent}</h2>
      <h2>снизу: {currentHeight - topIndent - height + 1}</h2>
      <h2>слева: {leftIndent}</h2>
      <h2>справа: {currentWidth - leftIndent - width + 1} </h2>
    </div>
  );
}

export default Instruction;

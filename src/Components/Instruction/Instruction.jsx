import React from "react";
import { useNavigate } from "react-router-dom";

function Instruction(props) {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "20mm" }}
    >
      <button onClick={() => navigate("/", { replace: false })}>назад</button>
      <h1>250*500</h1>
      <h2>13</h2>
      <h2>676</h2>
      <h2>13</h2>
      <h2>579</h2>
    </div>
  );
}

export default Instruction;

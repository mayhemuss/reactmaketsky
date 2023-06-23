import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        gap: "20px",
        margin: "50px",
      }}
    >
      <button onClick={() => navigate("/enteranceTable", { replace: false })}>
        Квартирные указатели
      </button>
      <button onClick={() => navigate("/adressTable", { replace: false })}>
        Адресный указатель
      </button>
    </div>
  );
}

export default LandingPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./landing.module.css";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => navigate("/enteranceTable", { replace: false })}
      >
        Квартирные указатели
      </button>
      <button onClick={() => navigate("/small_table", { replace: false })}>
        маленький квартирный указатель
      </button>
      <button onClick={() => navigate("/big_number", { replace: false })}>
        квартирный указатель с большой цифрой
      </button>
      <button onClick={() => navigate("/adressTable", { replace: false })}>
        Адресный указатель
      </button>
      <button onClick={() => navigate("/rooms_counter", { replace: false })}>
        Вывод квартир в рандоме
      </button>
    </div>
  );
}

export default LandingPage;

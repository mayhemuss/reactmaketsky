import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnteranceTablePage from "./Pages/EnteranceTablePage";
import LandingPage from "./Pages/LandingPage";
import SmallTablePage from "./Pages/SmallTablePage";
import AdressTablePage from "./Pages/AdressTablePage";
import BigNumberEnterancePage from "./Pages/BigNumberEnterancePage";
import RoomsCounterRandom from "./Pages/RoomsCounterRandom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="enteranceTable" element={<EnteranceTablePage />} />
          <Route path="adressTable" element={<AdressTablePage />} />
          <Route path="small_table" element={<SmallTablePage />} />
          <Route path="big_number" element={<BigNumberEnterancePage />} />
          <Route path="rooms_counter" element={<RoomsCounterRandom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

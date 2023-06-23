import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EnteranceTablePage from "./Pages/EnteranceTablePage";
import LandingPage from "./Pages/LandingPage";
import AdressTavlePage from "./Pages/AdressTavlePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="enteranceTable" element={<EnteranceTablePage />} />
          <Route path="adressTable" element={<AdressTavlePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

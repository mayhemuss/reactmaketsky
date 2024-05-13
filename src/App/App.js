import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import routes from "@src/App/routes";
import "./fonts.css";
import "./print_hide.css"
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map((e) => {
            return <Route path={e.path} key={e.path} element={e.element} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

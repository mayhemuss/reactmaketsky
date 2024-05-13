import React from "react";
// import EnteranceTablePage from "@src/Pages/EnteranceTablePage";
import LandingPage from "../Pages/LandingPage";
import SmallTablePage from "../Pages/SmallTablePage";
import AdressTablePage from "../Pages/AdressTablePage";
import BigNumberEnterancePage from "../Pages/BigNumberEnterancePage";
import RoomsCounterRandom from "../Pages/RoomsCounterRandom";
import BigFloorPage from "../Pages/BigFloorPage";
import EnteranceTablePage from "../Pages/EnteranceTablePage";

 const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "enteranceTable", element: <EnteranceTablePage /> },
  { path: "adressTable", element: <AdressTablePage /> },
  { path: "small_table", element: <SmallTablePage /> },
  { path: "big_number", element: <BigNumberEnterancePage /> },
  { path: "rooms_counter", element: <RoomsCounterRandom /> },
  { path: "BigFloorPage", element: <BigFloorPage /> },
];

  export default routes;
import React from "react";
// import EnteranceTablePage from "@src/Pages/EnteranceTablePage";
import LandingPage from "@src/Pages/LandingPage";
import SmallTablePage from "@src/Pages/SmallTablePage";
import AdressTablePage from "@src/Pages/AdressTablePage";
import BigNumberEnterancePage from "@src/Pages/BigNumberEnterancePage";
import RoomsCounterRandom from "@src/Pages/RoomsCounterRandom";
import BigFloorPage from "@src/Pages/BigFloorPage";
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
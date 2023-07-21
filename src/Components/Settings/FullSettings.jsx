import React from "react";

import EntaranceInput from "./EntaranceInput";
import TableHeadSettings from "./TableHeadSettings";
import ChoseEntarance from "./ChoseEntarance";
import SizeSettings from "./SizeSettings";
import TableSettings from "./TableSettings";
import LadderNameSettings from "./LadderNameSettings";

function FullSettings() {
  return (
    <div className="settings flex collumn">
      <TableSettings />
      <div>...................</div>
      <EntaranceInput />
      <div>...................</div>
      <TableHeadSettings />
      <div>...................</div>
      <LadderNameSettings/>
      <div>...................</div>
      <SizeSettings />
      <div>...................</div>
      <ChoseEntarance />
    </div>
  );
}

export default FullSettings;

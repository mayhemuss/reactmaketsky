import React from "react";

import EntaranceInput from "./EntaranceInput";
import TableHeadSettings from "./TableHeadSettings";
import ChoseEntarance from "./ChoseEntarance";
import SizeSettings from "./SizeSettings";
import TableSettings from "./TableSettings";
import LadderNameSettings from "./LadderNameSettings";

function FullSettings() {
  return (
    <div className="settings">
      <TableSettings />
      <EntaranceInput />
      <TableHeadSettings />
      <LadderNameSettings/>
      <SizeSettings />
      <ChoseEntarance />
    </div>
  );
}

export default FullSettings;

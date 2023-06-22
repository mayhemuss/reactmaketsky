import React from "react";

function MyCheckBox({ value, callBack, children }) {
  return (
    <div>
      <input type="checkbox" checked={value} onChange={callBack} />
      {children}
    </div>
  );
}

export default MyCheckBox;

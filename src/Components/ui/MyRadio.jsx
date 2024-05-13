import React from "react";

function MyRadio({ val, callBack, children, current }) {
  return (
    <div>
      <input
        type="radio"
        value={val}
        onChange={callBack}
        checked={val === current ? true : false}
      />
      {children}
    </div>
  );
}

export default MyRadio;

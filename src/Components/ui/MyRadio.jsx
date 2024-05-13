import React from "react";

function MyRadio({ val, callBack, children, current, name }) {
  return (
    <div style={{display: "flex", flexDirection:"row", gap:"7mm"}}>
      <input
      style={{width:"8mm"}}
        name={name}
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

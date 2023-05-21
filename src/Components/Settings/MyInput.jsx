import React from 'react';

function MyInput({callBack,place,val}) {
  return (
    <>
      <input placeholder={place} value={val} onChange={callBack}></input>
    </>
  );
}

export default MyInput;
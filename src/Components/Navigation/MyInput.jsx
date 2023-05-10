import React from 'react';

function MyInput({changeInput}) {
  return (
    <>
      <input placeholder='данные из exel' onChange={changeInput}></input>
    </>
  );
}

export default MyInput;
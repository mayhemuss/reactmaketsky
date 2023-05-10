import React from "react";

function MyButton({ ladderr, setСurrentLadder }) {
  
const callback=()=>{setСurrentLadder(ladderr)}

  return (
    //<div>{ladderr}</div>
    <button onClick={callback}>
      парадная №{ladderr}
    </button>
  );
}

export default MyButton;

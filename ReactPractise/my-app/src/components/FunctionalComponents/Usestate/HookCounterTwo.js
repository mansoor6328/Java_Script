import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      count - {count}
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button style={count%2===0 ? {color : 'red'} : null}
        onClick={() => {
          setCount(prevState => prevState + 1);
        }}
      >
        Increment
      </button>
      <button style={count%2!==0 ? {color : 'blue'} : null}
        onClick={() => {
          setCount(prevState => prevState - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default HookCounterTwo;

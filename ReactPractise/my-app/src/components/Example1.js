import React, { useState } from "react";

function Example1() {
  const [count, setCounter] = useState(0);

  const increment = (prevState) => {
    setCounter(count + 1)
    setCounter((prevState) => prevState + 5);
    
  };
  console.log(count);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Example1;

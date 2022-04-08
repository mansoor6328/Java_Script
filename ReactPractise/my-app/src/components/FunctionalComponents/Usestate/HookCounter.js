import React, { useEffect, useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = (`you clicked ${count} times `)
  })
  return (
    <div>
     <h1>Count - {count}</h1> 
      <button style={(count%2===0) ? {background : 'red'} : {background : 'blue'}}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default HookCounter;

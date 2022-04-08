import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>increment</button>
        <button onClick={()=>{count=(count - 1)
        console.log(count);}}>decrement</button>
    </div>
  )
}

export default Counter
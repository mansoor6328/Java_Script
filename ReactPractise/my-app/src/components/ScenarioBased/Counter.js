import React, { useState } from 'react'

function Counter() {
    const [ count, setCount ] = useState(0);
  return (
    <div>
         Count : {count}
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
        <button onClick={()=>setCount(count + 5)}>Increment by 5</button>
    </div>
  )
}

export default Counter
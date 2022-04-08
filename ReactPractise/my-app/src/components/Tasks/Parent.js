
import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [val, setVal] = useState(0)
  return (
    <div>
        <h1>{val}</h1>
        <Child setVal={setVal} />
    </div>
  )
}

export default Parent
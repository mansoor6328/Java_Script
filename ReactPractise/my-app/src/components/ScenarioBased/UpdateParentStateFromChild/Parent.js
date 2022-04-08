import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  const [ val, setVal ] = useState("I need to be updated from my child")
  return (
    <div>
      <div>Parent</div>
      <div>{val}</div>
      <Child setVal={setVal} />
    </div>

  )
}

export default Parent
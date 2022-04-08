import React from 'react'

function Child({setVal}) {
  return (
    <div>
      <button onClick={()=> setVal('Parent has been changed')}>Change Parent Value</button>
    </div>
  )
}

export default Child
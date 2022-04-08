import React from 'react'

function Child({setVal}) {
  return (
    <div>
        <button onClick={()=> setVal(x=>x+1)}>Change</button>
    </div>
  )
}

export default Child
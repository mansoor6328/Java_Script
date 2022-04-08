import React, { useState } from 'react'

function DisableButton() {
    const [val, setVal] = useState("");
  return (
    <div>
        <input type='text' value={val} onChange={(e)=> setVal(e.target.value)} />
        <button disabled={val.length<1}>Submit</button>
    </div>
  )
}

export default DisableButton
import React, { useState } from 'react'

function Input() {
    const [value, setValue] = useState('');

  return (
    <div>
        <input type='text' onChange={(e)=>setValue(e.target.value)} />
        <button disabled={value.length<1?true:false}>Submit</button>
    </div>
  )
}

export default Input
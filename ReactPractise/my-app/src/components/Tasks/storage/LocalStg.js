import React, { useState } from 'react'

function LocalStg() {
    const [ value, setVal ] = useState('');

    const onChange = event => {
        localStorage.setItem('username',event.target.value);
        setVal(event.target.value);
    }

  return (
    <div>
        <input value={value} type='text' onChange={onChange}/>
        <p>{value}</p>
    </div>
  )
}

export default LocalStg
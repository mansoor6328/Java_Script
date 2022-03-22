import React from 'react'

function FunctionClick() {
    const buttonClicked = () => {
        console.log('Button Clicked');
    }
  return (
    <div>
        <button type='button' onClick={buttonClicked}>Click</button>
    </div>
  )
}

export default FunctionClick
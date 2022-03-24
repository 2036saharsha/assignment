import React from 'react'

function Button({setNumber,Number}) {

  return (
    <div>
        <button onClick={() => setNumber(Number + 5)}>
            Add 5
        </button>
    </div>
  )
}

export default Button
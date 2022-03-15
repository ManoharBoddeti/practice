import React, { useState } from 'react'

function Count() {
    const [ count , setCount] = useState(0)

    const incrementCount = () => {
        setCount (count + 1)
    }

    const decrementCount = () => {
        setCount (count - 1)    
    }


  return (
      <>
    <button onClick={incrementCount}>+</button>
    <span>{count}</span>
    <button onClick={decrementCount}>-</button>
    </>
  )
}

export default Count
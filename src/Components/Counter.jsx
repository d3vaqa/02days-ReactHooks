import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = ()=>{
        setCount((prevCount) => prevCount + 1)
    }

    const handleDecrement = ()=>{
        setCount((prevCount) => prevCount - 1)
    }
      
        

  return (
    <div>
    <button className='button' onClick={handleIncrement}><h2>Increment <span className='count'></span></h2></button>
    <span>{count}</span>
    <button className='button' onClick={handleDecrement}><h2>Decrement <span className='count'></span></h2></button>
        
      
    </div>
  )
}

export default Counter

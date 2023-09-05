import React, { useEffect, useState } from 'react'

const BasicEffects = () => {
    const [count, setCount] =useState(0)


    const sayHello = () =>{
        console.log("Hello There")
    }

    sayHello()


    useEffect(()=>{
        console.log("Hello from Effects")
    }, [])



  return (
    <div>

    <button onClick={()=> setCount(count + 1)}>Increment</button>

    {count}

    <button onClick={()=> setCount(count - 1)}>Decrement</button>

    
    
    
    </div>
  )
}

export default BasicEffects
import React from 'react'
import { useState } from 'react'


const ConditionalRendering02 = () => {

const [isLoggedIn, setIsLoggedIn] = useState(false)

const handleLogin = ()=>{
    setIsLoggedIn(true)
}


const handleLogOut = () =>{
    setIsLoggedIn(false)
}



  return (
   
    <div>

    {isLoggedIn ? (
        <div>
            <p>Welcome User!</p>
            <button onClick={handleLogOut}> log out</button>
        </div>
    ): (
        <div>
            <p>Please log in to Continue</p>
            <button onClick={handleLogin}>login</button>
        </div>
    ) }
    
    
    
    </div>



  )
}

export default ConditionalRendering02
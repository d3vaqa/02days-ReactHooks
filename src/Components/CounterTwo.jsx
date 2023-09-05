import React from 'react'
import { useState } from 'react'

const CounterTwo = () => {


    const [user, setUser] = useState({name: '', email: ''})

    const handleNameChange = (e) => {
        setUser({...user, name: e.target.value})
    }


    const handleEmailChange = (e) => {
        setUser({...user, email: e.target.value})
    }


  return (
    <div>

    <input 
    type='text'
    placeholder='Name'
    value={user.name}
    onChange={handleNameChange}
    />

    <br />
    <br />



    <input 
    type='email'
    placeholder='email'
    value={user.email}
    onChange={handleEmailChange}
    />
    
    
    <p>Name: {user.name}</p>

    <p>Email: {user.email}</p>
    </div>
  )
}

export default CounterTwo
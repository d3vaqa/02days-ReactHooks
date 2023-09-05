import React from 'react'
import { useState } from 'react'

const ComplexState = () => {
    const [data, setData] = useState({
        user:{
            name: 'Hiro',
            age: 26,
        },
        todos: ['Task 1','Task 2']
    })




    const updateUserName = ()=> {
        setData({
            ...data, 
            user: {
                ...data.user,
                name: 
                'Aqa'
            },
        })

    }


    const addTodo = () =>{
        setData({
            ...data,
            todos: [...data.todos, 'New Task']
        })
    }



  return (
    <div>

    <p>User: {data.user.name}, Age {data.user.age}</p>
    <button onClick={updateUserName}>Update Name</button>
    <button onClick={addTodo}> Add Todo</button>

    <ul>
        {data.todos.map((todo, index) => (
            <li key={index}> {todo}</li>
            ))}

        
    </ul>
    
    
    
    
    </div>
  )
}

export default ComplexState
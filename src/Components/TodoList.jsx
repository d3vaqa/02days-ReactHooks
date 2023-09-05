import React from 'react'
import { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')


    const addTodo = () =>{
        if(todo.trim() !== ''){
            setTodos([...todos, todo])
            setTodo('')
        }
    }



    const removeTodo = () => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodo(newTodos)
    }




  return (
    <div>

        <input
            type='text'
            placeholder='Add todo'
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>


        <ul>
            {todos.map((todo, index)=> (
                <li key={index}>
                {todo}
                <button onClick={() =>  removeTodo(index)}> Remove</button>
                </li>
            ))}
        </ul>


    </div>
  )
}

export default TodoList
import React, {useState} from 'react'




const ConditionalRendering03 = () => {

    const [userInput, setUserInput] =useState('')
    const [displayMessage, setDisplayMessage] =useState(false)
    
    
    const handleChange = (e) =>{
        setUserInput(e.target.value)
    }
    


    const handleSubmit = () =>{
        if(userInput.trim() !== ''){
            setDisplayMessage(true)
        }
    }

  return (
    <div>

    <input
        type='text'
        placeholder='Enter Something'
        value={userInput}
        onChange={handleChange}
    />

    <button onClick={handleSubmit}>Submit</button>

    {displayMessage && <DisplayMessage userInput={userInput}/>}
    
    
    
    
    </div>
  )
}


const DisplayMessage = ({userInput}) =>{
    return <p>You Entered {userInput}</p>
}

export default ConditionalRendering03
import React, {useState} from 'react'

const ShowComponentAB = () => {

    const [showComponentA, setComponentA] =  useState(true)
    const [showComponentB, setComponentB] =  useState(false)

    const toggleComponent = ()=>{
        setComponentA(!showComponentA)
        setComponentB(!showComponentB)
    }



  return (
    <div>

    <button 
        onClick={toggleComponent}>
        toggle Component
    </button>


    {showComponentA && <ComponentA></ComponentA>}
    {showComponentB && <ComponentB></ComponentB>}
    
    
    
    </div>
  )
}



const ComponentA = () =>{
    return <p>this is Component <span style={{color: 'green', fontSize: '20px'}}>A</span></p>
}

const ComponentB = () =>{
    return <p>this is Component <span style={{color: 'red', fontSize: '20px'}}>B</span></p>
}


export default ShowComponentAB
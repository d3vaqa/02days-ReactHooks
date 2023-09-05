import React, { useState } from 'react';

function ConditionalRendering() {
    const [showComponent, setShowComponent] = useState(false)

    const toggleComponent = () =>{
        setShowComponent(!showComponent)
    }
  

 

  return (
    <div>

    <button 
        onClick={toggleComponent}>
        {showComponent ? 'Hide Component' : 'Show Component'}
    </button>

    {showComponent && <SomeComponent />}
    
    
    </div>
  );
}


function SomeComponent(){
    return <p>THis is a conditional Component</p>
}


export default ConditionalRendering;

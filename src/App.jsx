import './App.css'
import Counter from './Components/Counter'
import BasicEffects from './Components/BasicEffects'
import CounterTwo from './Components/CounterTwo'
import TodoList from './Components/TodoList'
import ComplexState from './Components/ComplexState'
import ConditionalRendering from './Components/ConditionalRendering'
import ConditionalRendering02 from './Components/ConditionalRendering02'
import ShowComponentAB from './Components/ShowComponentAB'
import ConditionalRendering03 from './Components/ConditionalRendering03'
import ConditionalRendering04 from './Components/ConditionalRendering04'
function App() {


  return (
    <>

    <div className='container'>
   <ComplexState></ComplexState>
   <hr></hr>
   <ConditionalRendering></ConditionalRendering>
   <hr></hr>

   <ConditionalRendering02> </ConditionalRendering02>
   <hr></hr>

   <ShowComponentAB />

   <hr></hr>
   <ConditionalRendering03 />

   <hr></hr>

   <ConditionalRendering04 />




    


    

    
    
    </div>



    </>
  )
}

export default App

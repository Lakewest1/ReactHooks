
import {useState} from 'react'

const PracticeState = () => {
  const [counter, SetCounter] = useState(0);
  
  const countNow = () => {
    SetCounter(prev => prev + 1)
    SetCounter(prev => prev + 1)
    SetCounter(prev => prev + 1)
    SetCounter(prev => prev + 1)
    

    
  }

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={countNow}>Counter</button>
      <hr />
    
      
    </div>
  )
}

export default PracticeState

import React from 'react'
import { useState } from 'react'

const StateCounter = () => {
  const [count,SetCount]=useState(0)

  const increaseCount = () => {
    SetCount(prev => prev + 1)
    SetCount(prev => prev + 1)
    SetCount(prev => prev + 1)
    SetCount(prev=>prev+1)
    
  }


  return (
    <div>
      <h1>Let Count:{count}</h1>
      <button onClick={increaseCount}>Count</button>
      
    </div>
  )
}

export default StateCounter

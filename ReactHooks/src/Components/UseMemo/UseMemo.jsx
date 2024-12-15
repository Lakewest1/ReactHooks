import React, { useState,useMemo} from 'react'

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  
  function cubeNum(num){
    console.log('Calculation done!');
    return Math.pow(num,3)
  }

  const result = useMemo(()=>cubeNum(number), [number]);
  return (
    <div>
      <h1>Cube Calculation (UseMemo in React)</h1>
      <input type="number" placeholder='Type your number here' value={number}  onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>Cube of the number:{result}</h1>
      <button onClick={() => { setCounter(counter + 1) }}>Counter++</button>
      <h2>Counter:{counter}</h2>
    </div>
  )
}

export default UseMemo

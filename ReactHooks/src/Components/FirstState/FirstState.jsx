import {useState} from 'react'

const FirstState = () => {
  const [color,setColor]=useState('Red')

  const changeColor = () => {
    setColor('Blue')
    
  
}


  return (
    <div>
      <h1>My favourite color is {color}</h1>
      <button onClick={changeColor}>Change</button>

      
    </div>
  )
}

export default FirstState

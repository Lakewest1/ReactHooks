import React, { useRef } from 'react'

const UseRefSec = () => {
  const inputElem = useRef();

  const btnClicked = () => {
    console.log(inputElem.current)

    inputElem.current.style.background = 'Yellow'
     inputElem.current.style.color='blue'
  }



  return (
    <div>
      <h2>UseREf second use</h2>
      <input type="text"   ref={inputElem}/>
      <button onClick={btnClicked}>Click here</button>
      <p>{inputElem.current}</p>
      
    </div>
  )
}

export default UseRefSec

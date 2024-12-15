import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
  const [count, SetCount] = useState(0)
  
  {/*Let add UseEffect to cunt automatic */ }
  
  useEffect(() => {
    setTimeout(() => {
      SetCount(count=>count+1)
    },1000)
  },[count])
  return (
    <div>
      <hr />
      <h1>I have render {count} times!</h1>
    </div>
  )
}

export default UseEffect

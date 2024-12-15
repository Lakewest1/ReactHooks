import React, { useEffect, useRef, useState } from 'react'

const useRefHooks = () => {
  const [value,setValue] = useState(0);
  const count = useRef(0)


  {/* To update the Render count when button is clicked */ }
  useEffect(() => {
    count.current = count.current + 1;
  })
  
  

    
  return (
    <div>
      <h2>UseRef first use</h2>
       <button  onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
      <h1>{value}</h1>
      <button onClick={() => {setValue(prev =>prev-1)}}>-1</button>
      
      <h1>Render Count:{count.current}</h1>
     

      
    </div>
  )
}

export default useRefHooks

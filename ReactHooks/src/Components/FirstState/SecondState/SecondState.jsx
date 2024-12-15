import React from 'react'
import { useState } from 'react'

const SecondState = () => {

  const [car, SetCar] = useState({
    
    brand: 'ferrari',
    model:'Rome',
    year: 2023,
    color:'Yellow'
  });
  const changeColor = () => {
    SetCar((prev) => {
      return { ...prev, brand: 'Lambogini', color: 'blue', model: 'AMG', year: '2024' }
      
    })
  }
  



  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
      
    </div>
  )
}

export default SecondState

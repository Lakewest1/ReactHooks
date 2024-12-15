
import { useState } from 'react'



const SecPractice = () => {

  const [food, SetFood] = useState({
    Best: 'Rice',
    delicious: 'delicious',
    food: 'food',
    Year:'2023'
  })

  const myFood = () => {
    SetFood((prev) => {
      return{...prev,Best:'Yam',delicious:'Palatable', food:'meal',Year:'2024'}
     })
  }





  return (
    <div>
      <h1>My best Food is {food.Best}</h1>
      <h1>It is the most {food.delicious} {food.food} in the {food.Year}</h1>
      <button onClick={myFood}>Change</button>
      
    </div>
  )
}

export default SecPractice

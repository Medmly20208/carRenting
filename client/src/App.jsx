import './App.css'

import { useState,useEffect } from 'react'

import instance from "./axios/instance"

function App() {
   const [cars,setCars] = useState([])

   useEffect(()=>{
    instance.get('/cars').then((cars)=>setCars(cars.data.data))
   },[])

  

  return (
    <div className="App">
       <p>Tes</p>
       {cars.map((car)=>{
       return (
        <>
          <h1>{car.name}</h1>
          <h2>{car.rating}</h2>
        </>
       )

       })}
    </div>
  )
}

export default App

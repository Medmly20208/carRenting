import React,{useState,useEffect} from 'react'

//components
import CarItem from './CarItem'

//axios
import instance from '../axios/instance'

const Cars = () => {
    
    const [cars,setCars] = useState([])
    const [isLoading,setIsLoading] = useState(false)
  
    useEffect(()=>{
        setIsLoading(true)
        instance.get('/cars').then((cars)=>{
            setCars(cars.data.data)
            setIsLoading(false)})
       },[])
  
    
    return (
    <section className='ml-[10px]'>
        <h1>our cars</h1>
        <div className='flex flex-row flex-wrap justify-center items-center gap-[10px]'>
        {!isLoading &&  cars.map((car)=>{
                return <CarItem key={car._id} car={car}></CarItem>
            })}
           
            
        </div>
    </section>
  )
}

export default Cars
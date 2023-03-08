import React from 'react'

//components
import CarItem from './CarItem'
import { getCars } from '../api/getCalls'

//react query
import { useQuery } from '@tanstack/react-query'





const Cars = () => {
    
    
    
    const { isLoading, isError, data:cars, error,initialData } = useQuery({ queryKey: ['todos'], queryFn: getCars})
   
  
    
       
  
    
    return (
    <section className='ml-[10px]'>
       <h1>our cars</h1>
       {
        <div className='flex flex-row flex-wrap justify-center items-center gap-[10px]'>
        {isLoading && <p>loading</p>}
        {!isLoading &&  cars?.data.data.map((car)=>{
                return <CarItem key={car._id} car={car}></CarItem>
            })}
        
        {isError && <p>{error.message}</p>}
        </div>
       } 
        
    </section>
  )
}

export default Cars
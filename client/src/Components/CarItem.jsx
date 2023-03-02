import React ,{useEffect, useState,useContext}from 'react'

//Assets
import stars from "../assets/svgs/stars.svg"

//components 
import Modal from './Modal'

//axios
import instance from "../axios/instance"


//authcontext
import {AuthContext} from "../Context/AuthContext"

import {useNavigate} from "react-router-dom"






const CarItem = (props) => {
 
const [isModalDisplayed,setIsModalDisplayed] = useState(false)
const authcontext = useContext(AuthContext)
const navigate = useNavigate();

const displayModal = ()=>{
  if(authcontext.user===null){
   navigate("/login")
  }
    setIsModalDisplayed(true)
}
    
  


  return (
    <div className='pb-[20px] flex flex-col justify-end items-center min-w-[312px] h-[350px] border border-primary rounded-[12px]'>
        <div className='min-w-[264px]'>
        <div>
            <img src={props.car.imageLink} alt={props.car.name} className='w-full h-[194px] rounded-[6px]'/>
        </div>
        <div className='w-full text'>
          <h2 className='text-[20px]'>{props.car.name}</h2>
          <div className='flex items-center gap-[5px]'>
          <h2 className='text-[gray]'>{props.car.rating}</h2>
          <img src={stars} alt="stars rating "/>
          </div>
          
          <h2>{props.car.pricePerDay}$/day</h2>
          <div className='w-full flex justify-end'>
          <button className='text-white w-[110px] h-[25px] rounded-[12px] bg-primary' onClick={displayModal}>
            Rent 
           </button>
           </div>
        </div>
        </div>
        {isModalDisplayed && <Modal onClose={()=>setIsModalDisplayed(false)}><InputGroup car={props.car}/></Modal>}
        </div>
    
  )
}

export default CarItem;



const InputGroup = (props)=>{

  let formatedStartDate ;
  let formatedEndDate;
  let currentDate = new Date();
  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")
  const [userName,setUserName] = useState('')
  const [messageResponse,setMessageResponse] = useState('')
  const [messageColor,setMessageColor] = useState("")
  const [totalPrice,setTotalPrice] = useState(0)
  const messageStyle ="text-["+messageColor+"]";
  const authcontext = useContext(AuthContext)


 

  const rentCar = (event)=>{
    event.preventDefault()
  
      setMessageResponse("")
      
      instance.patch(`/cars/${props.car._id}/rent`,{
       username: userName,
       startDate,
       endDate
      }).then((result)=>{
          setMessageResponse(result.data.message)
          setMessageColor(result.data.status==="success"?"green":"red")
      }).catch((err)=>{
          setMessageResponse(err.message)
          setMessageColor("red")
      })
  }


const handleStartDateChange = (event)=>{
  setStartDate(event.target.value)
}

const handleEndDateChange = (event)=>{
  setEndDate(event.target.value)
}

const handleUserNameChange = (event)=>{
  setUserName(event.target.value)
}
  
useEffect(()=>{
  if(startDate!="" && endDate!="")
  {
      formatedStartDate = new Date(startDate);
      formatedEndDate = new Date(endDate);
      setTotalPrice((formatedEndDate-formatedStartDate)/(24*60*60*1000)*props.car.pricePerDay)
  }
},[startDate,endDate])

  currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
  
  return (
      <div className='p-[10px] flex justify-center items-center w-full h-full'>
          <form onSubmit={rentCar} className='flex flex-col justify-center items-start gap-[10px]'>
              <div>
              <label htmlFor='startDate'>Start date :</label><br></br>
              <input className='border border-primary' min={"2023-02-13"} type="date" id="startDate" onChange={handleStartDateChange}/><br></br>
              </div>
              <div>
              <label htmlFor='endDate'>End date</label><br></br>
              <input className='border border-primary' min={startDate} type="date" id="endDate" onChange={handleEndDateChange}></input><br></br>
              </div>
              <div>
              <label htmlFor='userName'>User Name</label><br></br>
              <input className='border border-primary' type="text" id="userName" onChange={handleUserNameChange}/><br></br>
              </div>
             
              <p>Total Price :{totalPrice}$</p>
              <button className='text-white w-[110px] h-[25px] rounded-[12px] bg-primary'>Rent</button>
              <p className={messageStyle}>
              {messageResponse}
              </p>
          </form>
          
          
      </div>
  )
   
}
import React,{useState,useEffect} from 'react'

import useLogIn from '../hooks/useLogin'
import useAuthContext from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   
    const { error, isLoading, login } = useLogIn()
    const navigate = useNavigate()
    const authContext = useAuthContext()
    const inputStyle = 'p-[8px] border border-primary w-full'
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const changePasswordHandler = (event)=>{
        setPassword(event.target.value)
    }
    const changeEmailHandler = (event)=>{
        setEmail(event.target.value)
    }

    
   
   const loginHandler = async (event)=>{
       
       event.preventDefault()
       login(email,password)
    }

   useEffect(()=>{
    if(authContext.user!=null){
        navigate("/")
      }
   },[authContext])
   
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center '>
    <form onSubmit={loginHandler} className='p-[20px] border border-primary min-h-[250px]  w-[90vw] flex gap-[10px] flex-col justify-center sm:w-[400px]'>
        <div className='w-full text-center'>
        <h1>Login</h1>
        </div>
        
        <div>
            <label htmlFor='email'>Email</label><br></br>
            <input onChange={changeEmailHandler} type="email" id="email" className={inputStyle}></input>
        </div>
        <div>
            <label htmlFor='password'>Password</label><br></br>
            <input onChange={changePasswordHandler} type="password" id="password" className={inputStyle}></input>
        </div>
        <button disabled={isLoading} className='border border-primary bg-primary text-[white] py-[5px]'>{isLoading?"loading":"login"}</button>                
        {error!==null && <div className='text-[red] bg-red-100 p-[4px] border border-red'>
            {error?.response.data.message}
        </div>}
    </form>
    </div>
  )
}

export default Login
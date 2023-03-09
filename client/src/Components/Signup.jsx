import React,{useState,useEffect} from 'react'
import useSignUp from '../hooks/useSignup'
import { useNavigate,Link } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'


const Signup = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const {signup,error,isLoading} = useSignUp()
    const navigate = useNavigate()
    const authContext = useAuthContext()

    const changePasswordHandler = (event)=>{
        setPassword(event.target.value)
    }
    const changeEmailHandler = (event)=>{
        setEmail(event.target.value)
    }

    const signUpHandler = async(event)=>{
        event.preventDefault()
        await signup(email,password)
    }
    
    useEffect(()=>{
        if(authContext.user!=null){
            navigate("/")
        }
    },[authContext])
    
  
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center '>
    <form onSubmit={signUpHandler}className='p-[20px] border border-primary min-h-[250px]  w-[90vw] flex gap-[10px] flex-col justify-center sm:w-[400px]'>
        <div className='w-full text-center'>
            <h1>Sign up</h1>
        </div>
       
        <div>
            <label htmlFor='email'>Email</label><br></br>
            <input onChange={changeEmailHandler} type="email" id="email" className='input-primary'></input>
        </div>
        <div>
            <label htmlFor='password'>Password</label><br></br>
            <input onChange={changePasswordHandler} type="password" id="password" className='input-primary'></input>
        </div>
        <button disabled={isLoading} type="submit" className='border border-primary bg-primary text-[white] py-[5px]'> {isLoading ? "loading":"Sign Up"}</button>
        {error!==null && <div className='text-[red] bg-red-100 p-[4px] border border-red'>
            {error?.response.data.message}
        </div>}
        <div className='flex gap-[5px] justify-center items-center'><p>you already have an account</p><Link to="/login" className='text-primary'>Log in</Link>  </div>

    </form>
    
    </div>
  )
}

export default Signup
import React from 'react'

import { Link } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'
import useLogout from '../hooks/useLogout'

const Header = () => {
  
  const {user} = useAuthContext()
  const {LogOut} = useLogout()
  console.log(user)
   
  const LogoutHandler = ()=>{
    LogOut()
  }

   
   
  return (
    <header className='bg-basic text-center text-[white] h-[50px] flex flex-row justify-evenly items-center '>
        <h1 className='font-bold'>CRenting Agency</h1>
        <div className='flex flex-row gap-[10px]'>
          {user!==null && <button onClick={LogoutHandler}>Logout </button>}
          {user=== null && <>
            <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
         
          </>}
           {user?.email}
        </div>
    </header>
  )
}

export default Header
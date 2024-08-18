import React, { useState } from 'react'
import Header from '../Header/Header'
 const Login = () => {
   const [IsSignIn,setIsSignIn]=useState(true);
 const  toggleSignIn =()=>{
   setIsSignIn(!IsSignIn);
 }
  return (
    <div  className="">
      <Header/>
    <div className="absolute" >
      <img className='bg-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_medium.jpg'/>
      </div>
       <form action="" className="absolute w-3/12 my-40 mx-auto right-0 left-0 bg-black flex flex-col justify-center h-[360px] gap-4 px-12 rounded-lg bg-opacity-80">
        <h1 className='text-white text-3xl mb-2'>{IsSignIn?"Sign In":"Sign Up"}</h1>
        {IsSignIn && <input 
        type="text" className="rounded-sm bg-gray-700 p-2" 
        placeholder='Full Name' />
        }
        <input 
        type="text" className="rounded-sm bg-gray-700 p-2" 
        placeholder='Email address' />

        <input 
        type="password" className="rounded-sm bg-gray-700 p-2" 
        placeholder='Password' />
        
        <button className="mt-4 bg-red-600 text-white rounded-sm h-10">{IsSignIn?"Sign In":"Sign Up"}</button>
        <p onClick={toggleSignIn} className='text-white cursor-pointer'>{IsSignIn?"Sign Up":"New to Netflix?Sign In"}</p>
      </form>
      </div>
  )
}
export default Login
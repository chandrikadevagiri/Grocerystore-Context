import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const SellerLogin = () => {
    const {isSeller,setIsSeller,navigate}=useAppContext();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    useEffect(()=>{
        if(isSeller){
            navigate('/seller')
        }
    },[isSeller])
    const onSubmitHandler= async (event)=>{
        event.preventDefault();
        setIsSeller(true);
    }
  return !isSeller &&(
    <div className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center
    text-sm text-gray-600 bg-black/50'>
        <form onSubmit={onSubmitHandler}   className="flex flex-col  gap-4 m-auto mt-6 items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-primary">User Login</span> 
            </p>
          
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter Email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter Password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="password" required />
            </div>
            
               
            <button className="bg-primary hover:bg-primary transition-all text-white w-full py-2 rounded-md cursor-pointer">
               Login
            </button>

        </form>
    </div>
  )
}

export default SellerLogin
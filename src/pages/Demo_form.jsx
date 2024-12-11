import React from 'react'
import { useState } from 'react';

const Demo_form = () => {

    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')

    function Submit() {
        alert(username + ' '+ email +' '+ password);
    }
    function password1(){
        setPassword(!password);
    }
    function email1(){
        setEmail(!email);
    }

    return (
        <div className='h-lvh flex items-center justify-center bg-slate-500'>
            <div className=' grid justify-center items-center bg-purple-300 px-4 py-4'>
                <div>
                    <h1 className='flex flex-col text-pink-800 items-center text-2xl'>Sign Up</h1>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-2 mx-3 my-5'>
                        <div>
                         <h6>Username:</h6>
                        </div>
                        <div className=''>
                         <input onChange={(e)=>{
                            setUsername(e.target.value)
                         }}
                         type='text' placeholder='Enter Username' />
                        </div>
                        
                    </div>
                </div>
                <div className='flex flex-row gap-2 mx-3 my-5'>
                    <div>
                        <h1>Email:</h1>
                    </div>
                    <div className=''>
                         <input onChange={(e)=>{
                            setEmail(e.target.value)
                         }}
                         type='email' placeholder='Enter your email' />
                    </div>
                </div>
                <div className='flex flex-row gap-2 mx-3 my-5'>
                    <div className='text-l'>
                        <h1>Password:</h1>
                    </div>
                    <div>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        className="border-none outline-none"type='password' placeholder='Enter Password'/>
                    </div>
                </div>
                <div className='flex gap-0 flex-col'>
                 <button onClick={()=>Submit()} className='border-none w-24 h-10 capitalize rounded-xl bg-red-600 items-center m-8' type='submit'>
                    Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Demo_form

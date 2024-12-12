import React from 'react'
import { useState } from 'react'

const Pform = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    function Submit(){
        alert(name+' '+email+' '+password);
    }

    return (
        <div className=' flex p-8 justify-center items-center '>
            <div className='bg-white px-10 py-5 h-full flex-row rounded-xl border-1 border-black shadow-2xl'>
                <div className='flex flex-row p-4'>
                    <h1 className='text-red-500 text-2xl flex flex-col font-bold'>Create an Account</h1>
                </div>
                <div className='flex flex-col gap-1 px-2 py-2  items-center'>
                    <div className='mx-3 my-3'>
                        <div >
                            <h1>Name</h1>
                        </div>
                        <div>
                            <input onChange={(e)=>{
                                setName(e.target.value);
                            }}
                            type='text' placeholder='Your Name' className='rounded-md bg-purple-300 px-2' />
                        </div>
                    </div>
                    <div className='gap-3 mx-3 my-3'>
                        <div>
                            <h1>Email</h1>
                        </div>
                        <div>
                            <input onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                            type='email' placeholder='Your email @gmail.com' className='rounded-md bg-purple-300 px-2' />
                        </div>
                    </div>
                    <div className='gap-4 mx-3 my-3'>
                        <div>
                            <h1>Password</h1>
                        </div>

                        <div>
                            <input onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            type='password' placeholder='Your Password' className='rounded-md bg-purple-300 px-2' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-0 m-6 w-fit h-fit justify-center'>
                        <button onClick={()=>Submit()} className=' text-white bg-red-600 rounded-md px-3 py-1'>Sign up</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pform

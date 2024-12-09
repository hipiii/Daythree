import React from 'react'
import { useState } from 'react'

const Home = () => {
  // const [abc,setAbc] = useState(0);
  // function Add(){
  //   setAbc(abc+1);
  // }
  // function Subtract(){
  //   const result =(abc-1);
  //   if(result<0){
  //     alert("Sorry it is less than zero!!");
  //   }else{
  //     setAbc(abc-1);
  //   }
  // }
    const[abc,setAbc] = useState(false);
    function checkbox(){
    setAbc(!abc);
    }


  
  return (
    <div className='flex gap-8 p-4'>
        
         <div className={`fixed ${abc?"translate-y-44":"-translate-y-96"} transition-all duration-1000 delay-75 ease-in-out top-0 left-0 bg-purple-400 w-fit h-fit p-9 right-0 mx-auto `}>
          Durga
        </div>
        
          <button onClick={()=>checkbox()} className={`${abc ? "bg-slate-500":"bg-purple-500"}`}>Clickme</button>
        
          {/* <button onClick={()=>Add()} className='bg-purple-600 h-12 w-16 rounded-md'>Add</button>   
          <button onClick={()=>Subtract()} className='bg-pink-500 h-12 w-16 rounded-md'>Subtract</button>   */}
     </div>
  )
}

export default Home

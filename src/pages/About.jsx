import React from 'react'
import { useState } from 'react'

const About = () => {
  const [topBox, setTopBox] = useState(false);
  function topcheckBox(){
    setTopBox(!topBox);
  }
  const [bottomBox, setBottomBox] = useState(false);
  function bottomcheckBox(){
    setBottomBox(!bottomBox);
  }
  const [leftBox, setLeftBox] = useState(false);
  function leftcheckBox(){
    setLeftBox(!leftBox);
  }
  const [rightBox, setRightBox] = useState(false);
  function rightcheckBox(){
    setRightBox(!rightBox);
  }
  
  return (
    <div className="flex gap-8 p-4 ">
      <div className=''>
      <div className={`fixed ${topBox ? 'translate-y-0' : '-translate-y-96'} buttom-0 w-fit h-fit p-10 right-1/2 mx-auto bg-purple-500 transition-all ease-in-out delay-75 duration-1000`}>
        Top Box
        </div>
        <button onClick={() => topcheckBox()} className={`${topBox ? 'bg-gray-500' : 'bg-purple-500'}`}>top</button>
      </div>

      <div className=''>
      <div className={`fixed ${bottomBox ? 'translate-y-0' : 'translate-y-96'} top-1/2 w-fit h-fit p-10 right-1/2 mx-auto bg-pink-500 transition-all ease-in-out delay-75 duration-1000`}>
        Bottom Box
        </div>
        <button onClick={() => bottomcheckBox()} className={`${bottomBox ? 'bg-gray-500' : 'bg-purple-500'}`}>bottom</button>
      </div>
      
      <div className=''>
      <div className={`fixed ${leftBox ? 'translate-x-0' : '-translate-x-96'} right-x-0 w-fit h-fit top-1/2 p-10 mx-auto bg-yellow-500 transition-all ease-in-out delay-75 duration-1000`}>
        Left Box
        </div>
        <button onClick={() => leftcheckBox()} className={`${leftBox ? 'bg-gray-500' : 'bg-purple-500'}`}>left</button>
      </div>

      <div className=''>
      <div className={`fixed ${rightBox ? 'translate-x-0' : 'translate-x-96'} right-0 left-x-0 w-fit h-fit top-1/2 p-10 mx-auto bg-slate-500 transition-all ease-in-out delay-75 duration-1000`}>
        Right Box
        </div>
        <button onClick={() => rightcheckBox()} className={`${rightBox? 'bg-gray-500' : 'bg-purple-500'}`}>right</button>
      </div>
      

    </div>
  )
}

export default About

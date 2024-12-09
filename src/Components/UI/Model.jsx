import React from 'react'

const model = ({Loginshow, setLoginshow, Children}) => {
  return (
    <div className='relative'>
      <div className='w-fit border h-fit p-10 bg-purple-400 fixed z-50 left-0 right-0 mx-auto'>
        {Children}
      </div>
      <div onClick={()=>{
        setLoginshow(false);
      }}>

      </div>
    </div>
  )
}

export default model

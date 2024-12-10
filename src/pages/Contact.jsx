import React from 'react'
import { useState } from 'react'

const Contact = () => {

  const [click, setClick] = useState(false);
  function checkbox() {
    setClick(!click);
  }

  return (
    <div>
      <div className=''>

        <div className='p-12 w-fit'>
          <button onClick={() => checkbox()} className={`${click ? "w-96" : "w-44"} bg-purple-500 transition-all ease-in-out delay-75 duration-1000 w-32`}>here</button>
        </div>

      </div>
    </div>

  )
}

export default Contact

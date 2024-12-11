import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [Loginshow, setLoginshow] = useState(false)
    return (
        <div className='bg-zinc-600 flex text-2xl border-b-2 px-4 py-4 items-center  justify-between '>
          
            <div className='bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" clip-path="url(#siSettingsCuteLine0)"><path d="M23 12c0-1.66-1.34-3-3-3h-.76l.54-.54a3 3 0 0 0 0-4.24a3 3 0 0 0-4.24 0l-.54.54V4c0-1.66-1.34-3-3-3S9 2.34 9 4v.76l-.54-.54a3 3 0 0 0-4.24 0a3 3 0 0 0 0 4.24l.54.54H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h.76l-.54.54a3 3 0 0 0 0 4.24a3 3 0 0 0 4.24 0l.54-.54V20c0 1.66 1.34 3 3 3s3-1.34 3-3v-.76l.54.54a3 3 0 0 0 4.24 0a3 3 0 0 0 0-4.24l-.54-.54H20c1.66 0 3-1.34 3-3Z" /><path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z" /></g><defs><clipPath id="siSettingsCuteLine0"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></g></svg>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/demo">Demo_form</Link>
            <div className='flex gap-20'>
                <button onClick={() => {
                    setLoginshow(true)
                }}>Login</button>
                <button>Registration</button>
            </div>
        </div>
        
        
    )
}

export default Header

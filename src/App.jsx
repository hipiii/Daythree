import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Navigation/Header'
import { Form, useLocation } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Demo from './pages/Demo_form'
import Pform from './pages/Pform'




function App() {
  const [count, setCount] = useState(0)

  const location = useLocation()
  console.log(location,"location");
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/demo' element={<Demo/>}/>
        <Route path='pform' element={<Pform/>}/>
        
      </Routes>
    </>
  )
}

export default App

import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from "../Components/Navbar"


const Allrouters = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Navbar' element={<Navbar />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Allrouters
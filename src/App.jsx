import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App

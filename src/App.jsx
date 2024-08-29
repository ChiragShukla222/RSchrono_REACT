import React from 'react'
import Layout from './Layout'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path ="/home" element={<Home/>}/>
      
   </Routes>
   </BrowserRouter>

   </>
  )
}

export default App

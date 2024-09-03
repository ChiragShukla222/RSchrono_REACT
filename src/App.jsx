import React from 'react'
import Layout from './Layout'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Watches from './pages/Watches'
import Custom from './pages/Custom'
import BestSelling from './pages/BestSelling'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/> 
      <Route path="/home" element={<Home/>}/>
       <Route path="watches" element={<Watches/>} /> 
      <Route path ="bestselling" element={<BestSelling/>}/>
      <Route path ="custom" element={<Custom/>}/> 
      
      
      </Route>
     
      
   </Routes>
   </BrowserRouter>

   </>
  )
}

export default App

import TopHeader from "./components/TopHeader";
import React from 'react'
import Home from "./pages/Home";
import Watches from './pages/Watches'
import Custom from './pages/Custom'
import BestSelling from './pages/BestSelling'
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
            
    <TopHeader/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout

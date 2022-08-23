import React from 'react'
import SideNavbar from '../../Components/SideNavbarComponent/SideNavbar'
import Topbar from '../../Components/Topbar/Topbar'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{display: "flex" , boxSizing : "border-box"}}>
        <SideNavbar />
        <div style={{width : "100%" }}>
            <Topbar />
            <Outlet />
        </div>
    </div>
    
  )
}

export default HomePage
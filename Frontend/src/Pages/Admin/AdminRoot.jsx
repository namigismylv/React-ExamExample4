import React from 'react'
import Header from '../../Layouts/Admin/Header/Header'
import Footer from '../../Layouts/Admin/Footer/Footer'
import { Outlet  } from "react-router-dom";
const AdminRoot = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminRoot
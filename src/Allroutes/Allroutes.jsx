import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './../pages/SignIn/index'
import Dashboard from './../pages/Dashborad/index'
import PageNotFound from './../Components/PageNotFound'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/' element={<Navigate to='/signin' />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </div>
  )
}

export default Allroutes

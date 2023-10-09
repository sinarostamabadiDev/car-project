import React, { useEffect } from 'react'
import "./index.css"
import "./assets/fonts/yekanFont/yekan.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import ResultSimplePageSearch from './pages/ResultSimpleSearchPage/ResultSimplePageSearch'
import CarsModel from './pages/Cars/CarsModel'
import Cookies from 'js-cookie'
import ResultAdvanceSearchPage from './pages/ResultAdvanceSearchPage/ResultAdvanceSearchPage'

export default function App() {
  let navigate=useNavigate();



  useEffect(() => {
    if(!Cookies.get("jwt")) {
      navigate("/login");
    }
  } , [location.pathname])


  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/simple-search/:slug' element={<ResultSimplePageSearch />} />
      <Route path='/cars/:slug' element={<CarsModel />} />
      <Route path='advance-search' element={<ResultAdvanceSearchPage />} />
    </Routes>
  )
}

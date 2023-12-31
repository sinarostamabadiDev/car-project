import React, { useEffect, useLayoutEffect } from 'react'
import "./index.css"
import "./assets/fonts/yekanFont/yekan.css"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import ResultSimplePageSearch from './pages/ResultSimpleSearchPage/ResultSimplePageSearch'
import CarsModel from './pages/Cars/CarsModel'
import Cookies from 'js-cookie'
import ResultAdvanceSearchPage from './pages/ResultAdvanceSearchPage/ResultAdvanceSearchPage'
import About from './pages/About/About'
import Concat from './pages/Concat/Concat'

export default function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
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
      <Route path='/about' element={<About />} />
      <Route path='/concat' element={<Concat />} />
    </Routes>
  )
}

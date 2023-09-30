import React from 'react'
import "../assets/fonts/yekanFont/yekan.css"
import Header from '../components/Header/Header'

export default function Layout({children}) {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

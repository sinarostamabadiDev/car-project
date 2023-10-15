import React, { useState } from 'react'
import "../assets/fonts/yekanFont/yekan.css"
import Header from '../components/Header/Header'
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import Footer from '../components/Footer/Footer';

export default function Layout({children}) {
  const [isOpen , setIsOpen]=useState(false);

  return (
    <div
    onClick={() => {
      if(isOpen) {
        setIsOpen(false)
      }
    }}
     className='w-full h-auto'>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
        <Footer />
    </div>
  )
}

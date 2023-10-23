import React, { useState } from 'react'
import "../assets/fonts/yekanFont/yekan.css"
import Header from '../components/Header/Header'
import { useQuery } from 'react-query';
import Cookies from 'js-cookie';
import Footer from '../components/Footer/Footer';
import MobileFooter from '../components/MobileFooter/MobileFooter';

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
        <div className='mb-20 sm:mb-0'>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          {children}
          <Footer />
        </div>
        <MobileFooter />
    </div>
  )
}

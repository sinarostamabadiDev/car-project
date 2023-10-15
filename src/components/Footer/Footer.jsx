import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoTelegram } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"

export default function Footer() {
  return (
    <>
        <div className='w-full bg-main_gray p-4 lg:p-8 flex flex-col lg:flex-row-reverse text-center text-white font-yekan gap-4'>
        <div className='w-full border-b border-gray-200 lg:border-l-2 lg:border-b-0 pb-4 lg:pl-20'>
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
            متن ساختگی
        </div>
        <div className='w-full flex lg:flex-col justify-between text-sm border-b border-gray-200 lg:border-l-2 lg:border-b-0 pb-4'>
            <div>ارتباط با مدیریت</div>
            <div>فرصت های شغلی</div>
            <div>قوانین خرید خودرو</div>
        </div>
        <div className='w-full flex lg:flex-col justify-center gap-10'>
            <div>ارتباط با ما</div>
            <div>تماس با ما</div>
        </div>
    </div>
    <div className='w-full bg-main_gray flex gap-2'>
        <a className='p-2 blocks text-black'><BiLogoTelegram className='w-7 h-7 text-white' /></a>
        <a className='p-2 blocks text-black'><BsInstagram className='w-7 h-7 text-white' /></a>
        <a className='p-2 blocks text-black'><AiFillLinkedin className='w-7 h-7 text-white' /></a>
    </div>
    </>
  )
}

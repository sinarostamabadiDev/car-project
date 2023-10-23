import React from 'react'
import { AiOutlineHome , AiOutlineShopping , AiOutlineUser } from "react-icons/ai"
import { BsShop } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { PiUsersThreeBold } from "react-icons/pi"
import { AiOutlinePhone } from "react-icons/ai"
import { PiUsersThreeLight } from "react-icons/pi"
import { FiUsers } from "react-icons/fi"
import { HomeIcon , ShoppingBagIcon , UserGroupIcon , PhoneIcon } from '@heroicons/react/24/outline'

export default function MobileFooter() {
  return (
    <div style={{boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}}
    className='w-full bg-white fixed bottom-0 flex justify-between items-center px-6 py-3 text-center sm:hidden z-[1000]'>
        <div className='text-sm text-gray-900 text-center font-yekan flex flex-col justify-center items-center'>
            <Link to={"/"} className='flex flex-col justify-center items-center'>
                <HomeIcon className='w-6 h-6' />
                <p>خانه</p>
            </Link>
        </div>
        <div className='text-sm text-gray-900 text-center font-yekan flex flex-col justify-center items-center'>
            <ShoppingBagIcon className='w-6 h-6' />
            <p>سفارشات</p>
        </div>
        <div className='text-sm text-gray-900 text-center font-yekan flex flex-col justify-center items-center'>
            <Link to={"/about"} className='flex flex-col justify-center items-center'>
                <UserGroupIcon className='w-6 h-6' />
                <p>درباره ی ما</p>
            </Link>
        </div>
        <div className='text-sm text-gray-900 text-center font-yekan flex flex-col justify-center items-center'>
            <Link to={"/concat"} className='flex flex-col justify-center items-center'>
                <PhoneIcon className='w-6 h-6' />
                <p>تماس با ما</p>
            </Link>
        </div>
    </div>
  )
}

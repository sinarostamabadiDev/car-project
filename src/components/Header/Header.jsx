import React, { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useQuery, useQueryClient } from 'react-query'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Cookies from 'js-cookie'
import { client } from '../../app/axiosConfig'
import { Link, useNavigate } from 'react-router-dom'

export default function Header({isOpen , setIsOpen}) {

  let {isLoading , isError , error  , data}=useQuery({
    queryKey:["userInformation"],
    queryFn:async () => {
        let response=await client.get("api/core/whoami/" , {
            headers:{
                Authorization:Boolean(Cookies.get("jwt")) && `Bearer ${Cookies.get("jwt")}`
            }
        });
        return response.data;
    },
    enabled:Boolean(Cookies.get("jwt"))
})

let navigate=useNavigate();

console.log(data);

  let queryClient=useQueryClient();

  let userInformation=queryClient.getQueryData(["userInformation"]);


  let userLogo=<>
    <span class="sr-only">Open user menu</span>
    <UserCircleIcon className='w-9 h-9 text-white' />
  </>


let loading=<AiOutlineLoading3Quarters className='w-7 h-7 text-white' />

  
  return (
<nav class="bg-main_gray border-gray-200 dark:bg-gray-900 sticky top-0 z-50 ">
  <div class="max-w-screen-xl flex flex-row-reverse flex-wrap items-center justify-between mx-auto p-4">
  <Link to={"/"} class="flex items-center">
      {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Logo" /> */}
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">logo</span>
  </Link>
  <div className='flex flex-row-reverse items-center'>
    <div class="flex items-center md:order-2">
        <button
        onClick={() => setIsOpen(!isOpen)}
        type="button" class="flex mr-3 text-s rounded-full md:mr-0 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          {userInformation ? userLogo : loading}
        </button>
        <div class={`z-50 my-4 ${isOpen || "hidden"} absolute top-[40px] left-8 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`}>
          <div class="px-4 py-3">
            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{userInformation && userInformation.phone_number}</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">complete information</a>
            </li>
            <li>
              <a onClick={() => {
                Cookies.remove("jwt");
                navigate("/");
              }}
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
    </div>
    <div className='ml-16 hidden lg:block'>
      <ul className='flex flex-row gap-12 font-yekan text-lg text-gray-200'>
        <li>
          <Link to={"/about"}>
              درباره ی ما
          </Link>
        </li>
        <li>
          <Link to={"/concat"}>
            تماس با ما  
          </Link>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav>

  )
}

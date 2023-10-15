import React, { useState } from 'react'
import { IoLogoModelS } from "react-icons/io"
import { SiSpeedtest } from "react-icons/si"
import { FiShoppingCart } from "react-icons/fi"
import { CiMoneyCheck1 } from "react-icons/ci"
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from '@mui/material'

export default function Card({milage , model , price , image}) {

    let navigate=useNavigate();

    const [isOpen , setIsOpen]=useState(false);

    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            confirm:false
        },
        onSubmit:(values) => {
            navigate("/order/confirm-order")
        },
        validate:(values) => {
            let errors={};
            if(!values.confirm) {
                errors.confirm=true;
            }

            return errors;
        },
        initialErrors:{confirm:true}
    })

    let { confirm }=values;

    console.log(confirm);

    console.log(errors);

  return (
    <>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
            {image ? <img class="rounded-t-lg" src={image} alt="" /> :
                <Skeleton variant="rectangular" width={200} height={200} />
             }
            
        </a>
        <div class="p-5">
            <div className='w-full flex justify-between items-center'>
                <p class="w-2/3 mb-2 text-base font-roboto tracking-tight text-gray-900 capitalize dark:text-white">Noteworthy technology acquisitions 2021</p>
                <p className='text-base font-semibold capitalize'>{price} tooman</p>
            </div>
            <div className='w-full flex items-center mt-2'>
                <div className='flex items-center'>
                    <IoLogoModelS className='w-5 h-5 text-gray-800' />
                    <p className='text-sm font-bold text-gray-800 ml-1'>{model}</p>
                </div>
                <div className='flex items-center ml-5'>
                    <SiSpeedtest className='w-5 h-5 text-gray-800' />
                    <p className='text-sm font-bold text-gray-800 capitalize ml-1'>{milage}miles</p>
                </div>
            </div>
            <div class="font-yekan inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none mt-6">
                <p onClick={() => setIsOpen(true)}>سفارش ماشین</p>
                <FiShoppingCart className='w-5 h-5 text-white ml-1' />
            </div>
        </div>
    </div>
    <Modal size={"2xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={() => setIsOpen(false)} />
          <ModalHeader className='font-yekan'>سفارش ماشین</ModalHeader>
          <ModalBody width={"100%"}>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 border rounded-md overflow-hidden'>
                <div className='w-full h-full sm:pr-4'>
                    <img src={image} alt="" />
                </div>
                <div className='py-4 px-4 sm:px-0'>
                    <p class="w-full mb-2 text-base font-semibold tracking-tight text-gray-900 capitalize dark:text-white">Noteworthy technology acquisitions 2021</p>

                        <div className='w-full flex items-center mt-4'>
                    <div className='flex items-center'>
                        <IoLogoModelS className='w-5 h-5 text-gray-800' />
                        <p className='text-sm font-bold text-gray-800 ml-1'>{model}</p>
                    </div>
                    <div className='flex items-center ml-5'>
                        <SiSpeedtest className='w-5 h-5 text-gray-800' />
                        <p className='text-sm font-bold text-gray-800 capitalize ml-1'>{milage}miles</p>
                    </div>
                        </div>

                        <div className='flex items-center mt-4'>
                            <CiMoneyCheck1 className='w-5 h-5 text-gray-800 mr-1' />
                            <p className='text-sm font-bold capitalize'>{price} tooman</p>
                        </div>
                </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className='w-full'>
            <div className='flex justify-end mr-4'>
                            <form action="" className='w-full' onSubmit={handleSubmit}>
                                <div className='w-full flex justify-end'>
                                    <label className={`mr-1 font-yekan ${errors.confirm && "text-red-600"}`} htmlFor="confirm">اطلاعات را تایید میکنم</label>
                                    <input value={confirm} onChange={handleChange} onBlur={handleBlur} type="checkbox" name='confirm' id='confirm' />
                                </div>
                                <div className='w-full mt-4'>
                                    <button type='submit' className='bg-main_blue text-white px-3 py-2 rounded-md font-yekan'>ادامه</button>
                                </div>
                            </form>
                        </div>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Toaster />
    </>
  )
}

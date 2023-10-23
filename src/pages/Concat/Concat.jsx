import React from 'react'
import Layout from '../../Layout/Layout'
import Category from '../HomePage/components/Category'
import concat from "../../assets/images/concat.png"

export default function Concat() {
  return (
    <Layout>
        <div style={{backgroundImage:`url(${concat})`}} 
        className='w-full h-[450px] md:h-[500px] lg:h-[600px] xl:h-[650px] bg-cover bg-no-repeat bg-center text-white flex justify-center items-end p-6 md:p-8'>
            <div style={{direction:"rtl"}} className='max-w-[700px] text-center font-yekan md:flex gap-6 md:items-center'>
                    <div className='w-full h-full text-3xl md:text-3xl lg:text-4xl xl:text-6xl md:border-l-[3px] md:border-yellow-400 md:px-6 md:py-4'>تماس با ما</div>
                    <div className='text-base md:text-base lg:text-xl mt-2 lg:mt-0 flex flex-col justify-center items-center'>
                        <a style={{direction:"ltr"}} href='tel:+989121203277' className='w-full block whitespace-nowrap'>+989121203277</a>
                        <a style={{direction:"ltr"}} href='tel:+989125866638' className='w-full block whitespace-nowrap'>+989125866638</a>
                        <a style={{direction:"ltr"}} href='tel:+989393750790' className='w-full block whitespace-nowrap'>+989393750790</a>
                        <a href="mailto:carinto.ir@gmail.com" className='w-full block whitespace-nowrap font-roboto capitalize'>carinto.ir@gmail.com</a>
                    </div>
                </div>
        </div>
        <Category />
    </Layout>
  )
}
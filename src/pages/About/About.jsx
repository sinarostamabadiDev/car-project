import React from 'react'
import Layout from '../../Layout/Layout'
import CategoryItem from '../HomePage/components/CategoryItem'
import Category from '../HomePage/components/Category'
import about from "../../assets/images/about.jpg"

export default function About() {
  return (
    <Layout>
        <div>
            <div style={{backgroundImage:`url(${about})`}} 
            className='w-full h-[400px] md:h-[450px] lg:h-[550px] xl:h-[650px] bg-cover bg-right-top flex justify-start items-center p-10 text-white font-yekan'>
                <div style={{direction:"rtl"}} className='max-w-[500px] hidden md:block'>
                    <div className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>درباره ی ما</div>
                    <div className='text-sm md:text-base lg:text-lg mt-2 lg:mt-4'>
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
                </div>
            </div>
            <div className='w-full h-auto bg-black flex justify-center p-6 text-center text-white font-yekan md:hidden'>
                <div className='max-w-[500px]'>
                    <div className='text-2xl'>درباره ی ما</div>
                    <div className='text-sm mt-2'>
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
                </div>
            </div>
            <Category />
        </div>
    </Layout>
  )
}

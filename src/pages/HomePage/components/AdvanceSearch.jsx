import { useFormik } from 'formik'
import React, { useState } from 'react'
import { brands } from '../utils/brands'
import { Box , Slider } from '@mui/material';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function AdvanceSearch() {

    let navigate=useNavigate();

    const [values , setValues]=useState({
        name:"",
        brand:"kia",
        price:[0,100],
        milage:[0,100],
        motor:"1.5"
    })

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]:event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        navigate(`/advance-search/?name=${values.name}&brand=${values.brand}&price=${values.price}&milage=${values.milage}&motor=${values.motor}`)
    }

    console.log(values);

  return (
        <div className="advance-search w-full flex justify-center"> 
        <div className='w-full flex flex-col items-center'>                 
            <div className="title flex justify-center">
                <p className='text-3xl font-yekan text-gray-900'>جستجو پیشرفته</p>
            </div>
            <form onSubmit={handleSubmit} action="" className='w-full min-w-[250px] flex flex-col px-8 sm:px-0 gap-4 place-items-center mt-6'>
                <div className='w-full max-w-[300px] text-right'>
                    <label htmlFor="brand" className='text-sm font-yekan mb-1 block'>برند خودرو</label>
                    <select className='w-full h-10 bg-white rounded-md px-1 text-base capitalize font-semibold'
                    value={values.brand}
                    onChange={handleChange}
                     name="brand" id="brand">
                        {/* <option value="brand" selected disabled>brand</option> */}
                        {brands.map((brand) => {
                            return <option value={brand}>{brand}</option>
                        })}
                    </select>
                </div>

                <div className='w-full max-w-[300px] text-right'>
                    <label htmlFor="name" className='text-sm font-yekan block mb-1'>نام خودرو</label>
                    <input type="text" className='w-full h-10 bg-white rounded-md px-1 text-base capitalize font-semibold'
                    value={values.name}
                    onChange={handleChange}
                    name="name" id="name"
                     />
                </div>

                <div className='w-full max-w-[300px] text-right'>
                    <label htmlFor="motor" className='text-sm font-yekan block mb-1'>حجم موتور</label>
                    <select className='w-full h-10 bg-white rounded-md px-1 text-base capitalize font-semibold' onChange={handleChange} value={values.motor} name="motor" id="motor">
                        <option style={{direction:"rtl"}} value="1.5">1-1.5</option>
                        <option style={{direction:"rtl"}} value="2">1.5-2</option>
                        <option style={{direction:"rtl"}} value="2.5">2-2.5</option>
                        <option style={{direction:"rtl"}} value="3">2.5-3</option>
                        <option style={{direction:"rtl"}} value="4">بالای 3</option>
                    </select>
                </div>

                <div className='w-full max-w-[300px] text-right'>
                    <label htmlFor="brand" className='text-sm font-yekan block mb-1'>برند خودرو</label>
                    <RangeSlider value={values.price} onChange={(Event) => setValues({...values , price:Event})} aria-label={['min', 'max']} defaultValue={[10, 30]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <div style={{direction:"rtl"}} className='text-sm font-yekan'>از {Number(values.price[0]*100000000).toLocaleString()+" تومان "} تا {Number(values.price[1]*100000000).toLocaleString()+" تومان "}</div>
                </div>

                <div className='w-full max-w-[300px] text-right'>
                    <label htmlFor="brand" className='text-sm font-yekan block mb-1'>برند خودرو</label>
                    <RangeSlider value={values.milage} onChange={(Event) => setValues({...values , milage:Event})} aria-label={['min', 'max']} defaultValue={[10, 30]}>
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <div style={{direction:"rtl"}} className='text-sm font-yekan'>از {Number(values.milage[0]*3000).toLocaleString()+" کیلومتر "} تا {Number(values.milage[1]*3000).toLocaleString()+" کیلومتر "}</div>
                </div>
                <div className='w-full col-span-2 flex justify-center mt-2'>
                    <button type='submit' className='px-20 py-2 rounded-xl bg-main_gray font-yekan text-white'>جستجو</button>
                </div>
            </form>      
        </div>
        </div>
  )
}

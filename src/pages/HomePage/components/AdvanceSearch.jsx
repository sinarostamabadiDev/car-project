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
        milage:[0,100]
    })

    function handleChange(event) {
        setValues({
            ...values,
            [event.target.name]:event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        navigate(`/advance-search/?name=${values.name}&brand=${values.brand}&price=${values.price}&milage=${values.milage}`)
    }

    console.log(values);

  return (
        <div className="advance-search w-full flex justify-center mt-14"> 
        <div className='w-full flex flex-col items-center'>                 
            <div className="title flex justify-center">
                <p className='text-3xl font-yekan text-gray-900'>جستجو پیشرفته</p>
            </div>
            <form onSubmit={handleSubmit} action="" className='w-[650px] min-w-[250px] grid grid-cols-1 px-8 sm:grid-cols-2 sm:px-0 gap-4 mt-8 place-items-center'>

                <div className='w-full max-w-[300px] text-right'>
                    <label htmlFor="brand" className='text-sm font-yekan mb-1 block'>برند خودرو</label>
                    <select className='w-full h-10 bg-white border border-gray-200 rounded-md px-1 text-base capitalize font-semibold'
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
                    <input type="text" className='w-full h-10 bg-white border border-gray-200 rounded-md px-1 text-base capitalize font-semibold'
                    value={values.name}
                    onChange={handleChange}
                    name="name" id="name"
                     />
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
                    <div style={{direction:"rtl"}} className='text-sm font-yekan'>از {values.price[0]*100000000+" تومان "} تا {values.price[1]*100000000+" تومان "}</div>
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
                    <div style={{direction:"rtl"}} className='text-sm font-yekan'>از {values.milage[0]*3000+" کیلومتر "} تا {values.milage[1]*3000+" کیلومتر "}</div>
                </div>
                <div className='w-full col-span-2 flex justify-center mt-2'>
                    <button type='submit' className='px-6 py-2 rounded-xl bg-main_blue font-yekan text-white'>جستجو</button>
                </div>
            </form>      
        </div>
        </div>
  )
}

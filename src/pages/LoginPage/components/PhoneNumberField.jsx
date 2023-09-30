import React from 'react'

export default function PhoneNumberField({phoneNumber , handleChange , handleBlur , errors}) {
  return (
    <>
        <label className='text-sm font-yekan' htmlFor="phoneNumber">تلفن همراه</label>
                        <input className='w-full h-12 rounded-md border border-gray-200 mt-1 px-1 text-base text-gray-800 font-semibold'
                         type="tel" name="phoneNumber" id="phoneNumber"
                         value={phoneNumber}
                         onChange={handleChange}
                         onBlur={handleBlur}
                          />
                          <div className={`error text-sm font-yekan text-red-600 mt-1 ${errors.phoneNumber ? "" : "opacity-0"}`}>{errors.phoneNumber || "error"}</div>
    </>
  )
}

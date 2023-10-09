import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({name , logo}) {
  return (
    <Link to={`cars/${name}`}>
        <div className='w-full h-16 flex flex-col items-center cursor-pointer hover:text-gray-800'>
                                        <div className='w-full h-full bg-white rounded-xl p-1'>
                                            {logo}
                                        </div>
                                        <p className='text-xs font-semibold text-gray-900 capitalize'>{name}</p>
                                    </div>
    </Link>
  )
}

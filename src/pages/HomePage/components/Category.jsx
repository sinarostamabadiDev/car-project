import React from 'react'
import CategoryItem from './CategoryItem'
import { SiKia , SiHyundai , SiToyota , SiNissan , SiMitsubishi , SiVolkswagen , SiBmw , SiMercedes , SiRenault } from "react-icons/si"

export default function Category() {
  return (
    <div>
                    <div className='w-full flex justify-center mt-12 border-b pb-16'>
                                <div className='w-full min-w-[250px] grid grid-cols-3 gap-y-10 gap-x-4'>
                                    <div className='ws-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"kia"} logo={<SiKia className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"hyundai"} logo={<SiHyundai className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"toyota"} logo={<SiToyota className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"nissan"} logo={<SiNissan className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"mitsubishi"} logo={<SiMitsubishi className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"volkswagen"} logo={<SiVolkswagen className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"bmw"} logo={<SiBmw className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"mercedes"} logo={<SiMercedes className='w-full h-full' />} />
                                    </div>
                                    <div className='w-full h-16 flex flex-col items-center'>
                                        <CategoryItem name={"renault"} logo={<SiRenault className='w-full h-full' />} />
                                    </div>
                                </div>
                            </div>
                    </div>
  )
}

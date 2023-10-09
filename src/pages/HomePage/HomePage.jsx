import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate, useNavigation } from 'react-router-dom';
import { useFormik } from 'formik';
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from 'react-query'
import { client } from '../../app/axiosConfig';
import MenuAppBar from '../../components/Header/Header';
import Header from '../../components/Header/Header';
import Layout from '../../Layout/Layout';
import { Grid, GridItem } from '@chakra-ui/react'
import kia from "../../assets/images/carLogo/kia.png"
import { SiKia , SiHyundai , SiToyota , SiNissan , SiMitsubishi , SiVolkswagen , SiBmw , SiMercedes , SiRenault } from "react-icons/si"
import CategoryItem from './components/CategoryItem';
import toast, { Toaster } from 'react-hot-toast';
import AdvanceSearch from './components/AdvanceSearch';

export default function HomePage() {

    let queryClient=useQueryClient();

    useEffect(() => {
        queryClient.removeQueries(["carsModel"]);
        queryClient.removeQueries(["advanceSearchResult"]);
    })

    let navigate=useNavigate();


    useEffect(() => {
        if(!Cookies.get("jwt")) {
            navigate("/login")
        }
    })
    


    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            simpleSearch:""
        },
        onSubmit:(values) => {
            navigate(`simple-search/${values.simpleSearch}`);
        },
        validate:(values) => {
            let errors={};

            if(!values.simpleSearch) {
                errors.simpleSearch="سرچ نباید خالی باشد"
            }

            return errors;
        }
    })


    let { simpleSearch }=values;

    console.log(simpleSearch);
    console.log(errors);


    return (
        <div>
            {Boolean(Cookies.get("jwt")) && 
            <Layout>
                <div className='w-full h-auto p-8 bg-gray-50'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-full h-auto flex flex-col items-center justify-center bg-white shadow-xl rounded-md px-8 py-12'>
                            <form action="" onSubmit={handleSubmit} className='flex flex-col text-right'>
                                <div className='flex flex-col'>
                                    <label className='text-sm font-yekan mb-1' htmlFor="">جستجوی ساده</label>
                                    <div className='w-72 h-10 flex flex-row-reverse items-center border border-gray-200 rounded-md overflow-hidden'>
                                        <input value={simpleSearch} onChange={handleChange} onBlur={handleBlur} name='simpleSearch' style={{direction:"rtl"}} className='w-full h-full outline-none px-1 text-sm font-yekan text-gray-800' type="text" />
                                        <div className='h-full bg-main_blue flex justify-center items-center'>
                                            <button type='submit' className='flex justify-center text-base font-yekan text-white px-1 cursor-pointer'>جستجو</button>
                                        </div>
                                    </div>
                                    <div className={`error text-sm font-yekan text-red-600 mt-1 ${errors.simpleSearch ? "" : "opacity-0"}`}>{errors.simpleSearch || "error"}</div>
                                </div>
                            </form>
                            <div className='w-full flex justify-center mt-12 border-b pb-16'>
                                <div className='w-[500px] min-w-[250px] grid grid-cols-3 gap-y-10 gap-x-4'>
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
                            
                            <AdvanceSearch />

                        </div>
                    </div>
                </div>
            </Layout>
            }
            <Toaster />
        </div>
    )

}

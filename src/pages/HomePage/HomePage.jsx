import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
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
import car from "../../assets/images/car.jpg"
import { BiSearch } from "react-icons/bi"
import benz from "../../assets/images/benz.png"
import Carousel from "react-multi-carousel";
import Card from '../ResultSimpleSearchPage/components/Card';
import "react-multi-carousel/lib/styles.css";
import Category from './components/Category';


export default function HomePage() {

    let queryClient=useQueryClient();

    useEffect(() => {
        queryClient.removeQueries(["carsModel"]);
        queryClient.removeQueries(["advanceSearchResult"]);
    })

    let {isLoading , isError , error , data}=useQuery({
        queryKey:["homeCars"],
        queryFn:async () => {
            let response=await client.get("/api/cars");

            return response.data;
        }
    })

    let navigate=useNavigate();


    useEffect(() => {
        if(!Cookies.get("jwt")) {
            navigate("/login")
        }
    })
    

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


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
                <div className='w-full'>
                    <div style={{backgroundImage:`url(${car})`}} 
                    className='w-full h-[500px] bg-cover bg-no-repeat flex flex-row-reverse items-center'>
                        <div className='w-full md:w-auto p-4 md:mr-24 text-center'>
                            <div>
                                <div className='text-3xl md:text-5xl text-white font-yekan'>خودرو خود را جستجو کنید</div>
                                <div className='mt-6 w-full'>
                                    <form action="" onSubmit={handleSubmit} className='w-full flex flex-col text-right'>
                                    <div className='w-full flex flex-col'>
                                        <div style={{backgroundColor:"rgba(200,200,200,0.6)"}} className='w-full h-[50px] md:h-[60px] p-1 flex flex-row items-center rounded-full overflow-hidden'>
                                            <input style={{background:"none" , direction:"rtl"}}  value={simpleSearch} onChange={handleChange} onBlur={handleBlur} name='simpleSearch'
                                            className='w-full h-full outline-none px-1 text-sm font-yekan text-gray-800' type="text" />
                                            <div className='h-full w-16 bg-main_gray flex justify-center items-center rounded-full'>
                                                <button type='submit' className='flex justify-center text-base font-yekan text-white cursor-pointer'><BiSearch className='w-6 h-6 marker:text-white' /></button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className='w-full mt-4'>
                                    <ul className='w-full flex justify-between text-base md:text-xl text-white font-yekan px-2 md:px-8'>
                                        <li className='border-b border-dashed'>
                                            <Link>
                                                خودرو دست دوم
                                            </Link>
                                        </li>
                                        <li className='border-b border-dashed'>
                                            <Link>
                                                خودرو جدید
                                            </Link>
                                        </li>
                                        <li className='border-b border-dashed'>
                                            <Link>
                                                خودرو برقی
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center gap-6 p-10 bg-gray-200'>
                        <div className='w-1/2 hidden md:block h-full'>
                            <img className='w-full' src={benz} alt="" />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <AdvanceSearch />
                        </div>
                    </div>
                    <div className='w-full p-6'>
                        <div className='w-full flex justify-center'>
                            <p className='text-4xl md:text-5xl text-gray-950 font-yekan'>پر بازدید ترین ها</p>
                        </div>
                        <div className='w-full py-6'>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {data ? data.cars.map((car) => {
                                return <div className='p-4 mb-4'>
                                    <Card {...car} />
                                </div>
                            }) : <div></div>}
                         </Carousel>
                        </div>
                    </div>

                    <div className='w-full p-6 bg-gray-200'>
                        <div className='w-full flex justify-center'>
                            <p className='text-4xl md:text-5xl text-gray-950 font-yekan'>پر بازدید ترین ها</p>
                        </div>
                        <div className='w-full py-6'>
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            // deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {data ? data.cars.map((car) => {
                                return <div className='p-4 mb-4'>
                                    <Card {...car} />
                                </div>
                            }) : <div></div>}
                         </Carousel>
                        </div>
                    </div>

                    <Category />
                </div>
                {/* <div className='w-full h-auto p-8 bg-gray-50'>
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
                </div> */}
            </Layout>
            }
            <Toaster />
        </div>
    )

}

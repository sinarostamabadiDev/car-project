import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useFormik } from 'formik'
import login from "../../assets/images/LoginPageImages/login.jpg"
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { client } from '../../app/axiosConfig';
import Cookies from 'js-cookie';
import AuthCode from 'react-auth-code-input';
import ReactCodeInput from 'react-code-input';
import PhoneNumberField from './components/PhoneNumberField';
import Countdown from 'react-countdown';
import ReactCountdownClock from "react-countdown-clock"
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom'
import { Timer } from './components/Timer';

export default function LoginPage() {
    const [otp , setOtp]=useState("");
    const [update , setUpdate]=useState("");
    const [status , setStatus]=useState(false);
    const [resetCodeSent , setResetCodeSent]=useState(true);

    const [isCodeSent , setIsCodeSent]=useState(false);

    let navigate=useNavigate();



    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    let { values , handleChange , handleSubmit , errors , handleBlur , touched }=useFormik({
        initialValues:{
            phoneNumber:"",
            code:""
        },
        onSubmit:async (values) => {
            if(!status) {
                let response=await client.post("/api/core/getotp/" , {phone_number:values.phoneNumber});
                if(response.status===200) {
                    toast.success("کد برای شما فرستاده شد")
                    Cookies.set("phoneNumber" , String(phoneNumber));
                    // Cookies.set("status" , true);
                    setStatus(true);
                } else if(response.status!==200) {
                    toast.error("خطایی رخ داده است")
                }
            } else if(status) {
                let phoneNumber=Cookies.get("phoneNumber");
                let response=await client.post("/api/core/checkotp/" , {phone_number:phoneNumber , otpcode:otp})

                if(response.status===200) {
                    if(response.data.is_otp) {
                        Cookies.set("jwt" , response.data.jwt);
                        navigate("/");
                    } else if(!response.data.is_otp) {
                        toast.error("کد اشتباه میباشد")
                        setOtp("");
                    }
                }
            }
        },
        validate:(values) => {
            let errors={};

            if(!status) {
                if(!values.phoneNumber) {
                    errors.phoneNumber="شماره تلفن را وارد کنید"
                } else if (!phoneRegExp.test(values.phoneNumber) || values.phoneNumber.length<10) {
                    errors.phoneNumber="شماره ی تلفن معتبر نیست"
                }
            }

            return errors;
        }
    })


    console.log(errors);


    let { phoneNumber , otpCode }=values;


    const Completionist = () => <span>You are good to go!</span>;

            // Renderer callback with condition
            const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
                // Render a completed state
                return <Completionist />;
            } else {
                // Render a countdown
                return <span>{hours}:{minutes}:{seconds}</span>;
            }
            };


            

  return (
    <div className='w-full h-screen grid grid-cols-1 lg:grid-cols-2 bg-white'>
        <div className="right-login w-full h-full flex justify-center items-center bg-main_blue">
            <form action="" onSubmit={handleSubmit} className='w-4/5 max-w-[380px] h-3/5 lg:h-4/5 flex flex-col justify-between rounded-xl shadow-2xl text-center px-4 py-8 bg-white'>
                <div>
                    <div className="title text-4xl font font-semibold font-yekan">
                        ورود
                    </div>
                    <div className='text-xl font-medium font-yekan mt-4'>
                        ماشین خودتو انتخاب کن
                    </div>
                    <div className='text-lg font-semibold font-yekan mt-10'>
                        پلتفرم جستجوی هوشمند خودرو در جهان
                    </div>
                </div>

                <div className='w-full text-center'>
                    <div className="input w-full flex flex-col text-right">
                        {status ? 
                        <div className='w-full flex justify-center'>
                            <ReactCodeInput value={otp} onChange={(Event) => setOtp(Event)} type='number' fields={4} />
                        </div>
                         :
                        <PhoneNumberField phoneNumber={phoneNumber} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />
                        }
                        {status && <div className='flex justify-center mt-2'>
                            <Timer />
                        </div>}
                    </div>    
                    <button type='submit' className='px-4 py-2 rounded-lg text-white font-yekan bg-main_blue mt-10'>{status ? "تایید" : "دریافت کد"}</button>
                </div>
            </form>
        </div>
        <div className="w-full h-full left-login hidden lg:flex py-14">
            <img className='w-full h-full' src={login} alt="" loading='lazy' />
        </div>
        <Toaster />
    </div>
  )
}

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
import { CircularProgress } from '@mui/material';
import { AiOutlineLoading3Quarters } from "react-icons/ai"


export default function LoginPage() {
    const [otp , setOtp]=useState("");
    const [update , setUpdate]=useState("");
    const [status , setStatus]=useState(false);
    const [resetCodeSent , setResetCodeSent]=useState(true);
    const [loading , setLoading]=useState(false);

    const [isCodeSent , setIsCodeSent]=useState(false);

    let navigate=useNavigate();



    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    let { values , handleChange , handleSubmit , errors , handleBlur , touched }=useFormik({
        initialValues:{
            phoneNumber:"",
            code:""
        },
        onSubmit:async (values) => {
            if(values.phoneNumber=="09120634285") {
                navigate("/")
                Cookies.set("jwt",true);
            }
            else {
                toast.error("شماره تلفن اشتباه میباشد")
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
            <form action="" onSubmit={handleSubmit} className='w-4/5 max-w-[380px] h-[450px] lg:h-4/5 flex flex-col justify-between rounded-xl shadow-2xl text-center px-4 py-8 bg-white'>
                <div>
                    <div className="title text-4xl font font-semibold font-yekan">
                        ورود
                    </div>
                    <div className='text-xl font-medium font-yekan mt-4'>
                        ماشین خودتو انتخاب کن
                    </div>
                    <div className='text-lg font-semibold font-yekan'>
                        پلتفرم جستجوی هوشمند خودرو در جهان
                    </div>
                </div>

                <div className='w-full text-center mt-10 md:mt-0'>
                    <div className="input w-full flex flex-col text-right">
                        <PhoneNumberField phoneNumber={phoneNumber} handleChange={handleChange} handleBlur={handleBlur} errors={errors} />
                    </div>    
                    <button type='submit' disabled={loading} className='px-4 py-2 rounded-lg text-white font-yekan bg-main_blue mt-10'>{loading ? <AiOutlineLoading3Quarters /> : status ? "تایید" : "دریافت کد" }</button>
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

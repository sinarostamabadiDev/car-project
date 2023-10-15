import { memo, useMemo, useState } from "react";
import Countdown from 'react-countdown';
import { client } from "../../../app/axiosConfig";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

export let Timer=memo(function Timer({resetCodeSent}) {

    const [sentCodeAgain , setSentCodeAgain]=useState(true);

        async function sendAgain() {
            let phoneNumber=Cookies.get("phoneNumber");
            let response=await client.post("/api/core/getotp/" , {phone_number:phoneNumber});
            if(response.status===200) {
                toast.success("کد برای شما فرستاده شد");
                setSentCodeAgain(false);
            }
        }

    return ( 
    <>
    <Countdown
                                date={Date.now() + 120000}
                                autoStart={true}
                                // onComplete={() => {
                                //     resetCodeSent=Cookies.get("resetCodeSent");
                                //     Cookies.set("time" , 0);
                                // }}
                                // onTick={(props) => {
                                //     Cookies.set("time" , String(props.total))
                                // }}
                                renderer={props => {
                                    if(props.completed && sentCodeAgain) {
                                            return <div onClick={() => {
                                                sendAgain();
                                            }} className='text-base font-yekan text-green-600 cursor-pointer'>ارسال دوباره کد</div>
                                    } else if (sentCodeAgain) {
                                        return <div className='text-sm font-roboto'>0{props.minutes}:{props.seconds}</div>
                                    }
                                }
                                }
                            />
                            <Toaster />
    </>
    )
})
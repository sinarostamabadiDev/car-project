import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { client } from '../../app/axiosConfig';

export default function HomePage() {
    
    let {isLoading  , data}=useQuery({
        queryKey:["user"],
        queryFn:async () => {
            let response=await client.get("api/core/whoami/");
            return response.data;
        }
    })

    console.log(data);

    let navigate=useNavigate();
    useEffect(() => {
        let jwt=Cookies.get("jwt");
    
        if(jwt) {
            return (
              <div>HomePage</div>
            )
        } else {
            navigate("/login")
        }
    } , [])


}

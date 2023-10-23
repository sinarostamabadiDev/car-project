import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { client } from '../../app/axiosConfig'
import Layout from '../../Layout/Layout'
import Card from '../ResultSimpleSearchPage/components/Card'

export default function CarsModel() {

    let queryClient=useQueryClient();

    let { slug }=useParams();

    let { isLoading , isError , error , data }=useQuery({
        queryKey:["carsModel"],
        queryFn:async () => {
            let response=await client.get("/api/cars" , {params:{slug}});

            if(response.status===200) {
                return response.data;
            }
        }      
    })

    if(isLoading) {
        <div>loading...</div>
    }


  return (
    <Layout>
        <div>
            <div className='w-full py-10 flex flex-wrap justify-center gap-6'>
                {data && data.cars.map((car) => {
                    if(car.price!==0) {
                        return <Card {...car} />
                    }
                })}
            </div>
        </div>
    </Layout>
  )
}

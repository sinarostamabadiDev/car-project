import React from 'react'
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom'
import { client } from '../../app/axiosConfig';
import Card from '../ResultSimpleSearchPage/components/Card';
import Layout from '../../Layout/Layout';
Layout

export default function ResultAdvanceSearchPage() {
    let [ searchParams ]=useSearchParams();
    let params=useParams();

    console.log(searchParams.get("brand"));


    let {isLoading , isError , error , data}=useQuery({
        queryKey:["advanceSearchResult"],
        queryFn:async () => {
            let response=await client.get("/api/cars/" , {params:{
                slug:searchParams.get("name"),
                brand:searchParams.get("brand"),
                minprice:searchParams.get("price").split(",")[0]*100000000,
                maxprice:searchParams.get("price").split(",")[1]*100000000,
                minmilage:searchParams.get("milage").split(",")[0]*3000,
                maxmilage:searchParams.get("milage").split(",")[1]*3000,
                motor:searchParams.get("motor")
            }})

            if(response.status===200) {
                return response.data;
            }
        }
    })

    let cardCem=data && data.cars.map((car) => {
        return <Card {...car} />
    })

  return (
    <Layout>
        <div className='w-full px-8'>
            <div className='w-full py-10 flex flex-wrap justify-center gap-6'>
                {cardCem}
            </div>
        </div>
    </Layout>
  )
}
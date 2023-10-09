import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { client } from '../../app/axiosConfig';
import Layout from '../../Layout/Layout';
import Card from './components/Card';

export default function ResultSimplePageSearch() {
    let { slug }=useParams();

    console.log(slug);

    let { isLoading , isError , error , data }=useQuery({
        queryKey:["simpleSearchResult"],
        queryFn:async () => {
            let response=await client.get("/api/cars/" , {params:{slug , page:1}});

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
            <div className="title w-full flex justify-center p-6 border-b border-gray-200">
                <p style={{direction:"rtl"}} className='text-3xl font-yekan text-gray-900'>نتایج جستجو برای 
                <span className='text-3xl font-roboto capitalize mr-2'>{slug.toLocaleUpperCase()}</span></p>
            </div>
            <div className='w-full py-10 flex flex-wrap justify-center gap-6'>
                {cardCem}
            </div>
        </div>
    </Layout>
  )
}

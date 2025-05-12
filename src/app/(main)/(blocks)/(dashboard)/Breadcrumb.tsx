import { useAppSelector } from '@/hooks/redux';
import React from 'react'
type BreadcrumbTypes={
    title:string;
    description:string
}

const Breadcrumb = (props:BreadcrumbTypes) => {
const {breadcrumb}=useAppSelector((store)=>store.commons)
  return (
    <div className=''>
        <h2 className='text-[#1C278B] text-[22px] font-bold'>{breadcrumb?.title}</h2>
        <p className='md:w-[50%] w-full'>{breadcrumb?.description}</p>
    </div>
  )
}

export default Breadcrumb
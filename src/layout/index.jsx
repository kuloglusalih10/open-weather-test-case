import React from 'react'
import { Outlet } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export const Layout = () => {

  const navigation = useNavigate();
  return (
    <div className='w-full h-full px-60 py-20'>
        <div className='flex text-center flex-row w-full items-center justify-between'>
          <div>
            <IoArrowBackOutline color='#1c1e23' size={40} className='cursor-pointer' onClick={()=>navigation(-1)} />
          </div>
          <h2 className='text-2xl mb-8 font-semibold text-dark-gray text-center'>
            Türkiye Hava durumu
          </h2>
          <div>
            
          </div>
        </div>
      
        <Outlet/>
    </div>
  )
}

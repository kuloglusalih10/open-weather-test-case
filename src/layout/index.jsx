import React from 'react'
import { Outlet } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'classnames';



export const Layout = () => {

  const navigation = useNavigate();
  const path = useLocation().pathname.substring(1)


  return (
    <div className='w-full h-full lg:px-44 md:px-32 px-4 pt-16 pb-2'>
        <div className='flex text-center flex-row w-full items-center justify-between mb-4'>
          <div>
            <div className={classNames('', {'hidden' : !path})}>
              <IoArrowBackOutline color='#1c1e23' size={40} className='cursor-pointer' onClick={()=>navigation(-1)} />
            </div>
          </div>
          <h2 className='text-3xl mb-8 font-semibold text-dark-gray text-center'>
            Türkiye Hava durumu
          </h2>
          <div>
            
          </div>
        </div>
      
        <Outlet/>
    </div>
  )
}

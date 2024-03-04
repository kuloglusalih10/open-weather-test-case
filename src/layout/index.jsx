import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className='w-full h-full px-60 py-20'>
      <h2 className='text-2xl mb-8 font-semibold text-dark-gray text-center'>
        Türkiye Hava durumu
      </h2>
        <Outlet/>
    </div>
  )
}

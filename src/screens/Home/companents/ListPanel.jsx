import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { cities } from '../../../utils/cities'
import { IoSearchOutline } from "react-icons/io5";


export const ListPanel = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <Tab.Panel className={classNames(' grid grid-cols-4 gap-2 p-3 '
                )}>

                <div className='grid grid-cols-5 col-span-4 mb-4 '>
                    <div className='col-span-3 col-start-2 flex flex-row items-center justify-between rounded bg-white border h-14 pr-4'>
                        <input type="text" className='w-full h-full rounded-l px-2 focus:outline-none ' placeholder='Şehir Ara' onChange={e => setSearch(e.target.value)}/>
                        <IoSearchOutline  size={25} color='#656565'/>
                    </div>
                </div>
                
                
                
                {
                    cities.filter(item => item.il_adi.startsWith(search.toUpperCase())).map((city, index)=>{
                        return (
                            <div key={index} className={classNames('row-span-1 hover:bg-slate-200 cursor-pointer col-span-1 flex flex-row items-center justify-center h-16 border rounded bg-white')}>
                                
                                <div className='w-1/4 h-full rounded'>
                                    <div className=' flex clip items-center rounded-l justify-center h-full w-full text-white bg-blue'>
                                        {city.plaka}
                                    </div>
                                </div>
                                <div className='w-3/4 '>
                                    <h2 className='text-center text-black'>
                                        {city.il_adi}
                                    </h2>
                                </div>
                            </div>
                        )
                    })
                }
                

            </Tab.Panel>
        </>
    )
}
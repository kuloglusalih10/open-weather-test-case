import classNames from 'classnames'
import { useEffect, useState } from 'react'
import React from 'react'
import WeatherIcon from 'react-icons-weather';
import { useDispatch, useSelector } from 'react-redux';
import { changeDay } from '../../../store/slices/weather';

export const BottomTab = () => {


    const {days , currentDay , status} = useSelector(state => state.weather);
    const dispatch = useDispatch();

    useEffect(()=> {
        console.log(status);
        console.log(currentDay);
        console.log(days)
    },[status])
    

    return (
        <>

            <div className='w-full h-[200px] flex flex-row itemss-center gap-x-2 justify-center'>

            {
                status != 'fulFilled' ? <div>yükleniyor</div> 

                    :
                    
                
                
                    Object.entries(days).map((day , index)=> {
                        
                        return (
                                <div onClick={()=> dispatch(changeDay(index))} key={index} className={classNames('h-full cursor-pointer w-52 flex flex-col items-center justify-center bg-white rounded', {'bg-slate-400' : currentDay == index})} >
                                    <div className='h-1/5 w-full text-dark-gray text-2xl flex items-center justify-center text-center font-semibold'>
                                        {'das'}
                                    </div>
                                    <div className='h-3/5 w-full flex items-center justify-center text-center'>
                                        <WeatherIcon className={classNames('text-6xl text-blue')} name="owm" iconId={'200'} flip="horizontal" rotate="90" />
                                    </div>
                                    <div className='h-1/5 w-full flex items-center gap-x-4 justify-center'>
                                        <h1 className='text-dark-gray text-2xl'>25<sup className='text-md -top-[0.5em]'>°C</sup> </h1>
                                        <h1 className='text-slate-500 text-2xl'>12<sup className='text-md -top-[0.5em]'>°C</sup> </h1>
                                    </div>
                                </div> 
                            
                        )
                    })
            }

            </div>
           
        </>
    )
}





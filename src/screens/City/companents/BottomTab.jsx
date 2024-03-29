import classNames from 'classnames'
import { useEffect, useState } from 'react'
import React from 'react'
import WeatherIcon from 'react-icons-weather';
import { useDispatch, useSelector } from 'react-redux';
import { changeDay } from '../../../store/slices/weather';
import { formatDate } from '../../../hooks/day';
import { Skeleton } from 'antd';

export const BottomTab = () => {


    const {days , currentDay , status} = useSelector(state => state.weather);
    const dispatch = useDispatch();


    return (
        <>

            <div className='w-full  flex flex-row items-center gap-x-2 gap-y-2 flex-wrap justify-center'>

                {
                    status != 'fulFilled' ? 


                        <div  className={classNames('bg-white border py-1 h-[200px] cursor-pointer w-full flex flex-col items-center justify-center rounded')} >
                            <Skeleton className='w-full h-full' size='large' active/>
                        </div> 

                        :
                        
                    
                    
                        Object.entries(days).map((day , index)=> {
                            
                            return (
                                    <div onClick={()=>dispatch(changeDay(index))} key={index} className={classNames('bg-white border py-1 h-[200px] cursor-pointer w-full  xl:w-52 flex flex-col items-center justify-center rounded', {'custom border-blue' : currentDay == index})} >
                                        <div className='h-1/5 w-full text-dark-gray text-2xl flex items-center justify-center text-center font-semibold'>
                                            {formatDate( day[1].tab.name).split(' ')[0]}
                                        </div>
                                        <div className='h-3/5 w-full flex items-center justify-center text-center'>
                                            <WeatherIcon className={classNames('text-6xl text-orange')} name="owm" iconId={day[1].tab.day_icon == undefined ? day[1].tab.night_icon : day[1].tab.day_icon } flip="horizontal" rotate="90" />
                                        </div>
                                        <div className='h-1/5 w-full flex items-center gap-x-4 justify-center'>
                                            <h1 className='text-dark-gray text-2xl'>{day[1].tab.day == undefined ? day[1].tab.night : day[1].tab.day }<sup className='text-md -top-[0.5em]'>°C</sup> </h1>
                                            <h1 className='text-slate-500 text-2xl'>{day[1].tab.night == undefined ? day[1].tab.day : day[1].tab.night }<sup className='text-md -top-[0.5em]'>°C</sup> </h1>
                                        </div>
                                    </div> 
                            )
                        })
                }

            </div>
           
        </>
    )
}





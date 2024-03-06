import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import WeatherIcon from 'react-icons-weather';
import classNames from 'classnames';
import { formatDate } from '../../../hooks/day';

export const Header = () => {

    const selectedTime = useSelector(state => state.weather.selectedTime);

    useEffect(()=>{
        console.log(selectedTime);
    }, [selectedTime])

    return (
        <>
            {
                !selectedTime ? <p>yükleniyor</p> 
                    
                    : 
                

                <div className='w-full h-[100px] flex flex-row items-center justify-between'>
                    
                    <div className='flex flex-row items-center gap-x-3 justify-center h-full'>
                        <WeatherIcon className={classNames('text-5xl text-blue' , {'text-orange' : selectedTime.id >= 800})} name="owm" iconId={selectedTime.icon} flip="horizontal" rotate="90" />
                        <h1 className='text-dark-gray text-6xl'>{selectedTime.temp}<sup className='text-3xl -top-[0.7em]'>°C</sup> </h1>
                    </div>
                    
                    <div className='flex flex-col h-full items-end justify-center'>
                        <h1 className='text-orange text-3xl'>{selectedTime.name}</h1>
                        <p className='text-gray-400 text-sm'>{selectedTime.description}</p>
                        {formatDate(selectedTime.date)}
                    </div>
                </div>
                

            }
        </>
    )
}

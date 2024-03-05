import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../store/slices/weather';
import { cities } from '../../utils/cities';

const City = () => {

    const dispatch = useDispatch();
    const { plaka } = useParams();

    useEffect(()=>{

        const selectedCity = cities.find(sehir => sehir.plaka == plaka);
        selectedCity ? dispatch(fetchWeather(selectedCity)) : console.log('Şehir bulunamadı')

    },[])

    return (
        <div>
            {plaka}
        </div>
    )
}

export default City
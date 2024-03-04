import React from 'react'
import TurkeyMap from 'turkey-map-react'
import { Tooltip } from 'antd';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';



export const MapPanel = () => {

    const navigation = useNavigate();

    const renderCity = (cityComponent, cityData) => ( 
        <Tooltip title={cityData.name} key={cityData.id}> 
            {cityComponent} 
        </Tooltip>
      );

    return (
        <>

            <Tab.Panel className={classNames('')}>
                <TurkeyMap onClick={(city)=> navigation(`/${city.name}`)} customStyle={{hoverColor:'#099CFF', idleColor:'#1c1e23'}} cityWrapper={renderCity} hoverable={true} />
            </Tab.Panel>
            
        </>
    )
}

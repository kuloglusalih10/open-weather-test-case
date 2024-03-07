import React from 'react'
import { Tabs } from 'antd';
import { useDispatch } from 'react-redux';
import { changedTab } from '../../../store/slices/weather';

export const Tab = () => {


    const dispatch = useDispatch();

    const change = (key) => {
        dispatch(changedTab(key))
        console.log(key);
    }

    const items = [
        {
          key: 'temps',
          label: 'Sıcaklık'
        },
        {
          key: 'winds',
          label: 'Rüzgar'
        },
        {
          key: 'humidities',
          label: 'Nem',
        },
      ];


  return (
    <Tabs defaultActiveKey="1" items={items} onChange={change}/>
  )
}

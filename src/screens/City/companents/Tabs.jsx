import React from 'react'
import { Tabs } from 'antd';
import { useDispatch } from 'react-redux';
import { changedTab } from '../../../store/slices/chart';

export const Tab = () => {


    const dispatch = useDispatch();

    const change = (key) => {
        dispatch(changedTab(key))
        console.log(key);
    }

    const items = [
        {
          key: 'sıcaklık',
          label: 'Sıcaklık'
        },
        {
          key: 'rüzgar',
          label: 'Rüzgar'
        },
        {
          key: 'nem',
          label: 'Nem',
        },
      ];


  return (
    <Tabs defaultActiveKey="1" items={items} onChange={change}/>
  )
}

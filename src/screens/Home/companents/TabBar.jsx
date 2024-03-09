import React from 'react'
import { Tab } from '@headlessui/react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import classNames from 'classnames';
import { ListPanel } from './ListPanel';
import { MapPanel } from './MapPanel';
import { CiBoxList } from "react-icons/ci";
import { FaMapMarkedAlt } from "react-icons/fa";

export const TabBar = () => {

  
    const [parent, enableAnimations] = useAutoAnimate();


    return (
        <>
            <Tab.Group >
                    <Tab.List className="flex rounded-lg bg-blue-900/20 px-2 mx-auto lg:w-[50%]">
                        <Tab className={({ selected }) =>
                            classNames(
                            'w-full  rounded-l-lg flex items-center justify-center py-5 text-sm font-medium leading-5',
                            '  focus:outline-none ',
                            selected
                                ? ' bg-dark-gray border border-black text-white shadow'
                                : 'text-blue-100 border bg-white'
                            )
                        }>
                            <CiBoxList size={23} color='#FF9A62' className='mr-2'/>
                            Liste
                            
                        </Tab>
                        <Tab className={({ selected }) =>
                            classNames(
                            'w-full  rounded-r-lg flex items-center justify-center py-2.5 text-sm font-medium leading-5',
                            '   focus:outline-none ',
                            selected
                                ? 'bg-dark-gray border border-black text-white shadow'
                                : 'text-blue-100 border bg-white'
                            )
                        }>
                            <FaMapMarkedAlt size={23}  color='#FF9A62' className='mr-2'/>
                            Harita
                        
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-8" ref={parent}>

                        <ListPanel/>

                        <MapPanel/>

                    </Tab.Panels>
            </Tab.Group>

        </>
    )
}

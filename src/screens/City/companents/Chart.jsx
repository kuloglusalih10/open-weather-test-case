import { createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import ApexChart from 'react-apexcharts'
import { useSelector,useDispatch } from 'react-redux';
import { Skeleton } from 'antd';


export const Chart = () => {

    let { selectedTabData ,status, selectedDates } = useSelector(state => state.weather)

    let chart = { 
          
        forecastDataPoints: {
        count: 17
        },

        series: [ {
          name: 'Sıcaklık',
          data: selectedTabData
        }],
        options: {

            markers: {
              hover: {
                size: undefined,
                sizeOffset: 0
              }
            },
            grid: {
              padding: {
                left: 10,
                right: 40 // Also you may want to increase this (based on the length of your labels)
              },
                xaxis: {
                  lines: {
                    show: false
                  }
                },
                yaxis: {
                  lines: {
                    show: false
                  }
                }
            },
            chart: {

                toolbar: {
                  show: false // Toolbar'ı gizler
                },
               
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: true,
                

            },
            stroke: {
                
                curve: 'smooth'
            },
            
            yaxis:{
                tickPlacement: 'on',
                labels: {
                  show: false,
                  align: 'left',
                },
                axisBorder: {
                  show: false,
                }
                
            },
            xaxis: {
                type: 'datetime',
                tickPlacement: 'between',
                tickAmount: 5,
                categories: selectedDates,
                labels: {
                  show: true
                },
                axisTicks: {
                  show: false,
                },crosshairs: {
                  show: false,
                },
                tooltip: {
                  enabled: false
                }
            },
            tooltip : {
              show:false,
              enabled:false
            }, 
        },
      
      };

    return (
      <>
          {
          status == 'fulFilled' ? 

            <div>
              <ApexChart options={chart.options} series={chart.series} type="area" height={400} />
            </div>

             :

            <div className=' w-full flex items-center justify-center h-[400px]' >
                <Skeleton.Image active  className='w-full'/>
            </div>
        }
      </>
    )
}

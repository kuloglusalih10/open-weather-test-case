import React, { useEffect } from 'react'
import ApexChart from 'react-apexcharts'
import { useSelector,useDispatch } from 'react-redux';


export const Chart = () => {

    let { selectedTabData ,status, selectedDates } = useSelector(state => state.weather)

    let chart = { 
          
        series: [ {
          name: 'Sıcaklık',
          data: selectedTabData
        }],
        options: {

            grid: {
                xaxis: {
                  lines: {
                    //show: false
                  }
                },
                yaxis: {
                  lines: {
                    show: false
                  }
                }
            },
            chart: {
                
                toolbar:{
                    show:false
                },
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                
                curve: 'smooth'
            },
            
            yaxis:{
                tickPlacement: 'on',
            },
            xaxis: {
                
                type: 'datetime',
                tickPlacement: 'between',
                categories: selectedDates
            },
            tooltip: {
                x: {
                format: 'dd/MM/yy HH:mm'
                },
            },
        },
      
      };

    return (
      <>
          {
          status == 'fulFilled' ? 

            <ApexChart options={chart.options} series={chart.series} type="area" height={450} />

             :

            <div>
              {status}
            </div>
        }
      </>
    )
}

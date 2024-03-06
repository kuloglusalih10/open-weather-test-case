import React from 'react'
import ApexChart from 'react-apexcharts'

export const Chart = () => {

    let chart = { 
          
        series: [ {
          name: 'Sıcaklık',
          data: [12, 32]
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
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
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
        <ApexChart options={chart.options} series={chart.series} type="area" height={450} />
    </>
  )
}

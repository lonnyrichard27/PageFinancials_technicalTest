import React, { useState } from 'react';
import Chart from "react-apexcharts";


const Statistics = () => {
  const [state, setstate] = useState({
    series: [{
      name: 'Income',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Expenses',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }],
    toolbar:{
      show: false,
      tools:{
        show:false,
        selection: false
      }
    },
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      colors:['#DB81B3', '#8742E3'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      legend:{
        position: 'top',
        horizontalAlign: 'right',
        colors:['#DB81B3', '#8742E3']
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        
        
      },
      grid:{ show: false},
      fill: {
        opacity: 1,
        colors:['#DB81B3', '#8742E3']
      }
    },
  
  
  })
  return (
    <div className="mt-5">
      <h5 className="font-weight-bolder my-3">Transaction Statistics</h5> 
      <div className="mixed-chart">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500"
        />
      </div>
    </div>
  )
}

export default Statistics

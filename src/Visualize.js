import React from 'react';
import {Chart as ChartJS , CategoryScale,LinearScale,Title,Tooltip,Legend,BarElement} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const state = {
  labels: ['2021-07-11', '2021-07-12', '2021-07-13',
           '2021-07-14', '2021-07-15', '2021-07-16', '2021-07-17'],
  datasets: [
    {
      label: 'Sales Count',
      backgroundColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 2,
      data: [53,42,88,14,77,68,43],
      
    }
  ]
}


function Visualize (){
    return (
      <div style={{background:'black'}}>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Sales',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
            scales: {
              y: {
                ticks: {
                  color: 'white'
                }
              },
              x: {
                ticks: {
                  color: 'white'
                }
              }
            }
          }}
        />
      </div>
    );
}
export default Visualize;
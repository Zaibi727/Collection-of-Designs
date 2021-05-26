import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './TaskThree.module.css';



const data = {
  
    radius: 60,
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        pointRadius: 0,
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
        barPercentage: 0,
        barThickness: 12,
        maxBarThickness: 10,
        data: [25, 20, 30, 22, 18, 28],
        backgroundColor: [
            'rgb(255,0,0)',
            'rgb(255,0,0)',
            'rgb(255,0,0)',
            'rgb(255,0,0)',
            'rgb(255,0,0)',
            'rgb(255,0,0)',
        ],
        borderColor: [
          'rgb(255,0,0)',
          'rgb(255,0,0)',
          'rgb(255,0,0)',
          'rgb(255,0,0)',
          'rgb(255,0,0)',
          'rgb(255,0,0)',
        ],
        borderWidth: 5,
      },
    ],
  };
  

  


export default function TaskThreeContainer() {
    return (
        <div className={styles.double}>
            <div className={styles.wrapper}>
               <p className={styles.p1}>Perfomance</p>
               <p className={styles.p2}>Total orders</p>
             <div>
             <Bar 
               data={data} 
               options={{ 
                barValueSpacing : 1,        // doesn't work; find another way
    barDatasetSpacing : 1,
                plugins:{
   legend: {
    display: false
   }
  },
              maintainAspectRatio: true,
              scales: {
      x: {
        grid: {
          color: 'white',
          borderColor: 'white',
          tickColor: 'white',
        }
      },
      y: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 10,
        },
        grid: {
          color: 'white',
          borderColor: 'white',
          tickColor: 'white'
        },
        
        
      }
    },       
             }}
               
              
               />
             </div>
            </div>
               
        </div>
    )
}

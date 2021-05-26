import React from 'react';
import styles from './chart.module.css';
import { Doughnut } from 'react-chartjs-2';

const data = {

    datasets: [{
      data: [21, 19, 15],
      borderWidth: 0,
              cutout: 62,
      backgroundColor: [     
        'rgb(54, 162, 233)',
        'rgb(38, 12, 109)',       
        'rgb(255, 99, 132)',
      ],
    }],
  
  };

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 160).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "Total 56",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]



export default function Chart() {
    return (
        <div className={styles.h}>
          <h3>Projects</h3>
        <div className={styles.wrapper}>
          <div className={styles.div}>  
            <div className={styles.test}>
            <Doughnut 
          type= {Doughnut}
      
          className={styles.dd}
             data={data}
             plugins={plugins}
	         options={{ 
                legend: {
                display: true,
              },
             
              maintainAspectRatio: false,       
             }}
              
            />
             </div>
          </div>
         <div>
             <div className={styles.label}>
              <div className={styles.blue}></div>
              <div className={styles.content}>
                  <h6>Events: 21</h6>
                  <p>
                      <span>Active: 4,</span> <span>Endend: 17</span>
                  </p>
              </div>
             </div>

             <div className={styles.label}>
              <div className={styles.pink}></div>
              <div className={styles.content}>
                  <h6>Digital: 19</h6>
                  <p>
                      <span>Active: 10,</span> <span>Endend: 9</span>
                  </p>
              </div>
             </div>

             <div className={styles.label}>
              <div className={styles.bluee}></div>
              <div className={styles.content}>
                  <h6>Hire: 15</h6>
                  <p>
                      <span>Active: 1,</span> <span>Endend: 14</span>
                  </p>
              </div>
             </div>
         </div>

        </div>
        </div>
    );
}

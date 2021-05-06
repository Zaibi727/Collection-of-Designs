import React, { Component } from 'react';
import styles from './sixth.module.css';

class SixthContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.sixthWrapper}>
               <section className={styles.sixthSec1}></section>
               <section className={styles.sixthSec2}></section>
               <section className={styles.sixthSec3}>
                   <div className={styles.sec3Header}></div>
                   <div className={styles.sec3Div2}>
                       <div className={styles.sec3Subdiv1}>
                           <div className={styles.gridBoxes}></div>
                           <div className={styles.gridBoxes}></div>
                           <div className={styles.gridBoxes}></div>
                           <div className={styles.gridBoxes}></div>
                           <div className={styles.gridBoxes}></div>
                           <div className={styles.gridBoxes}></div>
                           <div className={styles.gridBoxes}></div>
                           <div className={styles.gridBoxes}></div>
                       </div>
                       <div className={styles.sec3Subdiv2}></div>
                   </div>
               </section>
            </div>
         );
    }
}
 
export default SixthContainer;
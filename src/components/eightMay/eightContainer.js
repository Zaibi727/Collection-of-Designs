import React, { Component } from 'react';
import EightAbstract from './eightAbstract';
import styles from './eight.module.css';


class EightMayContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.doubble}>
            <div className={styles.containerWrapper}>
                <h5>Email notifications</h5>
                 <div className={styles.containerdiv1}>
                   <EightAbstract 
                       label='Offer reservations'
                   />
                 </div>
                 <div className={styles.containerdiv1}>
                   <EightAbstract 
                       label='New actions'
                   />
                 </div>
                 <div className={styles.containerdiv1}>
                   <EightAbstract 
                       label='New message'
                   />
                 </div>
                 <div className={styles.containerdiv4}>
                   <EightAbstract 
                       label='New subscriptions'
                   />
                 </div>
            </div>
            </div>
         );
    }
}
 
export default EightMayContainer;
import React from 'react';
import styles from './eight.module.css';

const EightAbstract = ({label}) => {
    return(
        <div>
           <label className={styles.wholeLabel}>
               <p>{label}</p>
               <div className={styles.switch}>
                  <input type="checkbox" />
                  <span id={styles.round} className={styles.slider}></span>
               </div>
           </label>
        </div>
    )
}

export default EightAbstract;
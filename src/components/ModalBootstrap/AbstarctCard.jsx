import React from 'react';
import styles from './Modal.module.css';

export default function AbstarctInput({label, value, checked, onChange}) {
    return (
        <div className={styles.ab}>
             <div>
                 <label className={styles.labelcover}>
                               <p>
                                 {label}
                               </p>
                               <input 
                               className={styles.circle}
                                type="radio"  
                                value={value}
                                checked={checked}
                                onChange={onChange}
                                />
                 </label>
            </div>
        </div>
    )
}

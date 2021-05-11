import React from 'react';
import styles from './eleven.module.css';



 const CheckInputAbstarct = (props) => {
    const { type, id, label} = {...props };
  return (
     <div>
            <div className={styles.checkboxx}>
            
                 <input
                 className={styles.checkbox} 
                 type={type}
                 id={id}
                   />
                  <label className={styles.label} for={id}>{label}</label>
           </div> 
     </div>      
  )  
};

export default CheckInputAbstarct ;
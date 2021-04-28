import React from 'react';
import styles from './twentyEight.module.css';



 const AbstractEight = (props) => {
    const { type, id} = {...props };
  return (
     <div>
            <div className={styles.round}>
            
                 <input
                 className={styles.checkbox} 
                 type={type}
                 id={id}
                   />
                  <label className={styles.label} for="checkbox"></label>
           </div> 
     </div>      
  )  
};

export default AbstractEight ;
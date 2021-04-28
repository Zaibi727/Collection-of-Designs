import React from 'react';
import styles from './twentyEight.module.css';



 const AbstractEight = (props) => {
    const { type, id1, id2} = {...props };
  return (
     <div>
            <div className={styles.round}>
            
                 <input
                 className={styles.checkbox} 
                 type={type}
                 id={id1}
                 id={id2} 
                   />
                  <label className={styles.label} for="checkbox"></label>
           </div> 
     </div>      
  )  
};

export default AbstractEight ;
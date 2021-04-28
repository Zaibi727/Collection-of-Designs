import React from 'react';
import styles from './twentyEight.module.css';



 const AbstractEight = (props) => {
    const { type, name } = {...props };
  return (
     <div>
            <div className={styles.divOne}>
                 <input 
                 type={type}
                 name={name}
                   className={styles.circleRadio} 
                   />
           </div> 
     </div>      
  )  
};

export default AbstractEight ;
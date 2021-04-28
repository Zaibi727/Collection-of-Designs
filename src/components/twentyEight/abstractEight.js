import React from 'react';
import styles from './twentyEight.module.css';



 const AbstractEight = (props) => {
    const { type, name, id} = {...props };
  return (
     <div>
            <div className={styles.round}>
               
                 <input
                 className={styles.checkbox} 
                 type={type}
                 name={name} 
                 id={id}
                   />
                   <label className={styles.label} for={id}></label>
           </div> 
     </div>      
  )  
};

export default AbstractEight ;
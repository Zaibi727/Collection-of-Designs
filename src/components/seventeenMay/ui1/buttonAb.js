import React from 'react';
import styles from './ui.module.css';



 const ButtonAb = (props) => {
    const { title } = {...props };
  return (
     <div>
            <div>
                 <button  className={styles.btn}>{title}</button>
           </div> 
     </div>      
  )  
};

export default ButtonAb;
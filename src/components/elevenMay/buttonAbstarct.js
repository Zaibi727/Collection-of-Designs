import React from 'react';
import styles from './eleven.module.css';



 const ButtonAbstract = (props) => {
    const { title, type } = {...props };
  return (
     <div>
            <div>
               <button type={type} className={styles.loginbtn}>{title}</button>
           </div> 
     </div>      
  )  
};

export default ButtonAbstract ;
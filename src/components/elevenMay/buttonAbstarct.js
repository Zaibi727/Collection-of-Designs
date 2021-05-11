import React from 'react';
import styles from './eleven.module.css';



 const ButtonAbstract = (props) => {
    const { title } = {...props };
  return (
     <div>
            <div>
               <button className={styles.loginbtn}>{title}</button>
           </div> 
     </div>      
  )  
};

export default ButtonAbstract ;
import React from 'react';
import styles from './abstract.module.css';
//import { AiOutlineEyeInvisible } from 'react-icons/ai';


 const AbstractInput = (props) => {
    const { type1, type2, label1, label2, value1, value2, onChange, Icon } = {...props };
  return (
     <div>
            <div className={styles.divOne}>
               <label  className={styles.labelEmail}>{label1}</label><br></br>
                 <input 
                 type={type1}
                   className={styles.inputEmail} 
                   value={value1}
                   onChange={onChange}
                   />
            </div>
        
            <div className={styles.divTwo}>
                <label className={styles.labelPassword}>{label2}</label><br></br>
              <div className={styles.passwordInputContainer}>
                 <input 
                  type={type2}  
                  className={styles.inputPassword}
                  value={value2}
                  onChange={onChange}
                />
                  Icon={ Icon ? <Icon/>: {Icon} }
              </div>
              
            </div>
       </div> 
  )  
};

export default AbstractInput ;
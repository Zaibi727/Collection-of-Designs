import React from 'react';
import styles from './abstract.module.css';
//import { AiOutlineEyeInvisible } from 'react-icons/ai';


 const AbstractInput = (props) => {
    const { type, label, value, onChange, Icon } = {...props };

    if( type === "email"  ) {
        return(
            <div className={styles.divOne}>
               <label  className={styles.labelEmail}>{label}</label><br></br>
             <input 
                   className={styles.inputEmail} 
                   type="email" 
                   value={value}
                   onChange={onChange}
                   />
            </div>
        )
    } else if ( type=== "password" ) {
        return (
            <div className={styles.divTwo}>
                <label className={styles.labelPassword}>{label}</label><br></br>
                <input 
                  type="password"  
                  className={styles.inputPassword}
                  value={value}
                  onChange={onChange}
                  Icon={<Icon/>}
                />
                
            </div>
        )
    }  else {
        return null;
    }
    
}
export default AbstractInput ;
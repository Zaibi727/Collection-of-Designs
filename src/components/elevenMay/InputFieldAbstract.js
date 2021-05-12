import React from 'react';
import styles from './eleven.module.css';



 const InputFieldAbstract = (props) => {
    const { type, placeholder, Icon, onChange, name, value} = {...props };
  return (
     <div>
            <div className={styles.inputField}>
               <button className={styles.iconBtn}>{ Icon ? <Icon/>: {Icon} }</button>
                 <input
                 className={styles.topInputs} 
                 type={type}
                 placeholder={placeholder}
                 onChange={onChange}
                 name={name}
                 value={value}
                 required           
                   />
                   
           </div> 
     </div>      
  )  
};

export default InputFieldAbstract ;
import React from 'react';
import styles from './ContactUs.module.css';



 const AbstractTextArea = (props) => {
    const { type, id, placeholder, name, value, onChange} = {...props };
  return (
     <div>
            <div>
            
                 <textarea
                  className={styles.textarea}
                 type={type}
                 id={id}
                 placeholder={placeholder}
                 name= {name}
                 value={value}
                 onChange={onChange}
                   />
           </div> 
     </div>      
  )  
};

export default AbstractTextArea ;
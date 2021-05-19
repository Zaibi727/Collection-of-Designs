import React from 'react';
import styles from './ContactUs.module.css';



 const AbstractTextArea = (props) => {
    const { type, id, placeholder} = {...props };
  return (
     <div>
            <div>
            
                 <textarea
                  className={styles.textarea}
                 type={type}
                 id={id}
                 placeholder={placeholder}
                   />
           </div> 
     </div>      
  )  
};

export default AbstractTextArea ;
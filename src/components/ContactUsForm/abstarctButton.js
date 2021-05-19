import React from 'react';
import styles from './ContactUs.module.css';




 const AbstractButton = (props) => {
    const {title, type} = {...props };
  return (
     <div>
            <div>
                <button type={type} className={styles.btn}>
                    {title}
                </button>
           </div> 
     </div>      
  )  
};

export default AbstractButton ;
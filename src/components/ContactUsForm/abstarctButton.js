import React from 'react';
import styles from './ContactUs.module.css';




 const AbstractButton = (props) => {
    const {title} = {...props };
  return (
     <div>
            <div>
                <button className={styles.btn}>
                    {title}
                </button>
           </div> 
     </div>      
  )  
};

export default AbstractButton ;
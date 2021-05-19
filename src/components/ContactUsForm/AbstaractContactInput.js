import React from 'react';
import styles from './ContactUs.module.css';




 const AbstractContactInput = (props) => {
    const { type, id, placeholder} = {...props };
  return (
     <div>
            <div>
            
                 <input
                 type={type}
                 id={id}
                 placeholder={placeholder}
                   />
           </div> 
     </div>      
  )  
};

export default AbstractContactInput ;
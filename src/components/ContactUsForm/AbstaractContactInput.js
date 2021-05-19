import React from 'react';
import styles from './ContactUs.module.css';




 const AbstractContactInput = (props) => {
    const { type, id, placeholder, name, value, onChange} = {...props };
  return (
     <div>
            <div>
            
                 <input
                 type={type}
                 id={id}
                 placeholder={placeholder}
                 name={name}
                 value={value}
                 onChange={onChange}
                 required
                   />
           </div> 
     </div>      
  )  
};

export default AbstractContactInput ;
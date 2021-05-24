import React from 'react';
import styles from './twentyFourMay.module.css';

 const AbstractInput = (props) => {
     const {type, placeholder, Icon} = props;
  return (
  <div>
      <input
         className={styles.input} 
          type={type}
          placeholder={placeholder}
      />
      <span className={styles.spanInput}>{Icon ? <Icon /> : {Icon}}</span>
  </div>
)
}

export default AbstractInput;
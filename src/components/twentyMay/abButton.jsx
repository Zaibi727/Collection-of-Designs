import React from 'react';
import styles from './twentyMay.module.css';


const AbButton = (props) => {
    const {title, Icon} = {...props };
    return ( 
        <div>
           <span className={styles.span}>
               { Icon ? <Icon/>: {Icon} }
            </span>
            <button className={styles.btn}>
              {title}
            </button>
        </div>
     );
}
 
export default AbButton;
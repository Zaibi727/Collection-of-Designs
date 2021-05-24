import React from 'react';
import styles from './PropsChildern.module.css';


 const AbstractFollowMessage = (props) => {
   const {type, title, Icon} = props;
    if( type === "dark"  ) {
        return(
           <div>
                 <button className={styles.follow}>{title}</button>
                 <span className={styles.spanFollow}>{Icon ? <Icon /> : {Icon}}</span>
           </div>
        )
    } else if ( type=== "light" ) {
        return (
           <div>
                <button  className={styles.message}>{title}</button>
                 <span className={styles.spanMessage}>{Icon ? <Icon /> : {Icon}}</span>
           </div>
        )
    }
    else {
        return( 
        <button className={styles.loginBtn}>
          {title}
        </button>
            )
    }
}

export default AbstractFollowMessage;
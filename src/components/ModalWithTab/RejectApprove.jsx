import React from 'react';
import styles from './modalwithtab.module.css';

 const RejectApprove = (props) => {
    const { type, title } = {...props };

    if( type === "light"  ) {
        return(
            <button className={styles.reject}>{title}</button>
        )
    } else if ( type=== "dark" ) {
        return (
            <button className={styles.approve}>{title}</button>
        )
    }else {
        return null;
    }
}

export default RejectApprove;
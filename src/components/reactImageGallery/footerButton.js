import React from 'react';
import styles from './reactImage.module.css';


const FooterButton = () => {
    return(
        <div className={styles.btn}>
            <button className={styles.reject}>Reject</button>
            <button className={styles.approved}>Approved</button>
        </div>
    )
}
export default  FooterButton;
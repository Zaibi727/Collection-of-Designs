import React from 'react';
import styles from './EighteenMay.module.css';

const FooterMailAbstract = (props) => {
    const { type, placeholder, Icon} = {...props };
    return(
        <div className={styles.abCont}>
           <input className={styles.mailInput} type={type} placeholder={placeholder} />
           <span className={styles.mailSign}>{Icon ? <Icon /> : Icon }</span>
        </div>
    )
}

export default FooterMailAbstract;
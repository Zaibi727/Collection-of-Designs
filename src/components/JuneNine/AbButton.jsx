import React from 'react';
import styles from './junenine.module.css';

function AbButton(props) {
    const {label, Icon} = props;
    return (
        <div className={styles.abbtn}>
            <div>
            <span className={styles.btnicon}>{Icon ? <Icon/> : {Icon}}</span>
            <p className={styles.btnlabel}>{label}</p>
           </div>
            
        </div>
    )
}

export default AbButton;
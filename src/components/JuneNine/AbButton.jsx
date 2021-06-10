import React from 'react';
import styles from './junenine.module.css';

function AbButton(props) {
    const {button} = props;
    return (
        <div className={styles.abbtn}>

            <span className={styles.btnicon}>{button.Icon}</span>
            <p className={styles.btnlabel}>{button.label}</p>     

        </div>
    )
}

export default AbButton;
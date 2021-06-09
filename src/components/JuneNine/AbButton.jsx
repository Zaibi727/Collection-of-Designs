import React from 'react';
import styles from './junenine.module.css';

function AbButton(props) {
    const {item, onAdd} = props;
    return (
        <div className={styles.abbtn} onClick={onAdd}>
            <div>
            <span className={styles.btnicon}>{item.Icon}</span>
            <p className={styles.btnlabel}>{item.label}</p>
           </div>
            
        </div>
    )
}

export default AbButton;
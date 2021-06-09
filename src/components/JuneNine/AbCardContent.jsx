import React from 'react';
import styles from './junenine.module.css';

function AbCardContent(props) {
    const {Icon, label, price} = props;
    return (
        <div className={styles.AbCardContent}>
            <span>{Icon ? <Icon /> : {Icon}}</span>
            <div className={styles.ps}>
                <p className={styles.p1}>{label}</p>
                <p className={styles.p2}>{price}</p>
            </div>
        </div>
    )
}

export default AbCardContent

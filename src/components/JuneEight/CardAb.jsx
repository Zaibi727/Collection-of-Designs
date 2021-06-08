import React from 'react';
import styles from './juneEight.module.css';

const CardAb = (props) => {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default CardAb

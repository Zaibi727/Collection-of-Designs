import React from 'react';
import styles from './PropsChildern.module.css';

export default function AbstarctCard(props) {
    return (
        <div className={styles.AbCard}>
            {props.children}
        </div>
    )
}

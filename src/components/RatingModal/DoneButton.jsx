import React from 'react';
import styles from './ratingmodal.module.css';

export default function DoneButton({title}) {
    return (
        <div>
            <button className={styles.donebtn}>{title}</button>
        </div>
    )
}

import React from 'react';
import styles from './boardwalk.module.css';

export default function TopHeader() {
    return (
        <div className={styles.topHeader}>
            <h4>Food</h4>
            <div className={styles.topDiv1}>
                <p> Lorea ISPUM</p>
                <img src='./images/profile.jpg' />
            </div>
        </div>
    )
}

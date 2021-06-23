import React from 'react';
import styles from './HomeScreenOne.module.css';

const AbTop = ({name,src,time}) => {
    return (
        <div className={styles.bottom}>
            <img src={src} />
            <div className={styles.sub}>
                <p className={styles.p1}>{name}</p>
                <p className={styles.p2}>{time}</p>
            </div>
        </div>
    )
}

export default AbTop;

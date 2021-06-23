import React from 'react';
import styles from './HomeThree.module.css';

function AbTop({src, username, time, Icon}) {
    return (
        <div className={styles.top}>
            <img className={styles.userpic} src={src} />
            <div className={styles.sub}>
                <p className={styles.name}>{username} <span className={styles.icon}>{Icon ? <Icon /> : {Icon}}</span></p>
                <p className={styles.time}>{time}</p>
            </div>
        </div>
    )
}

export default AbTop;

import React from 'react';
import styles from './HomeThree.module.css';

function AbTop({src, username, time, Icon}) {
    return (
        <div className={styles.top}>
            <img className={styles.userpic} src={src} />
            <div className={styles.sub}>
            <div className={styles.new}>
                  <p className={styles.name}>{username}</p>
                  <i className={styles.icon}>{Icon ? <Icon /> : {Icon}}</i>
                </div>
                <p className={styles.time}>{time}</p>
            </div>
        </div>
    )
}

export default AbTop;

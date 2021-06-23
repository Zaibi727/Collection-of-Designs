import React from 'react';
import styles from './HomeTwo.module.css'

function AbTop({src, username, time, Icon}) {
    return (
        <div className={styles.abtop}>
            <div className={styles.topDivone}>
                <img src={src} />
                <div className={styles.subtop}>
                    <p className={styles.username}>{username}</p>
                    <p className={styles.time}>{time}</p>
                </div>
            </div>
            <button className={styles.instabtn}>
                {Icon ? <Icon /> : {Icon}}
            </button>
        </div>
    )
}

export default AbTop

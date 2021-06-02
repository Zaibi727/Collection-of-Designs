import React from 'react';
import styles from './thirtyFirst.module.css';

export default function NotiMessageTwo(props) {
  const {src, text, name, time} = props;

    return (
        <div className={styles.NotiMessage}>
            <div className={styles.NotiMessageDiv1}>
                <img src={src} />
                <p><span className={styles.greaay}>{name}</span> <br />{text}</p>
            </div>
            <p className={styles.time}>{time}</p>
        </div>
    )
}

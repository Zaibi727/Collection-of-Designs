import React from 'react';
import styles from './thirtyFirst.module.css';

export default function NotiMessage(props) {
  const {src, text, name, time} = props;

    return (
        <div className={styles.NotiMessage}>
            <div className={styles.NotiMessageDiv1}>
                <img src={src} />
                <p><span className={styles.teal}>{name}</span> {text}</p>
            </div>
            <p className={styles.time}>{time}</p>
        </div>
    )
}

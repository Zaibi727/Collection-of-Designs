import React from 'react';
import styles from './HomeThree.module.css';

export default function AbMiddle({link, src}) {
    return (
        <div className={styles.middle}>
            <a href={link}>{link}...</a>
            <img className={styles.midimg} src={src} />
        </div>
    )
}

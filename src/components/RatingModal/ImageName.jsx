import React from 'react';
import styles from './ratingmodal.module.css';

export default function ImageName({name, src}) {
    return (
        <div>
            <img className={styles.img} src={src} />
            <h5 className={styles.name}>{name}</h5>
        </div>
    )
}

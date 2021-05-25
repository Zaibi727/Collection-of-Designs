import React from 'react';
import styles from './Udacity.module.css';

export default function AbstractContent(props) {
    const {content} = props;
    return (
        <div className={styles.indvidualCard}>
            <img className={styles.img} src={content.image}/>
            <p className={styles.name}>{content.name}</p>
            <p className={styles.profession}>{content.profession}</p>
            <p className={styles.bio}>
                {content.bio}
            </p>
        </div>
    )
}

import React from 'react';
import styles from './twentyFourMay.module.css';

export default function AbstractImages(props) {
    const {src} = props
    return (
        <div>
            <img 
               className={styles.profileImg}
                src={src}
            />
        </div>
    )
}

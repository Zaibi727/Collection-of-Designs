import React, { Component } from 'react';
import styles from './eightMasonry.module.css';

const EightImage = ({src}) => {
    return(
        <div>
            <img className={styles.img}  src={src} />
        </div>
    )
}
export default EightImage;
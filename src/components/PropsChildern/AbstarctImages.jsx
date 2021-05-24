import React from 'react';
import styles from './PropsChildern.module.css';

export default function AbstractImages(props) {
    const {src, style }= props
    return (
        <div>
            <img 
               className={styles.profileImg}
                src={src}
                style={style}
            />
        </div>
    )
}

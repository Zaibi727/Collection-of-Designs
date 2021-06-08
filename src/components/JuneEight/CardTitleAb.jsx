import React from 'react';
import styles from './juneEight.module.css';

function CardTitleAb(props) {
    const {title} = props;
    return (
        <div>
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default CardTitleAb

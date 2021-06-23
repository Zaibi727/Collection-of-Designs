import React from 'react';
import styles from './HomeScreenOne.module.css';

const AbBotttom = ({Icon}) => {
    return (
        <div>
            <button className={styles.iconbtn}>
                {Icon ? <Icon /> : {Icon}}
            </button>
        </div>
    )
}

export default AbBotttom

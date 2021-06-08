import React from 'react';
import styles from './juneEight.module.css';

function ButtonAb(props) {
    const {label} = props;
    return (
        <div>
            <button className={styles.buttons}>{label}</button>
        </div>
    )
}

export default ButtonAb

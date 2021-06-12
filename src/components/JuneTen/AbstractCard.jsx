import React from 'react';
import styles from './juneten.module.css';

function AbCard(props) {
    return (
        <div className={styles.abcard}>
               {props.children}
        </div>
    )
}

export default AbCard;
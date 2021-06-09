import React from 'react';
import styles from './junenine.module.css';

function AbCard(props) {
    return (
        <div className={styles.abcard}>
               {props.children}
        </div>
    )
}

export default AbCard;
import React from 'react';
import styles from './Modal.module.css';


export default function SendButtonAbstract({title}) {
    return (
        <div>
           <button className={styles.sendbtn}>{title}</button>
        </div>
    )
}

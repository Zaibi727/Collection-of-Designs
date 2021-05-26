import React from 'react';
import { Children } from 'react';
import styles from './TaskOne.module.css';

export default function AbstractCard(props) {
    return (
        <div className={styles.abWrapper}>
           {props.children}
        </div>
    )
}

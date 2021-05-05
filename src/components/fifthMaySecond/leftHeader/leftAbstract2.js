import React, { Component } from 'react';
import styles from './leftHeader.module.css';

const LeftAbstractTwo = (props) => {
    const { label, src, Icon } = {...props }
        return ( 
            <div className={styles.ab2}>
                <p>{label}</p>
                <img className={styles.accountImg} src={src}/><br />
                <span className={styles.expandIcon}>{ Icon ? <Icon/>: {Icon} }</span>
            </div>
         );
    }

 
export default LeftAbstractTwo;
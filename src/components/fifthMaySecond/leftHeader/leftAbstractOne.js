import React, { Component } from 'react';
import styles from './leftHeader.module.css';

const LeftAbstractOne = ({Icon}) => {
        return ( 
            <div>
                <button className={styles.plusBtn}>
                  <span >{ Icon ? <Icon/>: {Icon} }</span>
                </button>
            </div>
         );
    }

 
export default LeftAbstractOne;
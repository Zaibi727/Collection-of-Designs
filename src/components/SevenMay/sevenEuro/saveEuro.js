import React, { Component } from 'react';
import Select from 'react-select';
import styles from './euro.module.css';
import {currencyOptions} from '../sevenData';


function SaveEuro (props) {
        return ( 
            <div className={styles.saveEnglishWrapper}>
                 <div className={styles.SaveEnglishSelect}>
                   <Select
                   className={styles.currencySelect}
                   options={currencyOptions}
                   defaultValue={[currencyOptions[0]]}
                   />
                 </div>
                 <button className={styles.SaveEnglishBtn} onClick={props.onClick}>save</button>
            </div>
         );
    }
 
export default SaveEuro;
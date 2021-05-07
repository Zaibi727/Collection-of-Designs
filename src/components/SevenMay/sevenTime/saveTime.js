import React, { Component } from 'react';
import Select from 'react-select';
import styles from './time.module.css';
import {timeOptions} from '../sevenData';

function SaveTime (props) {
        return ( 
            <div className={styles.saveEnglishWrapper}>
                 <div className={styles.SaveEnglishSelect}>
                   <Select
                   options={timeOptions}
                   defaultValue={[timeOptions[0]]}
                   />
                 </div>
                 <button className={styles.SaveEnglishBtn} onClick={props.onClick}>save</button>
            </div>
         );
    }
 
export default SaveTime;
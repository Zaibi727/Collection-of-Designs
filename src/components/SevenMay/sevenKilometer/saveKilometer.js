import React, { Component } from 'react';
import Select from 'react-select';
import styles from './kilometer.module.css';
import {distanceOptions} from '../sevenData';

function SaveKilometer (props) {
        return ( 
            <div className={styles.saveEnglishWrapper}>
                 <div className={styles.SaveEnglishSelect}>
                   <Select
                   className={styles.distanceSelect}
                   options={distanceOptions}
                   defaultValue={[distanceOptions[0]]}
                   />
                 </div>
                 <button className={styles.SaveEnglishBtn} onClick={props.onClick}>save</button>
            </div>
         );
    }
 
export default SaveKilometer;
import React, { Component } from 'react';
import Select from 'react-select';
import styles from './english.module.css';
import {languageOptions} from '../sevenData';

function SaveEnglish (props) {
        return ( 
            <div className={styles.saveEnglishWrapper}>
                 <div className={styles.SaveEnglishSelect}>
                   <Select
                   className={styles.englishSelect}
                   options={languageOptions}
                   defaultValue={[languageOptions[0]]}
                   />
                 </div>
                 <button className={styles.SaveEnglishBtn} onClick={props.onClick}>save</button>
            </div>
         );
    }
 
export default SaveEnglish;
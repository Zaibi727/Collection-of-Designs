import React from 'react';
import styles from './english.module.css';


function EditEnglish (props) {
        return ( 
            <div className={styles.englishEditWrapper}>
                <div className={styles.englishEditDiv1}>
                    <p className={styles.englishP1}>English</p>
                    <p className={styles.englishP2}>Language</p>
                </div>
                <button className={styles.editBtn} onClick={props.onClick}>Edit</button>
            </div>
         );
    }
 
export default EditEnglish;
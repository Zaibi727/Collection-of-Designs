import React from 'react';
import styles from './time.module.css';


function EditTime (props) {
        return ( 
            <div className={styles.englishEditWrapper}>
                <div className={styles.englishEditDiv1}>
                    <p className={styles.englishP1}>24 hours</p>
                    <p className={styles.englishP2}>Time setting</p>
                </div>
                <button className={styles.editBtn} onClick={props.onClick}>Edit</button>
            </div>
         );
    }
 
export default EditTime;
import React from 'react';
import styles from './kilometer.module.css';


function EditKilometer (props) {
        return ( 
            <div className={styles.englishEditWrapper}>
                <div className={styles.englishEditDiv1}>
                    <p className={styles.englishP1}>Kilometer</p>
                    <p className={styles.englishP2}>Distance units</p>
                </div>
                <button className={styles.editBtn} onClick={props.onClick}>Edit</button>
            </div>
         );
    }
 
export default EditKilometer;
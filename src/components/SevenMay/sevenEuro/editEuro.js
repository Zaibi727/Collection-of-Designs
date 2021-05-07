import React from 'react';
import styles from './euro.module.css';
import { FaEuroSign } from "react-icons/fa";


function EditEuro (props) {
        return ( 
            <div className={styles.englishEditWrapper}>
                <div className={styles.englishEditDiv1}>
                    <p className={styles.englishP1}><span className={styles.euroSign}><FaEuroSign /></span>Euro</p>
                    <p className={styles.englishP2}>Currency</p>
                </div>
                <button className={styles.editBtn} onClick={props.onClick}>Edit</button>
            </div>
         );
    }
 
export default EditEuro;
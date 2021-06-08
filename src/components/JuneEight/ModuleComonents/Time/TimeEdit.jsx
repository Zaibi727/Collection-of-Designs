import React from 'react';
import ButtonAb from '../../ButtonAb';

import styles from './time.module.css';

function TimeEdit(props) {
    return (
        <div className={styles.langague}>
            <div>
                <p className={styles.p1}>Time</p>
                <p className={styles.p2}>Time settings</p>
            </div>
            <div onClick={props.onClick}>
                <ButtonAb 
                    label="Edit"
                />
            </div>
        </div>
    )
}

export default TimeEdit;


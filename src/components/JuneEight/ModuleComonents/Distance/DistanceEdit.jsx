import React from 'react';
import ButtonAb from '../../ButtonAb';

import styles from './distance.module.css';

function DistanceEdit(props) {
    return (
        <div className={styles.langague}>
            <div>
                <p className={styles.p1}>Meters</p>
                <p className={styles.p2}>Distance units</p>
            </div>
            <div onClick={props.onClick}>
                <ButtonAb 
                    label="Edit"
                />
            </div>
        </div>
    )
}

export default DistanceEdit;


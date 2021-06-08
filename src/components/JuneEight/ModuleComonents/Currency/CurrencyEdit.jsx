import React from 'react';
import ButtonAb from '../../ButtonAb';
import { BiEuro } from "react-icons/bi";

import styles from './currency.module.css';

function CurrencyEdit(props) {
    return (
        <div className={styles.langague}>
            <div>
                <p className={styles.p1}><span><BiEuro /></span> Euro</p>
                <p className={styles.p2}>Currency</p>
            </div>
            <div onClick={props.onClick}>
                <ButtonAb 
                    label="Edit"
                />
            </div>
        </div>
    )
}

export default CurrencyEdit;


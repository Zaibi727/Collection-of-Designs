import React from 'react';
import ButtonAb from '../../ButtonAb';
import styles from './language.module.css';

function LanguageEdit(props) {
    return (
        <div className={styles.langague}>
            <div>
                <p className={styles.p1}>{props.value}</p>
                <p className={styles.p2}>Language</p>
            </div>
            <div onClick={props.onClick}>
                <ButtonAb 
                    label="Edit"
                />
            </div>
        </div>
    )
}

export default LanguageEdit;
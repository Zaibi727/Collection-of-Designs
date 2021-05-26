import React from 'react';
import styles from './TaskOne.module.css';

export default function AbstractRoundButton(props) {
    const {Icon, style} = props;
    return (
        <div>
            <button className={styles.roundbtn}  style={style}>
                {Icon ? <Icon /> : {Icon}}
            </button>
        </div>
    )
}

import React from 'react';
import styles from './thirtyFirst.module.css';

export default function AccountDropDown(props) {
    const {title, Icon} = props;
    return (
        <div className={styles.accountDp}>
            <span>{ Icon ? <Icon/>: {Icon} }</span>
            <p>{title}</p>
        </div>
    )
}

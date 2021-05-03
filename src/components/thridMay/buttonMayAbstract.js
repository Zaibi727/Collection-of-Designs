import React from 'react';
import styles from './inputRange.module.css';


const ButtonMayAbstract = (props) => {
    const {Icon } = {...props };
    return(
        <div>
            <button className={styles.usersIcon}>{ Icon ? <Icon/>: {Icon} }</button>
        </div>
    )
}

export default ButtonMayAbstract;
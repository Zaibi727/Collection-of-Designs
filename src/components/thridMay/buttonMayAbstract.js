import React from 'react';
import styles from './inputRange.module.css';


const ButtonMayAbstract = (props) => {
    const {Icon } = {...props };
    return(
        <div>
            <h4 className={styles.usersIcon}>{ Icon ? <Icon/>: {Icon} }</h4>
        </div>
    )
}

export default ButtonMayAbstract;
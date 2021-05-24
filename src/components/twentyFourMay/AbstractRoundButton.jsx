import React from 'react';
import styles from './twentyFourMay.module.css';

 const AbstractRoundButton = (props) => {
     const {type, Icon} = props;

    if( type === "light"  ) {
        return(
            <button className={styles.likeEdit}>{Icon ? <Icon /> : {Icon} }</button>
        )
    } else {
        return (
            <button className={styles.soicalIconBtn}>{ Icon ? <Icon/>: {Icon} }</button>
        );
    }
}

export default AbstractRoundButton;
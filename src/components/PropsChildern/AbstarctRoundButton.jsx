import React from 'react';
import styles from './PropsChildern.module.css';

 const AbstractRoundButton = (props) => {
     const {type, Icon, style} = props;

    if( type === "light"  ) {
        return(
            <button className={styles.likeEdit}>{Icon ? <Icon /> : {Icon} }</button>
        )
    } else {
        return (
            <button style={style} className={styles.soicalIconBtn}>{ Icon ? <Icon/>: {Icon} }</button>
        );
    }
}

export default AbstractRoundButton;
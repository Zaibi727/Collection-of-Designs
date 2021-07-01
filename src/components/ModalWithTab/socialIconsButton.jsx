import React from 'react';
import styles from './modalwithtab.module.css';

function SocialIconsButton({Icon}) {
    return (
        <div>
            <button className={styles.socialiconbtn}>
             {Icon ? <Icon /> : {Icon}}
            </button>
        </div>
    )
}

export default SocialIconsButton;

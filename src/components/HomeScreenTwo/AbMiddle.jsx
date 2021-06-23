import React from 'react';
import styles from './HomeTwo.module.css';


function AbMiddle({src}) {
    return (
        <div>
            <img 
            className={styles.midimg}
                src={src}
            />
        </div>
    )
}

export default AbMiddle;
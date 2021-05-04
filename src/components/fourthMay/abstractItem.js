import React from 'react';
import styles from './fourtMay.module.css';

const AbstarctTabItem = (props) => {
    const {title} = {...props };
    return(
        <div>
            <nav>
                <ul>
                  <li>
                    <a className={styles.a}>
                    {title}
                    </a>
   
                  </li>
                </ul>
            </nav>
        </div>
    )
}
export default AbstarctTabItem;
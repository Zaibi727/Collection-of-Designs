import React from 'react';
import styles from './sideBar.module.css';


export default function TopNav() {
    return (
        <div>
            <header className={styles.header}>
                <ul className={styles.headerUl}>
               
                      <li className={styles.active}>
                        Home
                      </li>
                      <li className={styles.active}>
                     About
                      </li>
                      <li className={styles.active}>
                        Contact us
                      </li>
                      <li className={styles.active}>
                      FAQ's
                      </li>
               
                  
                </ul>
            </header>
        </div>
    )
}


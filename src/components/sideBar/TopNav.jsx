import React from 'react';
import styles from './sideBar.module.css';

export default function TopNav() {
    return (
        <div>
            <header className={styles.header}>
                <h4>Logo</h4>
                <ul className={styles.headerUl}>
                   <li>Home</li>
                   <li>Contact</li>
                   <li>About</li>
                   <li>FAQs</li>
                </ul>
            </header>
        </div>
    )
}

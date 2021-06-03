import React from 'react';
import styles from './juneThree.module.css';

import {
    Link
  } from "react-router-dom";

export default function SideBar() {
    return (
        <div className={styles.sidebarWrapper}>
            <ul className={styles.sideul}>
                 <Link to="/" className={styles.link}>
                     <li>Logo</li>
                 </Link>
                 <Link to="/home" className={styles.link}>
                     <li>Home</li>
                 </Link>
                 <Link to="about" className={styles.link}>
                     <li>About</li>
                 </Link>
                 <Link to="/product" className={styles.link}>
                     <li>Product</li>
                 </Link>
            </ul>
        </div>
    )
}

